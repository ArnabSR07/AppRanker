import React from "react";
import ExploreButton from "./ExploreButton";
import { assets } from "../assets/assets";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const percentage = 66;
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
          /></Link>
        </div>
        <div className="text-white text-sm font-bold">{percentage}% impact</div>
        <div
          className="w-10 h-10 rounded-full"
          style={{
            backgroundImage: `url(${assets.profile})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
