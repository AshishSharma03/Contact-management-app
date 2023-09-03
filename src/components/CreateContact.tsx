import React, { useState ,ChangeEvent} from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addContact, editContact, removeContact } from '../store/ContactSlice';
import nextId from "react-id-generator";

interface CreateContactProps {
    onclose: () => void;
  }

function CreateContact({ onclose }: CreateContactProps) {
    const [FirstName,setFirstName] = useState("")
    const [LastName,setLastName] = useState("")
    const [Active,setActive] = useState(true)
    const dispatch = useDispatch()
    
    const onHandleSubmmit = ()=>{
        const ID = nextId();
        console.log(ID)
            if(FirstName.length >= 2 && LastName.length >= 2){
                    const newContact =
                       {
                        id : ID,
                        firstName :FirstName,
                        lastName :LastName,
                        status : Active
                    }
                
                    dispatch(addContact(newContact))
                    onclose()
            }else{
                console.log("fill is needed")
            }

    
        }

        const handleRadioCharge = (event :ChangeEvent<HTMLInputElement>) =>{ 
            setActive(event.target.value === "active")
           
        }



  return (
    <div className="flex fixed z-10 min-h-[100vh] w-[100%] items-center justify-center bg-black bg-opacity-25">
      <div className="flex w-[300px] flex-col gap-3 rounded bg-white px-6 py-2 text-gray-700 relative">
        <button className='absolute right-0 mx-5 text-red-500  rounded-xl ' onClick={onclose} >x</button>
        <h1 className="py-3 text-center font-bold">Create Contact</h1>
        <div className="flex flex-col gap-1">
          <label className="text-xs">First Name</label>
          <input className="rounded-md border-2 p-2" onChange={(e)=>{setFirstName(e.target.value)}} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs">Last Name</label>
          <input className="rounded-md border-2 p-2"  onChange={(e)=>{setLastName(e.target.value)}}  />
        </div>
            <div className="flex flex-col gap-2">
            <label className="text-xs">Status</label>
            <label className="inline-flex gap-2 items-center text-xs">
                <input type="radio" name="status" className="form-radio"  checked={!Active} value="inactive" onChange={handleRadioCharge} /> Inactive
            </label>
            <label className="inline-flex gap-2 items-center text-xs">
                <input type="radio" name="status" className="form-radio" checked={Active} value="active" onChange={handleRadioCharge}   /> Active
            </label>
            </div>
          <div className="text-center p-2">
            <button onClick={onHandleSubmmit} className="bg-blue-500 p-1 rounded-sm w-fit text-sm px-4 font-semibold text-white">Save Contact</button>
          </div>
      </div>
    </div>
  );
}

export default CreateContact;