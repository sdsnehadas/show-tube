import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { YOUTUBE_VIDEO_LIST_API_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const VideoContainer = () => {


  const [videos, setVideos] =useState([]);

  useEffect(()=>{
    fetchVideos();
  },[]);

  const fetchVideos = async () =>{
    const data = await fetch(YOUTUBE_VIDEO_LIST_API_URL);
    const response = await data.json();
    console.log("api response",response)
    setVideos(response.items)
  }


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {videos.map((video)=>{
        return <Link to={"/watch?v="+video.id}><Videocard key={video.id}video={video}/></Link>
      })}
    </div>
  )
}

export default VideoContainer