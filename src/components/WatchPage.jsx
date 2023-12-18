import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
  <div className="px-5 flex flex-col sm:flex-row w-full">
    <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5">
    <iframe
  className="w-full"
  height="500"
  src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>

    </div>
    <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <LiveChat />
    </div>
  </div>

  <CommentsContainer />
</div>

  );
};

export default WatchPage;
