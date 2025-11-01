import React, { useEffect, useState } from "react";
import { CiPen } from "react-icons/ci";
import { RiGroupLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { BsStars } from "react-icons/bs";


const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 800;  
    const incrementTime = 16; 
    const totalIncrements = duration / incrementTime;
    const increment = target / totalIncrements;

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(counter);
  }, [target]);

  return <span>{count}</span>;
};

const ImpactDashboard = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-white mb-10 text-center">
        Your Impact Dashboard
      </h1>
      <div className="grid grid-cols-3 gap-14">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="dashboard-box p-10 rounded-2xl relative z-20 flex flex-col justify-center items-center border-gray-500">
            <h3 className="text-gray-400">Discovery Score</h3>
            {/* animated counter */}
            <h4 className="text-4xl font-bold text-white my-8">
              <Counter target={482} />
            </h4>
            <p className="text-lg text-gray-400 text-center">
              Measures your activity, curiosity, and exploration across the
              platform
            </p>
          </div>
          <div className="dashboard-box p-10 rounded-2xl relative z-20 flex flex-col justify-center items-center border-gray-500">
            <h3 className="text-gray-400">Creator Score</h3>
            <h4 className="text-4xl font-bold text-white my-8">
              <Counter target={96} />
            </h4>
            <p className="text-lg text-gray-400 text-center">
              Measures your activity, curiosity, and exploration across the
              platform
            </p>
          </div>
        </div>

      
        <div className="dashboard-box p-10 rounded-2xl relative z-20 flex flex-col justify-center items-center">
          <h3 className="text-gray-400">Impact Score</h3>
          <h4 className="text-5xl font-bold text-white my-8">
            <Counter target={900} />
          </h4>
          <p className="text-lg text-gray-400 text-center">Total Points</p>
        </div>

       

        <div className="flex flex-col justify-center items-center gap-10">
          <div className="dashboard-box p-10 rounded-2xl relative z-20 flex flex-col justify-center items-center border-gray-500">
            <h3 className="text-gray-400">Discovery Score</h3>
            <h4 className="text-4xl font-bold text-white my-8">
              <Counter target={668} />
            </h4>
            <p className="text-lg text-gray-400 text-center">
              Measures your activity, curiosity, and exploration across the
              platform
            </p>
          </div>
          <div className="dashboard-box p-10 rounded-2xl relative z-20 flex flex-col justify-center items-center border-gray-500">
            <h3 className="text-gray-400">Creator Score</h3>
            <h4 className="text-4xl font-bold text-white my-8">
              <Counter target={121} />
            </h4>
            <p className="text-lg text-gray-400 text-center">
              Measures your activity, curiosity, and exploration across the
              platform
            </p>
          </div>
        </div>
      </div>

   {/* Legend */}

   <div className=" relative z-20 dashboard-box grid grid-cols-4 rounded-md w-full gap-5 my-10 p-5">

    <div className="flex">
      
    <div className="border border-green-500 h-10 flex items-center justify-center rounded-xl bg-green-900 me-4"><BsStars className="h-6 w-10 text-green-400" /></div>
    <div className=" flex flex-col justify-between w-full items-start gap-3">
        <div className="flex items-start justify-between  w-full text-gray-300"><p>Daily Site Login</p> <span className="text-green-500">+15</span> </div>
        <div className="flex items-start justify-between  w-full text-gray-300"><p>Visit Comaprision Page</p><span className="text-green-500">+15</span> </div>
        <div className="flex items-start justify-between  w-full text-gray-300"><p>Watch Demo Video</p> <span className="text-green-500">+15</span> </div>
        <div className="flex items-start justify-between  w-full text-gray-300"><p>Visit New Product Page</p> <span className="text-green-500">+15</span> </div>
    </div>
    </div>
    
    <div className="flex">
      <div className="border border-green-500 h-10 w-10 flex justify-center items-center rounded-xl bg-green-900  me-4"><CiPen className="h-8 w-10 text-green-400" /></div>
    <div className="flex flex-col justify-between w-full items-start gap-3">
        <div className="flex items-start justify-between  w-full text-gray-300"><p>Daily Site Login</p> <span className="text-green-500">+15</span> </div>
        <div className="flex items-start justify-between  w-full text-gray-300"><p>Visit Comaprision Page</p><span className="text-green-500">+15</span> </div>
        <div className="flex items-start justify-between  w-full text-gray-300"><p>Watch Demo Video</p> <span className="text-green-500">+15</span> </div>
        <div className="flex items-start justify-between  w-full text-gray-300"><p>Visit New Product Page</p> <span className="text-green-500">+15</span> </div>
    </div>
    </div>

    <div className="flex">
      <div className="border border-green-500 h-10 w-10 flex items-center justify-center rounded-xl bg-green-900  me-4"><RiGroupLine className="h-6 w-10 text-green-400" /></div>
    
    <div className="flex flex-col justify-between w-full items-start gap-3">
        <div className="flex items-start justify-between  w-full text-gray-300"><p>Daily Site Login</p> <span className="text-green-500">+15</span> </div>
        <div className="flex items-start justify-between  w-full text-gray-300"><p>Visit Comaprision Page</p><span className="text-green-500">+15</span> </div>
        <div className="flex items-start justify-between  w-full text-gray-300"><p>Watch Demo Video</p> <span className="text-green-500">+15</span> </div>
        <div className="flex items-start justify-between  w-full text-gray-300"><p>Visit New Product Page</p> <span className="text-green-500">+15</span> </div>
    </div>
</div>

<div className="flex">
  <div className="border border-green-500 h-10 w-10 flex items-center justify-center rounded-xl bg-green-900  me-4"><FaRegHeart className="h-6 w-10 text-green-500" /></div>



    <div className="flex flex-col justify-between w-full items-start gap-3">
        <div className="flex items-start justify-between  w-full text-gray-300"><p>Daily Site Login</p> <span className="text-green-500">+15</span> </div>
        <div className="flex items-start justify-between  w-full text-gray-300"><p>Visit Comaprision Page</p><span className="text-green-500">+15</span> </div>
        <div className="flex items-start justify-between  w-full text-gray-300"><p>Watch Demo Video</p> <span className="text-green-500">+15</span> </div>
        <div className="flex items-start justify-between  w-full text-gray-300"><p>Visit New Product Page</p> <span className="text-green-500">+15</span> </div>
    </div>
    </div>

   </div>

    </div>
  );
};

export default ImpactDashboard;
