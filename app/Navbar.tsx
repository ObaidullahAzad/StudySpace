import React from "react";
import { HiMiniHome } from "react-icons/hi2";
import { MdOutlineDateRange } from "react-icons/md";
import { RiBookShelfFill } from "react-icons/ri";
import { GrAppsRounded } from "react-icons/gr";
const Navbar = () => {
  return (
    <div className="bg-orange-100 p-5 w-[100px] justify-between items-center flex flex-col h-screen m-5 rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <img className="rounded-2xl scale-80" src="/logo.jpg" alt="logo" />
      <div className="text-4xl text-center space-y-4">
        <div className="bg-white p-2 rounded-full hover:bg-slate-500 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
          <HiMiniHome />
        </div>
        <div className="bg-white p-2 rounded-full hover:bg-slate-500 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
          <MdOutlineDateRange />
        </div>
        <div className="bg-white p-2 rounded-full hover:bg-slate-500 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
          <RiBookShelfFill />
        </div>
        <div className="bg-white p-2 rounded-full hover:bg-slate-500 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
          <GrAppsRounded />
        </div>
      </div>
      <div>
        <img
          className="rounded-full "
          src="https://i.pinimg.com/736x/64/7c/72/647c72ed0fdc430bdab18e7932881cab.jpg"
        />
      </div>
    </div>
  );
};

export default Navbar;
