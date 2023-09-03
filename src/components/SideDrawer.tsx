import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";

interface SideDrawerProps {
  isOpen : boolean,
  toggleDrawer :  ()=> void,
}

function SideDrawer({toggleDrawer,isOpen} : SideDrawerProps) {
 

  const drawerStyles = {
    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
    display: isOpen ? 'block' : 'none',
    transition: `transform 0.5s ease-in-out ${isOpen ? '0s' : '1s'}`,

  };

  return (
    <div
      style={drawerStyles}
      className={`min-h-[100vh] xs:absolute bg-white  min-w-200 inset-y-0 left-0 w-64 shadow-xl  text-white transform transition-transform ease-in-out`}
    >
      {/* Navigation Links */}
      <ul>
        <li onClick={toggleDrawer} className="flex p-10 hover:text-blue-500  text-2xl justify-center text-black"><FaArrowLeft/></li>
        <hr className="border-t border-gray-200 text-black" />
        <li><a href="/" className="block p-5 hover:bg-blue-500 text-black font-semibold">Contact</a></li>
        <hr className="border-t border-gray-200  text-black" />
        <li><a href="/" className="block p-5 hover:bg-blue-500 text-black font-semibold">Charts and Maps</a></li>
            
      </ul>
        
    </div>
  );
}

export default SideDrawer;
