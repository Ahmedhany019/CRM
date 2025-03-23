/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Filter from '../components/Filter';
import axios from 'axios';
import {useNavigate} from "react-router"
import { RiEditLine } from "react-icons/ri";
import userAvatar from "../assets/Avatar.png"

function CustomerPage({setPageName}) {

  const navigate = useNavigate()

  const tableHeaders = ["name", "Email", "Phone", "Address","Edit"];
  const [customers, setCustomers] = useState([]);
  const getCustomers = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/customers");
      setCustomers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);

  useEffect(() => {
    setPageName("Customers"); 
  }, []);

  
  
  return (
    <div className='overflow-auto'>
      <Filter title={"Customers"} count={customers.length}/>
      <table className="w-full table-auto divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
              {tableHeaders.map((header, i) => (
                <th key={i} className="sm:px-2 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">{header}</th>
              ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {customers.map((customer, i) => (
            <tr key={i} className="hover:bg-gray-100 transition-all duration-300">
              <td onClick={() => navigate(`/customer/${customer._id}`)} className="cursor-pointer sm:px-2 md:px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-8 w-8 rounded-full" src={userAvatar} alt="avatar" />
                  </div>
                  <div className="ml-4">
                    <div className="text-xs md:text-sm font-medium text-gray-900">
                      {customer.firstName} {customer.lastName}
                    </div>
                  </div>
                </div>
              </td>
              <td className="sm:px-2 md:px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs md:text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {customer.email}
                </span>
              </td>
              <td className="sm:px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">{customer.phone}</td>
              <td className="sm:px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">{customer.address}</td>
              <td className="sm:px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm font-medium">
                <RiEditLine />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerPage