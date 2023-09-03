import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';

interface NavbarPorps {
  name: string,
  needHamBurger : boolean,
  opneSideBar : ()=> void,

}


function Navbar({opneSideBar,needHamBurger,name}: NavbarPorps) {
  return (
    <nav className=" bg-blue-500 static py-4">
    <div className='flex mx-5'>
      {
        (needHamBurger)?  
        <button className='text-3xl text-white hover:text-black' onClick={opneSideBar}><GiHamburgerMenu/></button>
      :""
      }
    <div className="container mx-auto flex justify-center items-center ">
    <div className="text-white text-2xl font-bold">{name}</div>
    </div>
    </div>
    </nav>

  )
}

export default Navbar