import React from 'react'

const VideoCard = ({info}) => {
    console.log(info)
    const {snippet, statistics} = info;
    const truncateText = (text, maxLength) =>
  text.length > maxLength ? text.slice(0, maxLength) + '...' : text;


  return (
<div className="p-2 m-2 w-full sm:w-72 h-[18rem] bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
  <div className="relative overflow-hidden">
    <img
      className="object-cover w-full h-full rounded-md"
      alt="thumbnail"
      src={snippet.thumbnails.medium.url}
    />
  </div>
  <div className="py-4 px-3">
    <h3 className="text-lg font-semibold text-gray-800">
      {truncateText(snippet.title, 25)}
    </h3>
    <p className="text-gray-600">{snippet.channelTitle}</p>
    <p className="text-gray-600">{statistics.viewCount} views</p>
  </div>
</div>


  
  
  
  
  )
}

export default VideoCard