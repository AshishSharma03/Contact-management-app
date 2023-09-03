import React from 'react';

interface ContactBoxProps {
    firstName: string;
    lastName: string;
    status: boolean;
    id: string;
    onDelete : ()=>void,
    onEdit : ()=> void ,
  }

const ContactBox : React.FC<ContactBoxProps> =({firstName,lastName,status,id,onDelete,onEdit}) => {

    
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
  
      <div className="flex text-white p-4  items-center " >
        <div>
        <h2 className="text-2xl text-blue-500 font-semibold">{`${firstName} ${lastName}`}</h2>
        <p className="text-gray-400 font-semibold">Id- <span className='text-blue-500'>#{id}</span></p>
        </div>
        <span className='flex-1' />
        <span className={`h-2 w-2 ${(status)?"bg-green-500":"bg-gray-400"} rounded`} />
        
      </div>

      <hr className="border-t border-gray-200  text-black" />
      <div className="p-4">
        <p className="text-gray-500 font-bold">First Name : <span className='text-gray-800'>{firstName}</span></p>
        <p className="text-gray-500 font-bold">Last Name : <span className='text-gray-800'>{lastName}</span></p>
        <p className="text-gray-500 font-bold">Status : <span className='text-gray-800'>{status? "Active" : "Inactive"}</span></p>
      </div>

      <div className="flex justify-end p-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-2 rounded" onClick={onEdit}>Edit</button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded"onClick={onDelete} >Delete</button>
      </div>
    </div>
  );
}

export default ContactBox;
