/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaTasks } from 'react-icons/fa';
import { FaBagShopping, FaUserGroup } from "react-icons/fa6";
import AddCustomer from './AddCustomer';

function AddItem({setAddNew}) {

    const [isCustomer, setIsCustomer] = useState(false);

  return isCustomer ? <AddCustomer /> : (
<>
    <div className='absolute top-0 left-0 right-0 bottom-0 bg-gray-300 w-full h-[100vh] flex justify-center items-center'></div>
      <div className="max-w-[400px] w-full absolute top-1/2 left-1/2 h- -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow m-10">
    <div className="flex items-start justify-between p-5 rounded-t">
        <h3 className="text-xl font-semibold">
            Add New
        </h3> 
        <button onClick={()=>setAddNew(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </div>

    <div className="p-6 space-y-6">
            <div className='flex flex-col gap-10'>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-4 items-center'>
                        <FaBagShopping className='text-gray-400 text-xl'/>
                        <p className='font-semibold text-xl'>Deal</p>
                    </div>
                    <FaArrowAltCircleRight className='cursor-pointer text-xl'/>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-4 items-center'>
                        <FaUserGroup className='text-gray-400 text-xl'/>
                        <p className='font-semibold text-xl'>Customer</p>
                    </div>
                    <FaArrowAltCircleRight onClick={()=>setIsCustomer(true)} className='cursor-pointer text-xl'/>
                </div>
            </div>
        </div>
</div>
</>
  )
}

export default AddItem