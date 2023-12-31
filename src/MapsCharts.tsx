import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';
import CreateContact from './components/CreateContact';
import EditContact from './components/EditContact';
import LineGraph from './components/LineGraphAll';
import CountryMap from './components/CounrtyMap';





function MapCharts() {
  const [open , setOpen] = useState<boolean>(false)
  const [onEdit , setEdit] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div >
      {open?
      <CreateContact onclose={()=>{setOpen(false)}}/>
      :""}
        {/* <SideDrawer /> */}

      <Navbar name={"Charts and Maps"} needHamBurger={!isOpen} opneSideBar={()=>setIsOpen(true)} /> 
      <div className="flex-1 flex">
        <SideDrawer toggleDrawer={toggleDrawer} isOpen={isOpen}/>
        <div className="flex bg-slate-100 flex-col w-full h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-2 gap-4">
          <LineGraph/>
          <CountryMap/>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default MapCharts;
