import React from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbMathMaxMin } from "react-icons/tb";
import { SlRocket } from "react-icons/sl";
import GrowthChart from "./GrowthChart";
import { RiAccountPinCircleLine } from "react-icons/ri";
import Bargraph from "./Bargraph";
import CustomPieChart from "./PieChart";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";

const Dashboard = () => {
  return (
    <div>
      <div className="relative z-20 flex flex-col gap-5 mb-5">
        {/* Date Section */}
        <div className="bg-cyan-900 flex justify-start items-center gap-4 px-3 py-2 rounded-xl">
          <MdOutlineCalendarMonth className="text-cyan-500" />{" "}
          <div className="text-lg font-bold text-white">Date Range: </div>{" "}
          <div className="rounded-lg text-gray-400 bg-cyan-950 px-3 py-2">
            7 Days
          </div>
          <div className="rounded-lg text-gray-400 bg-cyan-950 px-3 py-2">
            30 Days
          </div>
          <div className="rounded-lg text-gray-400 bg-cyan-950 px-3 py-2">
            3 Months
          </div>
          <div className="rounded-lg text-gray-400 bg-cyan-950 px-3 py-2">
            6 Months
          </div>
          <div className="rounded-lg text-gray-400 bg-cyan-950 px-3 py-2">
            1 Year
          </div>
          <div className="flex justify-between gap-5 items-center bg-cyan-950 px-3 py-2 rounded-lg">
            <span className="text-gray-400">
              04<span>/</span>22<span>/</span>2025
            </span>
            <MdOutlineCalendarMonth className="text-black" />
          </div>
          <div className="text-white">to</div>
          <div className="flex justify-between gap-5 items-center bg-cyan-950 px-3 py-2 rounded-lg">
            <span className="text-gray-400">
              10<span>/</span>22<span>/</span>2025
            </span>
            <MdOutlineCalendarMonth className="text-black" />
          </div>
        </div>

        {/* Revenue Section */}

        <div className="flex justify-center items-center gap-6">
          <div className="rounded-lg p-3 bg-green-900 w-full">
            <div className="flex justify-between items-center">
              <p className="text-gray-400">Total Revenue</p>
              <BiDollar className="text-green-500 h-6 w-10" />
            </div>
            <div className="text-3xl font-bold text-white">$32</div>
          </div>
          <div className="rounded-lg p-3 bg-blue-900 w-full">
            <div className="flex justify-between items-center">
              <p className="text-gray-400">Vendor Conversion Rate</p>
              <BsGraphUpArrow className="text-blue-600 h-6 w-10" />
            </div>
            <div className="text-3xl font-bold text-white">66.7%</div>
          </div>
          <div className="rounded-lg p-3 bg-purple-900 w-full">
            <div className="flex justify-between items-center">
              <p className="text-gray-400">GMV</p>
              <TbMathMaxMin className="text-purple-600 h-6 w-10" />
            </div>
            <div className="text-3xl font-bold text-white">$320</div>
          </div>
          <div className="rounded-lg p-3 bg-amber-950 w-full">
            <div className="flex justify-between items-center">
              <p className="text-gray-400">ARR</p>
              <SlRocket className="text-amber-600 h-6 w-10" />
            </div>
            <div className="text-3xl font-bold text-white">$239.76</div>
          </div>
        </div>

        {/* Graph Section */}

        <div className="p-3 rounded-xl border border-cyan-700 bg-cyan-950">
          <h3 className="text-lg font-bold text-white">Revenue Trend</h3>
          <GrowthChart />
        </div>

        {/* Analytics */}

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-cyan-900 rounded-lg w-full p-3 border border-cyan-500 h-80">
            <div className="flex justify-between items-center ">
              <p className="text-cyan-400">New Users</p>
              <RiAccountPinCircleLine className="h-6 w-10 text-cyan-400" />
            </div>
            <div className="text-3xl font-bold text-white">347</div>
            <Bargraph />
          </div>
          <div className="bg-[#5413bd] rounded-lg w-full p-3 border border-purple-500 h-80">
            <div className="flex justify-between items-center">
              <p className="text-purple-400">App Submissions</p>
              <IoDocumentTextOutline className="h-6 w-10 text-purple-400" />
            </div>
            <div className="text-3xl font-bold text-white">1047</div>

            <CustomPieChart />
          </div>

          <div className="bg-yellow-900 rounded-lg w-full p-3 border border-yellow-500 h-80">
            <div className="flex justify-between items-center">
              <p className="text-yellow-400">Pending Approvals</p>
              <IoIosTimer className="h-6 w-10 text-yellow-400" />
            </div>
            <div className="text-3xl font-bold text-white">5</div>
            <div className="p-4 flex-col items-center justify-center overflow-y-auto max-h-60 scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-transparent">
              <div className="w-full rounded-lg flex justify-between items-center bg-yellow-600 mb-2 p-2">
                <div>
                  <p className="text-white font-bold">ShopConnect Pro</p>
                  <p className="text-gray-500">2 hours ago</p>
                </div>
                <div className="px-3 py-2 bg-red-900 text-red-500 rounded-md">
                  Review
                </div>
              </div>
              <div className="w-full rounded-lg flex justify-between items-center bg-yellow-600 mb-2 p-2">
                <div>
                  <p className="text-white font-bold">ShopConnect Pro</p>
                  <p className="text-gray-500">2 hours ago</p>
                </div>
                <div className="px-3 py-2 bg-red-900 text-red-500 rounded-md">
                  Review
                </div>
              </div>
              <div className="w-full rounded-lg flex justify-between items-center bg-yellow-600 mb-2 p-2">
                <div>
                  <p className="text-white font-bold">ShopConnect Pro</p>
                  <p className="text-gray-500">2 hours ago</p>
                </div>
                <div className="px-3 py-2 bg-red-900 text-red-500 rounded-md">
                  Review
                </div>
              </div>
              <div className="w-full rounded-lg flex justify-between items-center bg-yellow-600 mb-2 p-2">
                <div>
                  <p className="text-white font-bold">ShopConnect Pro</p>
                  <p className="text-gray-500">2 hours ago</p>
                </div>
                <div className="px-3 py-2 bg-red-900 text-red-500 rounded-md">
                  Review
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
