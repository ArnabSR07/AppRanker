import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { SiTicktick } from "react-icons/si";
import { RiGalleryLine } from "react-icons/ri";
import { GrApps } from "react-icons/gr";
import { MdFindInPage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { GrGroup } from "react-icons/gr";
import { GiTrophyCup } from "react-icons/gi";
import { FaSackDollar } from "react-icons/fa6";
import { RiCoupon3Fill } from "react-icons/ri";
import { FaCodeCompare } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { TbMathMaxMin } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { RiAdminLine } from "react-icons/ri";

import Dashboard from "../components/Dashboard";
import AppsPending from "../components/AppsPending";
import CompareApps from "../components/CompareApps";
import ImpactDashboard from "./ImpactDashboard";

const Admin = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const renderActiveSection = () => {
    switch (activeSection) {
      case "Dashboard":
        return <Dashboard />;
      case "AppsPending":
        return <AppsPending />;
      case "CompareApps":
        return <CompareApps />;
      case "Gamification":
        return <ImpactDashboard />;
      default:
        return <></>;
    }
  };

  const isActiveLink = (section) =>
    activeSection === section
      ? "bg-cyan-700 text-white font-semibold"
      : "text-gray-400 hover:text-white hover:bg-cyan-700";

  // Sidebar links (to avoid repetition)
  const SideBarLinks = () => (
    <div className="flex flex-col gap-5">
      {/* MAIN */}
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-400">MAIN</h3>
        <p
          className={`flex items-center gap-3 pe-5 ps-2 text-sm py-2 rounded-xl cursor-pointer transition ${isActiveLink(
            "Dashboard"
          )}`}
          onClick={() => {
            setActiveSection("Dashboard");
            setMenuOpen(false);
          }}
        >
          <RxDashboard />
          Dashboard
        </p>
        <p
          className={`flex items-center gap-3 pe-5 ps-2 text-sm py-2 rounded-xl cursor-pointer transition ${isActiveLink(
            "AppsPending"
          )}`}
          onClick={() => {
            setActiveSection("AppsPending");
            setMenuOpen(false);
          }}
        >
          <SiTicktick />
          Apps Pending
        </p>
        <p className="text-gray-400 flex items-center gap-3 pe-3 ps-2 text-sm hover:text-white rounded-xl hover:bg-cyan-700 py-2 cursor-pointer">
          <RiGalleryLine />
          Media Library Pro
        </p>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-400">CONTENT</h3>
        <p className="text-gray-400 flex items-center gap-3 pe-5 ps-2 text-sm hover:text-white rounded-xl hover:bg-cyan-700 py-2 cursor-pointer">
          <GrApps />
          Apps
        </p>
        <p className="text-gray-400 flex items-center gap-3 pe-5 ps-2 text-sm hover:text-white rounded-xl hover:bg-cyan-700 py-2 cursor-pointer">
          <MdFindInPage />
          Pages
        </p>
        <p className="text-gray-400 flex items-center gap-3 pe-3 ps-2 text-sm hover:text-white rounded-xl hover:bg-cyan-700 py-2 cursor-pointer">
          <IoIosNotifications />
          Notifications
        </p>
      </div>

      {/* COMMUNITY */}
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-400">COMMUNITY</h3>
        <p className="text-gray-400 flex items-center gap-3 pe-5 ps-2 text-sm hover:text-white rounded-xl hover:bg-cyan-700 py-2 cursor-pointer">
          <GrGroup />
          Users
        </p>
        <p
          className={`flex items-center gap-3 pe-5 ps-2 text-sm py-2 rounded-xl cursor-pointer transition ${isActiveLink(
            "Gamification"
          )}`}
          onClick={() => {
            setActiveSection("Gamification");
            setMenuOpen(false);
          }}
        >
          <GiTrophyCup />
          Gamification
        </p>
      </div>

      {/* BUSINESS */}
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-400">BUSINESS</h3>
        <p className="text-gray-400 flex items-center gap-3 pe-5 ps-2 text-sm hover:text-white rounded-xl hover:bg-cyan-700 py-2 cursor-pointer">
          <FaSackDollar />
          Financials
        </p>
        <p className="text-gray-400 flex items-center gap-3 pe-5 ps-2 text-sm hover:text-white rounded-xl hover:bg-cyan-700 py-2 cursor-pointer">
          <RiCoupon3Fill />
          Coupons
        </p>
      </div>

      {/* TOOLS */}
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-400">TOOLS</h3>
        <p
          className={`flex items-center gap-3 pe-5 ps-2 text-sm py-2 rounded-xl cursor-pointer transition ${isActiveLink(
            "CompareApps"
          )}`}
          onClick={() => {
            setActiveSection("CompareApps");
            setMenuOpen(false);
          }}
        >
          <FaCodeCompare />
          Compare Apps
        </p>
      </div>

      {/* SYSTEM */}
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-400">SYSTEM</h3>
        <p className="text-gray-400 flex items-center gap-3 pe-5 ps-2 text-sm hover:text-white rounded-xl hover:bg-cyan-700 py-2 cursor-pointer">
          <IoSearch />
          SEO Tools
        </p>
        <p className="text-gray-400 flex items-center gap-3 pe-5 ps-2 text-sm hover:text-white rounded-xl hover:bg-cyan-700 py-2 cursor-pointer">
          <TbMathMaxMin />
          System Health
        </p>
        <p className="text-gray-400 flex items-center gap-3 pe-5 ps-2 text-sm hover:text-white rounded-xl hover:bg-cyan-700 py-2 cursor-pointer">
          <GiHamburgerMenu />
          Menu Settings
        </p>
        <p className="text-gray-400 flex items-center gap-3 pe-5 ps-2 text-sm hover:text-white rounded-xl hover:bg-cyan-700 py-2 cursor-pointer">
          <IoSettingsOutline />
          General Settings
        </p>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Mobile header */}
      <div className="lg:hidden ms-6 h-10 w-10 text-center flex items-center rounded-full bg-cyan-900 px-2">
        <button onClick={() => setMenuOpen(true)}>
          <RiAdminLine  className="text-white h-5 w-5" />
        </button>
      </div>

      {/* Main layout for desktop */}
      <div className="hidden lg:grid grid-cols-[250px_1fr] gap-2 h-[calc(100vh-8rem)]">
        <div
          className="relative z-20 bg-cyan-950 py-10 px-5 overflow-y-auto 
          scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-transparent"
        >
          <SideBarLinks />
        </div>
        <div
          className="relative z-20 px-5 overflow-y-auto 
          scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-transparent"
        >
          {renderActiveSection()}
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-cyan-950 z-40 p-5 overflow-y-auto transform transition-transform duration-300 ease-in-out lg:hidden
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-6 text-white">
          <h2 className="text-lg font-semibold">Admin Panel</h2>
          <button onClick={() => setMenuOpen(false)}>
            <IoMdClose size={22} />
          </button>
        </div>
        <SideBarLinks />
      </div>

      {/* Mobile content section */}
      <div className="lg:hidden p-5">{renderActiveSection()}</div>
    </div>
  );
};

export default Admin;
