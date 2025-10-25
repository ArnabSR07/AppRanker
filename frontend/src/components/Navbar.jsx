import React from "react";
import ExploreButton from "./ExploreButton";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-8 px-10 mb-10">
      <div className="flex items-center justify-center gap-5">
        <img className="h-5 w-35 inline-block" src={assets.logo} alt="" />
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

      <div className="rounded-full bg-black flex items-center justify-between gap-5 px-3">
        <span className="text-white font-bold">87% impact</span>
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
