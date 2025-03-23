/* eslint-disable no-unused-vars */
import filterAdd from "../assets/filter-add.svg";



function Filter({count,title}) {

    
  return (
    <div className=' '>
        <div className='flex-wrap flex justify-between items-center'>
        <h3 className='text-xl font-semibold'>Total: {count} {title}</h3>
        <div className='flex flex-wrap gap-4'>
        <select className='border p-2 rounded-full border-gray-300 outline-none'>
          <option value="dateCreated">Sort by: Date Created</option>
          <option value="newCreated">Sort by: New Created</option>
          <option value="lastCreated">Sort by: last Created</option>
        </select>
        <button className='px-4 py-2 bg-white rounded-full flex items-center gap-2'>Filter <img src={filterAdd} alt="filter"/></button>
        </div>
      </div>
    </div>
  )
}

export default Filter