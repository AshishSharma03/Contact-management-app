import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';
import MessageBox from './components/MessageBox';
import CreateContact from './components/CreateContact';
import EditContact from './components/EditContact';
import ContactBox from './components/ContectBox';
import { useDispatch,useSelector } from 'react-redux/es/exports';
import { RootState } from './store/store';
import {  removeContact } from './store/ContactSlice';
import { AiOutlineUserAdd } from 'react-icons/ai';





function MapCharts() {
  const [open , setOpen] = useState<boolean>(false)
  const [onEdit , setEdit] = useState<boolean>(false)
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [EditId , setEditID ] = useState<String>("")
  const [EditFirstNAme , setEditFirstNAme ] = useState<String>("")
  const [EditLastNAme , setEditLastNAme ] = useState<String>("")
  const [status , setstatus ] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

   console.log(contacts)

  const handleDelete = (id : string)=>{
    if(id){
      dispatch(removeContact(id))
    }

  } 

  

    const OnhandleEdit = (id : String, FirstName : String, LastName:String,Status:boolean )=>{
              setEdit(true)
              setEditID(id)
              setEditFirstNAme(FirstName)
              setEditLastNAme(LastName)
              setstatus(status)

    } 

  return (
    <div >
      {open?
      <CreateContact onclose={()=>{setOpen(false)}}/>
      :""}
        {/* <SideDrawer /> */}
        {onEdit?
      <EditContact  id={EditId} firstName={EditFirstNAme} lastName={EditLastNAme} status={status} onclose={()=>{setEdit(false)}}/> 
      :""}
        {/* <SideDrawer /> */}
      <Navbar name={"Charts and Maps"} needHamBurger={!isOpen} opneSideBar={()=>setIsOpen(true)} /> 
      <div className="flex-1 flex">
        <SideDrawer toggleDrawer={toggleDrawer} isOpen={isOpen}/>
        <div className="flex bg-slate-100 flex-col w-full h-screen">
        
          </div>
      

      
      </div>
    </div>
  );
}

export default MapCharts;
