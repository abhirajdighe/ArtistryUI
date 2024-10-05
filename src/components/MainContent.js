import React from "react";
import "./Styles/content.css";
import Pimg1 from "../assets/profile1.png";
import Pimg2 from "../assets/profile2.png";
import post1 from "../assets/post1.png";
import post2 from "../assets/post2.png";
import simg1 from "../assets/scroll/img1.png";
import simg2 from "../assets/scroll/img2.png";

const MainContent = () => {
  return (
    <div id="content" className="pt-[3.3px] flex-1 fonts-Gilroy mt-[23px] h-[90vh] w-[60vw] overflow-y-auto p-4">
      {/* Post 1 */}
      <div className="bg-white pt-2 p-6 rounded-lg shadow mb-4">
        <div className="flex items-center mb-4">
          <img src={Pimg1} alt="Avatar" className="w-10 h-10 rounded-lg mr-4" />
          <div>
            <h2 className="text-lg font-medium">Lara Leones</h2>
            <p className="text-sm">@thewallart</p>
          </div>
        </div>
        <p className="mb-4">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.{" "}
          <a href="#" className="text-blue-600">Read More</a>
        </p>
        <div className="relative">
          <img src={post1} alt="Post" className="w-full h-auto rounded-lg mb-4" />
          <i className="ri-heart-line absolute top-2 right-2 text-xl text-white"></i>
        </div>
        <hr className="h-[10px] w-[100%] mt-[33px] mb-[27px]" />
        <div className="flex justify-start text-lg font-medium">
          <span className="mr-[20px]">
            <i className="text-2xl font-semibold ri-heart-line"></i> 9.8k
          </span>
          <span className="mr-[20px]">
            <i className="text-2xl font-semibold ri-chat-3-line"></i> 8.6k
          </span>
          <span className="mr-[20px]">
            <i className="text-2xl font-semibold ri-share-forward-line"></i> 7.2k
          </span>
        </div>
      </div>
      
      {/* Post 2 */}
      <div className="bg-white p-6 rounded-lg shadow mb-4">
        <div className="flex items-center mb-4">
          <img src={Pimg2} alt="Avatar" className="w-10 h-10 rounded-lg mr-4" />
          <div>
            <h2 className="text-lg font-medium">Thomas J.</h2>
            <p className="text-sm">@thecostomcreate</p>
          </div>
        </div>
        <p className="mb-4">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.{" "}
          <a href="#" className="text-blue-600">Read More</a>
        </p>
        <div className="relative text-2xl">
          <img src={post2} alt="Post" className="w-full h-auto rounded-lg mb-4" />
          <i className="ri-heart-line  absolute top-2 right-2 text-xl text-white"></i>
        </div>
        <hr className="h-[10px] w-[100%] mt-[33px] mb-[27px]" />
        <div className="flex justify-start text-lg font-medium">
          <span className="mr-[20px]">
            <i className="text-2xl font-semibold ri-heart-line"></i> 9.8k
          </span>
          <span className="mr-[20px]">
            <i className="text-2xl font-semibold ri-chat-3-line"></i> 8.6k
          </span>
          <span className="mr-[20px]">
            <i className="text-2xl font-semibold ri-share-forward-line"></i> 7.2k
          </span>
        </div>
      </div>
      
      {/* Slider code */}
      <div id="container" className="flex flex-row w-[100%] space-x-4 overflow-x-auto">
        <div className="h-[350px] min-w-[400px] p-4 bg-gray-100 rounded-l">
          <img className="h-[65%] p-auto m-auto mb-0 pb-0 w-[95%] rounded-xl" src={simg1} alt="Slider 1" />
          <div className="pl-4 pr-4 space-y-1">
            <p className="p-0 mt-2">Modern Wall Decore Framed Painting</p>
            <div className="flex justify-between  items-center">
              <p>$ 199.99</p>
              <div className="stars text-yellow-400">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[350px] min-w-[400px] p-4 bg-gray-100 rounded-l">
          <img className="h-[65%] p-auto m-auto mb-0 pb-0 w-[95%] rounded-xl" src={simg2} alt="Slider 2" />
          <div className="pl-4 pr-4 space-y-1">
            <p className="p-0 mt-2">Modern Wall Decore Framed Painting</p>
            <div className="flex justify-between items-center">
              <p>$ 199.99</p>
              <div className="stars text-yellow-400">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[350px] min-w-[400px] p-4 bg-gray-100 rounded-l">
          <img className="h-[65%] p-auto m-auto mb-0 pb-0 w-[95%] rounded-xl" src={simg1} alt="Slider 3" />
          <div className="pl-4 pr-4 space-y-1">
            <p className="p-0 mt-2">Modern Wall Decore Framed Painting</p>
            <div className="flex justify-between items-center">
              <p>$ 199.99</p>
              <div className="stars text-yellow-400">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[350px] min-w-[400px] p-4 bg-gray-100 rounded-l">
          <img className="h-[65%] p-auto m-auto mb-0 pb-0 w-[95%] rounded-xl" src={simg2} alt="Slider 4" />
          <div className="pl-4 pr-4 space-y-1">
            <p className="p-0 mt-2">Modern Wall Decore Framed Painting</p>
            <div className="flex justify-between items-center">
              <p>$ 199.99</p>
              <div className="stars text-yellow-400">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
