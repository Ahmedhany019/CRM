/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Filter from "../components/Filter";
import { useNavigate } from "react-router";
;import { RiEditLine } from "react-icons/ri";
import userAvatar from "../assets/Avatar.png"
import axios from "axios";
function DealsPage({setPageName}) {
  const [deals, setDeals] = useState([]);
  const tableHeaders = ["name", "are", "appointment", "price","status","Edit"];
  

  const getDeals = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/deals");
      setDeals(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDeals()
  },[])
  const navigate = useNavigate();

useEffect(()=>{
  setPageName("Deals");
},[])
  return (
    <div className='overflow-auto'>
      <Filter title={"Deals"} count={deals.length}/>
      <table className="w-full table-auto divide-y divide-gray-200">
              <thead className="bg-gray-50">
              <tr>
                {tableHeaders.map((header, i) => (
                  <th key={i} className="sm:px-2 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">{header}</th>
                ))}
              </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {deals.map((deal, i) => (
                  <tr key={i} className="hover:bg-gray-100 transition-all duration-300">
                    <td onClick={() => navigate(`/deals/${deal._id}`)} className="cursor-pointer sm:px-2 md:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-8 w-8 rounded-full" src={userAvatar} alt="avatar" />
                        </div>
                        <div className="ml-4">
                          <div className="text-xs md:text-sm font-medium text-gray-900">
                            {deal.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="sm:px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm font-medium">
                      {deal.address}
                    </td>
                    <td className="sm:px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">{deal.appointmentDate}</td>
                    <td className="sm:px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">{deal.price}</td>
                    <td className="sm:px-2 md:px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs md:text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {deal.progress}
                      </span>
                    </td>
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

export default DealsPage