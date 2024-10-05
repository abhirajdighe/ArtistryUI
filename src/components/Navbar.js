import React from "react";
import "./Styles/navbar.css";

const Navbar = () => {
  return (
    <div className=" w-[97%] bg-gray-100 pt-4 h-[90px] mb-[10px] flex justify-between items-center ">
      <div className="ml-[10px] text-4xl logo w-[17%] h-[80%] text-black font-serif bg-white rounded-lg flex justify-center items-center">
        LOGO
      </div>
      <div className="w-[58vw] h-[80%]  bg-white rounded-lg flex justify-between p-4 items-center">
        <div className="flex space-x-1 text-gray-400 items-center">
          <i class="ri-search-line"></i>
          <p className="text-sm">Search here...</p>
        </div >
        <div className="flex space-x-1 text-gray-800 items-center">
          <i class="ri-equalizer-line"></i>
          <p>Filter</p>
        </div>
      </div>
      <div className="btn h-[80%] mr-[10px] w-[17%] ">
        <button
          id="seller"
          className="w-full mr-[10px]  bg-green-500 text-white py-2 rounded h-[100%] mb-4"
        >
          Become a Seller
        </button>
      </div>
    </div>
  );
};

export default Navbar;
