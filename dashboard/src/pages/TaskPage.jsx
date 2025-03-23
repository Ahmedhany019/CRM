/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Filter from '../components/Filter';
import axios from 'axios';
import { RiEditLine } from "react-icons/ri";
import TaskEdit from '../components/TaskEdit';
function TaskPage({setPageName}) {
  const tableHeaders = ["Due Date","Task","Edit"]
  const [selectedTask,setSelectedTask] = useState("")
  const [tasks, setTasks] = useState([]);
  const [isEdit,setIsEdit] = useState(false)
  const getTasks = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/tasks");
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    setPageName("Task"); 
  }, []);
  return (
    <div>
      <Filter title={"Tasks"} count={tasks.length}/>
      <table className="w-full table-auto divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        {tableHeaders.map((header, i) => (
                          <th key={i} className="sm:px-2 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {tasks.map((task, i) => (
                        <tr key={i} className="hover:bg-gray-100 transition-all duration-300">
                          <td className="flex gap-2 cursor-pointer sm:px-2 md:px-6 py-4 whitespace-nowrap">
                            <input onChange={()=>{}} className='cursor-pointer' checked={task.status} type="checkbox" />
                            <p>{task.dueDate}</p>
                          </td>
                          <td className="sm:px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm font-medium">
                            {task.description}
                          </td>
                          <td className="sm:px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm font-medium">
                            <RiEditLine className='cursor-pointer text-xl ' onClick={() => {setIsEdit(true); setSelectedTask(task)}} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
      </table>
      {isEdit ?<TaskEdit setIsEdit={setIsEdit} selectedTask={selectedTask} refreshTasks={getTasks} /> :null}
    </div>
  )
}

export default TaskPage