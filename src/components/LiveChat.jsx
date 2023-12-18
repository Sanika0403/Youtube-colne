import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../redux/slices/chatSlice";
import { generateName } from "../utils/helper";
import { getRandomMessage } from "../utils/helper";
const LiveChat = () => {
  const [liveMessae,setLiveMessage] = useState("");
  // console.log(liveMessae)
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const api = setInterval(() => {
      // console.log("hello");
      dispatch(
        addMessages({
          name: generateName(),
          message: getRandomMessage(),
        })
      );
    }, 1500);
    return () => clearInterval(api);
  }, []);
  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black overflow-y-auto bg-slate-100 rounded-lg flex flex-col-reverse">
        <div>
          {ChatMessages.map((c, index) => {
            return (
              <ChatMessage key={index} name={c.name} message={c.message} />
            );
          })}
        </div>
      </div>
      <form className="w-full p-2 ml-2 border border-black rounded-md flex justify-between"
      onSubmit={(e)=>{
        e.preventDefault();
        // console.log("form", liveMessae)
        dispatch(
        addMessages({
          name: "Mayuresh Juvekar",
          message: liveMessae,
        })
      );
      setLiveMessage("")
      }}>
        <input className="w-96 outline-none" type="text" value={liveMessae} onChange={(e)=>{setLiveMessage(e.target.value)}} placeholder="Enter your message" />
        <button className="mr-2 rounded-md bg-slate-400 text-white px-4">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
