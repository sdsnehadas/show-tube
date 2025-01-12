import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { YOUTUBE_VIDEO_LIST_API_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const RecommendedVideos = () => {


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
    <div className="">
      <h1>RECOMMENDED</h1>
      {/* {videos.map((video)=>{
        return <Link to={"/watch?v="+video.id}><Videocard key={video.id}video={video}/></Link>
      })} */}
    </div>
  )
}

export default RecommendedVideos;