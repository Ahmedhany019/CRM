/* eslint-disable no-unused-vars */
import avatar from "../assets/Avatar.png";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
function Navbar({pageName}) {

  const isDashboard = pageName === 'Dashboard'? '':pageName;
  
  return (
    <div className='h-[90px] border-b border-[#EAEEF4]'>
        <div className='flex h-full justify-between items-center'>
          <div className= "w-[90px] h-full border-r border-[#EAEEF4] flex justify-center items-center">
            <img src={logo} alt="" className=''/>
          </div>
            <h1 className='flex-1 flex items-center ml-4 text-[24px] font-bold'>{pageName}</h1>
            <div className='flex items-center gap-4 mr-4'>
                <div className='flex items-center bg-[#514EF3] text-white py-2 px-4 rounded-full'>
                  <button className='text-sm sm:text-xl cursor-pointer flex gap-2'>Add New {isDashboard}
                    <span>+</span>
                  </button>
                </div>
                <FaSearch className='cursor-pointer p-1 text-2xl md:text-4xl bg-white rounded-full'/>
                <img src={avatar} alt="avatar" className='rounded-full w-10'/>
            </div>
        </div>
        
    </div>
  );
}
export default Navbar;