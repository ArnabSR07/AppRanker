import React, { useState } from "react";
import ExploreButton from "./ExploreButton";
import { assets } from "../assets/assets";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";
import { GiTrophyCup } from "react-icons/gi";


const Navbar = () => {
  const percentage = 66;
  const [showDropdown, setShowDropDown] = useState(false);
  return (
    <nav className="opacity-100 flex justify-between pt-8 px-10 mb-10">
      <div className="flex items-center justify-center gap-5">
        <Link to="/">
          <img className="h-5 w-35 inline-block" src={assets.logo} alt="" />
        </Link>

        <ExploreButton />
        <div
          className="w-10 h-10 rounded-full bg-black inline-block"
          style={{
            backgroundImage: `url(${assets.plus})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="rounded-full bg-black flex items-center justify-between gap-3 px-3">
        <div className="shrink-0">
          <Link to="/impact-dashboard">
            <CircularProgressbar
              value={percentage}
              className="w-10 h-10 m-0 cursor-pointer"
              text={`${percentage}%`}
              styles={{
                path: {
                  stroke: `rgba(34, 197, 94, ${percentage / 100})`,
                },
                text: {
                  fill: "#22c55e",
                  fontSize: "24px",
                  fontWeight: "bold",
                },
                trail: {
                  stroke: "#166534",
                },
              }}
            />
          </Link>
        </div>
        <div className="text-white text-sm font-bold">{percentage}% impact</div>
        <div
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={() => setShowDropDown(!showDropdown)}
          style={{
            backgroundImage: `url(${assets.profile})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      {/* Dropdown */}
      {showDropdown && (
        <div className="bg-cyan-950 rounded-lg  absolute top-22 right-12">
          <Link onClick={()=>setShowDropDown(!showDropdown)}>
            {" "}
            <div className="flex items-center justify-start gap-5 px-2 py-2 hover:bg-cyan-600">
              <FaUser className="h-3 w-4 text-cyan-500" />
              <span className="text-white font-semibold">Profile</span>
            </div>
          </Link>

          <Link to="impact-dashboard" onClick={()=>setShowDropDown(!showDropdown)}>
            <div className="flex items-center justify-start gap-5 px-2 py-2 hover:bg-cyan-600">
              <GiTrophyCup className="h-4 w-4 text-cyan-500" />
              <span className="text-white font-semibold">Your Score</span>
            </div>
          </Link>
          <Link to="/admin" onClick={()=>setShowDropDown(!showDropdown)}>
            <div className="flex items-center justify-start gap-5 px-2 py-2 hover:bg-cyan-600">
              <CiSettings className="h-5 w-4 text-white" />
              <span className="text-white font-semibold">Admin Panel</span>
            </div>
          </Link>
          <Link onClick={()=>setShowDropDown(!showDropdown)}>
            <div className="flex items-center justify-start gap-5 px-2 py-2 hover:bg-cyan-600">
              <TbLogout2 className="h-5 w-4 text-red-500" />
              <span className=" text-red-500 font-semibold">Logout</span>
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
