import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="m-4 p-4 w-4/12">
      <ul>
        <li className="hover:bg-slate-100">
          <button>
            <svg
              height="40"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 40V28h8v12h10V24h6L24 6 4 24h6v16z" />
              <path d="M0 0h48v48H0z" fill="none" />
            </svg>
          </button>
          <Link to="/"><span className="font-bold pb-4 text-black text-lg"> Home</span></Link>
        </li>
        <li className="hover:bg-slate-100">
          <button classname="hover:bg-slate-500">
            <svg
              height="40"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M40 16H8v-4h32v4zM36 4H12v4h24V4zm8 20v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V24c0-2.21 1.79-4 4-4h32c2.21 0 4 1.79 4 4zm-12 8l-12-6.53v13.06L32 32z" />
              <path d="M0 0h48v48H0z" fill="none" />
            </svg>
          </button>
          <span className="font-bold m-2 text-black text-lg"> Shorts</span>
        </li>
        <li className="hover:bg-slate-100">
          <button>
            <svg
              height="40"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M40 16H8v-4h32v4zM36 4H12v4h24V4zm8 20v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V24c0-2.21 1.79-4 4-4h32c2.21 0 4 1.79 4 4zm-12 8l-12-6.53v13.06L32 32z" />
              <path d="M0 0h48v48H0z" fill="none" />
            </svg>
          </button>
          <span className="font-bold m-2 text-black text-lg">
            {" "}
            Subscriptions
          </span>
        </li>
        <li className="hover:bg-slate-100">
          <button>
            <svg
              height="40"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 40V28h8v12h10V24h6L24 6 4 24h6v16z" />
              <path d="M0 0h48v48H0z" fill="none" />
            </svg>
          </button>
          <span className="font-bold m-2 text-black text-lg"> You</span>
        </li>
        <li className="hover:bg-slate-100">
          <button>
            <svg
              height="40"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M40 16H8v-4h32v4zM36 4H12v4h24V4zm8 20v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V24c0-2.21 1.79-4 4-4h32c2.21 0 4 1.79 4 4zm-12 8l-12-6.53v13.06L32 32z" />
              <path d="M0 0h48v48H0z" fill="none" />
            </svg>
          </button>
          <span className="font-bold m-2 text-black text-lg"> Explore</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
