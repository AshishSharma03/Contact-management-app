import React, { useState ,ChangeEvent, useEffect} from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { editContact  } from '../store/ContactSlice';


interface CreateContactProps {
    id :  String,
    firstName : String,
    lastName : String,
    status : boolean,
    onclose: () => void;
  }

function EditContact({ id,firstName,lastName,status,onclose }: CreateContactProps) {
    const [FirstName,setFirstName] = useState<String | any >(firstName || " ")
    const [LastName,setLastName] = useState<String | any  >(lastName || " ")
    const [Active,setActive] = useState<boolean| any >(status || true)
    const [Id,setID] = useState<String | any>(id || "")
    const dispatch = useDispatch()

  useEffect(()=>{
    setActive(status)

  },[])
    
    const onHandleSubmmit = ()=>{
     
            if(FirstName.length >= 2 && LastName.length >= 2){

                    const EditedContact = {
                      id: Id,
                      firstName: FirstName,
                      lastName: LastName,
                      status: Active,
                    }
                    dispatch(editContact(EditedContact))
                 
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
        <h1 className="pt-4 text-center font-bold">Edit Contact</h1>
        <p className=" text-center text-blue-400 font-semibold">#{id}</p>
        <div className="flex flex-col gap-1">
          <label className="text-xs">First Name</label>
          <input className="rounded-md border-2 p-2" value={FirstName}  placeholder='First Name' onChange={(e :React.ChangeEvent<HTMLInputElement>)=>{setFirstName(e.target.value)}} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs">Last Name</label>
          <input className="rounded-md border-2 p-2" value={LastName} placeholder='Second Name'  onChange={(e : React.ChangeEvent<HTMLInputElement>)=>{setLastName(e.target.value)}}  />
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

export default EditContact;