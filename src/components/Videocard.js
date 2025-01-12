import React from 'react'

const Videocard = ({video}) => {
  return (
    <div className="w-full h-full p-4 m-2 bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
      <img src={video.snippet.thumbnails.high.url} alt="thumbnail" className="hover:rounded-xl w-full h-72"></img>
      <div className="p-4">
        <h3 className="text-lg font-bold text-black line-clamp-2">{video.snippet.title}
        </h3>
        <p className="text-sm text-black mt-2">{video.snippet.channelTitle}</p>
        <div className="text-sm text-black mt-1 flex justify-between items-center">
          <span>{video.statistics.viewCount} views</span>
          <span>{video.snippet.publishedAt}</span>
        </div>
      </div>
    </div>
  )
}

export default Videocard