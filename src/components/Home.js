import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='bg-gray-100'>
    <Navbar/>
    <div className="flex h-screen space-x-4 ">
        
      <Sidebar />
      <div className="flex flex-col flex-1">
        <div className="flex flex-1 overflow-hidden">
          <MainContent />
          <RightSidebar />
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Home;
