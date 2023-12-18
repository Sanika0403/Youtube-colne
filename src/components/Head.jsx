import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/slices/appSlice";
import { useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../Constant";
import { cacheResult } from "../redux/slices/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    try {
      console.log(searchQuery);
      const data = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
      const res = await data.json();
      // console.log(res[1]);
      setSuggestion(res[1]);
      dispatch(cacheResult({ [searchQuery]: res[1] }));
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 mx-2 cursor-pointer"
          onClick={() => {
            toggleMenuHandler();
          }}
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg=="
        />
        <Link to="/"><img alt="logo" className="h-8" src="./yt.png" /> </Link>
        
      </div>
      <div className="col-span-10  px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className=" border border-gray-400 px-5 bg-gray-100  p-2 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestion ? (
          <div className="fixed bg-white py-2 px-2 w-[30rem] shadow-lg rounded-lg border border-gray-100 ">
            <ul>
              {suggestion.map((suggest, index) => (
                <li
                  key={index}
                  className="py-2 px-2 shadow-sm hover:bg-gray-100"
                >
                  🔍 {suggest}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user-icon" src="./user.png" />
      </div>
    </div>
  );
};

export default Head;
