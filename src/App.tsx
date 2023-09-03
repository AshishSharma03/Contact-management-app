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





function App() {
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
      <Navbar  name={"Contact"} needHamBurger={!isOpen} opneSideBar={()=>setIsOpen(true)} /> 
      <div className="flex-1 flex">
        <SideDrawer toggleDrawer={toggleDrawer} isOpen={isOpen}/>
        <div className="flex bg-slate-100 flex-col w-full h-screen">
        <div className="h-[20vh]  p-4 flex justify-center items-center">
          <button className="py-2 p-5 bg-white flex items-center gap-2 rounded-sm font-semibold hover:text-white hover:bg-blue-500 hover:shadow-xl" 
          onClick={()=>{setOpen(true)}} >
            <p>Create contact</p>
            <p><AiOutlineUserAdd/></p>
            </button>
        </div>
          { (contacts.length === 0 )?<div className="h-[100vh]  flex  flex-col justify-start items-center py-10">
           <MessageBox/>
          </div>
          :
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 xl:grid-cols-4 gap-4">
             {contacts.map((a,i)=>{
               return(<ContactBox key={i} onDelete={()=>{handleDelete(a.id)}} onEdit={()=>{ OnhandleEdit(a.id, a.firstName ,a.lastName, a.status) }} firstName={a.firstName} lastName={a.lastName} status={a.status} id={a.id} />)
              })}
          
          </div>
          }

          <div>
          </div>
      </div>

      
      </div>
    </div>
  );
}

export default App;
