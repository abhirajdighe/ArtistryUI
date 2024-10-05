import React from 'react';
import "./Styles/rightsidebar.css"
import pimg1 from "../assets/rightImages/pimg1.png"
import pimg2 from "../assets/rightImages/pimg2.png"
import pimg3 from "../assets/rightImages/pimg3.png"
import pimg4 from "../assets/rightImages/pimg4.png"

const RightSidebar = () => {
  return (
    <div className='w-[310px] h-[80%] mt-6 mr-4 bg-gray-100 pl-4'>
      <div className="flex space-x-6 mb-4">
        <h2 className="text-lg font-medium border-b-2 border-black">Artists</h2>
        <h2 className="text-lg font-medium text-gray-500">Photographers</h2>
      </div>
      <div className="overflow-y-auto overflow-hidden h-[80%] custom-scrollbar">
        <div className="space-y-4">

          <div id='rinfo1' className="flex items-center h-[150px] pt-[27%] p-4 mr-2 bg-cover bg-center rounded-xl">
            <img src={pimg1} alt="Artist" className="w-12 h-12 rounded-xl mr-4"/>
            <div>
              <h3 className="text-lg text-white font-medium">Thomas Edward</h3>
              <p className="text-sm text-white">@thewildwithyou</p>
            </div>
          </div>

          <div id='rinfo2' className="flex items-center h-[150px] pt-[27%] p-4 mr-2 bg-cover bg-center rounded-xl">
            <img src={pimg2} alt="Artist" className="w-12 h-12 rounded-xl mr-4"/>
            <div>
              <h3 className="text-lg text-white font-medium">Chris Doe</h3>
              <p className="text-sm text-white">@thewildwithyou</p>
            </div>
          </div>

          <div id='rinfo3' className="flex items-center h-[150px] pt-[27%] p-4 mr-2 bg-cover bg-center rounded-xl">
            <img src={pimg3} alt="Artist" className="w-12 h-12 rounded-xl mr-4"/>
            <div>
              <h3 className="text-lg text-white font-medium">Emilie Jones</h3>
              <p className="text-sm text-white">@thewildwithyou</p>
            </div>
          </div>

          <div id='rinfo4' className="flex items-center h-[150px] pt-[27%] p-4 mr-2 bg-cover bg-center rounded-xl">
            <img src={pimg4} alt="Artist" className="w-12 h-12 rounded-xl mr-4"/>
            <div>
              <h3 className="text-lg text-white font-medium">Jessica Williams</h3>
              <p className="text-sm text-white">@thewildwithyou</p>
            </div>
          </div>

          <div id='rinfo5' className="flex items-center h-[150px]  pt-[27%] p-4 mr-2 bg-cover bg-center rounded-xl">
            <img src={pimg2} alt="Artist" className="w-12 h-12 rounded-xl mr-4"/>
            
            <div>
              <h3 className="text-lg text-white font-medium">Thomas Edward</h3>
              <p className="text-sm text-white">@thewildwithyou</p>
            </div>
          </div>

        </div>
      </div>
      <div className="mt-6 flex justify-center space-x-4 text-sm font-light text-black">
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Cookie Notice</a>
      </div>
    </div>
  );
};

export default RightSidebar;
