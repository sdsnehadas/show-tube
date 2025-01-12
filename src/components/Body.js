import React from 'react'
import SideBar from './SideBar';
import VideoContainer from './VideoContainer';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
const Body = () => {
const ismenuOpen = useSelector(store=>store.app.ismenuOpen)
  return (
    <div className="flex w-full">
    {ismenuOpen && <SideBar/>}
    <Outlet></Outlet>
    </div>  )
}

export default Body