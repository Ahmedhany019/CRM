import React, { useEffect } from 'react'
import { FaUserGroup } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import avatar from "../assets/Avatar.png"

function DashboardPage({setPageName}) {
  useEffect(() => {
      setPageName("Dashboard"); 
    }, []);

    const deals = [
      {
        id: 1,
        name: "John Doe",
        are: "Glenrock, New York",
        appointment: "2023-08-15",
        price: "$500",
      },
      {
        id: 2,
        name: "John Doe",
        are: "Glenrock, New York",
        appointment: "2023-08-15",
        price: "$500",
      },
      {
        id: 3,
        name: "John Doe",
        are: "Glenrock, New York",
        appointment: "2023-08-15",
        price: "$500",
      },
      {
        id: 4,
        name: "John Doe",
        are: "Glenrock, New York",
        appointment: "2023-08-15",
        price: "$500",
      },
  ]

  return (
    <div className='flex flex-col gap-4 w-full h-full'>
      
      <div className='flex gap-10 items-center w-[70%] h-[50%] text-white'>

        <div className='p-4 w-full h-full flex flex-col rounded-xl bg-blue-700 justify-around'>
          <div className='flex justify-between items-center'>
              <h1 className='text-3xl font-bold'>Appointment</h1>
              <span className=' rounded-full w-2 h-2 bg-white'></span>
          </div>
          <div className='flex items-center gap-3'>
            <img src={avatar} alt="avatar" className='w-10 h-10 rounded-full' />
            <div>
              <h2 className='text-lg font-semibold'>John Doe</h2>
              <p className='text-sm text-[#D6E1E6]'>Glenrock, New York</p>
            </div>
          </div>
          <div>
              <h2 className='text-md text-[#D6E1E6] font-semibold'>Appointment Date</h2>
              <p className='text-sm text-white'>Admin</p>
            </div>
          <div className='flex items-center gap-3'>
            <div>
              <h2 className='text-lg text-[#D6E1E6] font-semibold'>Room Area</h2>
              <p className='text-sm'>100 m</p>
            </div>
            <div>
              <h2 className='text-lg text-[#D6E1E6] font-semibold'>People</h2>
              <p className='text-sm'>10</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-3'>
            <div>
              <h2 className='text-lg text-[#D6E1E6] font-semibold'>Price</h2>
              <p className='text-sm'>$3500</p>
            </div>
            <button className='px-4 py-2 bg-white rounded-full text-blue-500'>See Details</button>
          </div>
        </div>

        <div className='overflow-auto flex w-full h-full flex-col items-center p-4 shadow-2xl rounded-xl bg-white'>
        <div className='w-full flex justify-between items-center'>
                <h1 className='text-3xl font-bold text-black'>RecentDeals</h1>
                <span className='text-blue-600 text-md'>View All</span>
        </div>
        {deals.map((deal) => (
          <div key={deal.id} className='w-full mt-6 flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <img src={avatar} alt="avatar" className='w-10 h-10 rounded-full' />
            <div>
              <h2 className='text-lg font-semibold text-black'>{deal.name}</h2>
              <p className='text-sm text-[#D6E1E6]'>{deal.are}</p>
            </div>
          </div>
          <div>
              <h2 className='text-md text-end text-black font-semibold'>{deal.price}</h2>
              <p className='text-sm text-[#D6E1E6]'>{deal.appointment}</p>
          </div>
        </div>
        ))}
        
        </div>
      </div>

        <div className='flex w-[70%] gap-10'>

        <div className='w-full h-[100%] flex flex-col gap-6'>
          <div className='h-[50%] flex justify-between items-center p-4 shadow-2xl rounded-xl bg-white'>
            <div className=''>
              <h2 className='text-lg text-[#7E92A2] font-semibold'>Customers</h2>
              <p className=' mt-2 text-5xl font-semibold text-black'>100</p>
            </div>
            <div className='p-4 text-4xl rounded-full mr-4 bg-gradient-to-b from-[#2DC8A880] to-[#FFF]'>
              <FaUserGroup className='text-[#2DC8A8]'/>
            </div>
          </div>
          <div className='h-[50%] flex justify-between items-center p-4 shadow-2xl rounded-xl bg-white'>
            <div className=''>
              <h2 className='text-lg text-[#7E92A2] font-semibold'>Deals</h2>
              <p className=' mt-2 text-5xl font-semibold text-black'>99</p>
            </div>
            <div className='p-4 text-4xl rounded-full mr-4 bg-gradient-to-b from-[#FE808480] to-[#FFF]'>
              <FaBagShopping className='text-[#FE8084]'/>
            </div>
          </div>
        </div>

        <div className='overflow-auto flex w-full h-full flex-col items-center p-4 shadow-2xl rounded-xl bg-white'>
        <div className='w-full flex justify-between items-center'>
                <h1 className='text-3xl font-bold text-black'>RecentDeals</h1>
                <span className='text-blue-600 text-md'>View All</span>
        </div>
        <div className='w-full mt-6 flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <img src={avatar} alt="avatar" className='w-10 h-10 rounded-full' />
            <div>
              <h2 className='text-lg font-semibold'>John Doe</h2>
              <p className='text-sm text-[#D6E1E6]'>Glenrock, New York</p>
            </div>
          </div>
          <div>
              <h2 className='text-md text-end text-black font-semibold'>$3500</h2>
              <p className='text-sm text-[#D6E1E6]'>Nov 14, 2022</p>
          </div>
        </div>
        <div className='w-full mt-6 flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <img src={avatar} alt="avatar" className='w-10 h-10 rounded-full' />
            <div>
              <h2 className='text-lg font-semibold'>John Doe</h2>
              <p className='text-sm text-[#D6E1E6]'>Glenrock, New York</p>
            </div>
          </div>
          <div>
              <h2 className='text-md text-end text-black font-semibold'>$3500</h2>
              <p className='text-sm text-[#D6E1E6]'>Nov 14, 2022</p>
          </div>
        </div>
        <div className='w-full mt-6 flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <img src={avatar} alt="avatar" className='w-10 h-10 rounded-full' />
            <div>
              <h2 className='text-lg font-semibold'>John Doe</h2>
              <p className='text-sm text-[#D6E1E6]'>Glenrock, New York</p>
            </div>
          </div>
          <div>
              <h2 className='text-md text-end text-black font-semibold'>$3500</h2>
              <p className='text-sm text-[#D6E1E6]'>Nov 14, 2022</p>
          </div>
        </div>
        <div className='w-full mt-6 flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <img src={avatar} alt="avatar" className='w-10 h-10 rounded-full' />
            <div>
              <h2 className='text-lg font-semibold'>John Doe</h2>
              <p className='text-sm text-[#D6E1E6]'>Glenrock, New York</p>
            </div>
          </div>
          <div>
              <h2 className='text-md text-end text-black font-semibold'>$3500</h2>
              <p className='text-sm text-[#D6E1E6]'>Nov 14, 2022</p>
          </div>
        </div>
        </div>

        </div>
      
    </div>
  )
}

export default DashboardPage