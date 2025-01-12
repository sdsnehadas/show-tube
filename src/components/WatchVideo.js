import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { collapseMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import RecommendedVideos from "./RecommendedVideos";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log("dchdhhjdf", searchParams.get("v"));

//  const fetchData = new Promise((resolve, reject)=>{
//   setTimeout(()=>{resolve("data is fetched")}, 1000)
//  })

//  fetchData
//  .then((data)=>{console.log(data)})
//  .catch((error)=>{console.log(error)})


//method1
// const fetchData = () =>{

//   fetch("https://sample/url")
//   .then((response)=>{
//     return response.json()
//   })
//   .then((data)=>{
//     console.log(data)
//   })
//   .catch(error=>console.log(error))
// }


//method 2 ASYNC/AWAIT

// const fetchData = async () =>{
//   try{

//     const response = await fetch("https://sample-api")
//     const data = await response.json()
//     console.log(data)
//   }
//   catch(error) {
//   console.error(error)
//   }

// }
// fetchData();

  useEffect(() => {
    dispatch(collapseMenu());
  }, []);
  return (
    <div className="grid grid-cols-2 gap-2 p-4">
      <div className="m-4 p-4 col-span-8">
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frame-border="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="col-span-2">
        <RecommendedVideos />
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
