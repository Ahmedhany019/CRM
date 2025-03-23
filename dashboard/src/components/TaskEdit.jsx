/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function TaskEdit({setIsEdit,selectedTask,refreshTasks}) {

    const [dueDate,setDueDate] = useState(selectedTask.dueDate)
    const [status,setStatus] = useState(selectedTask.status)
    const [description,setDescription] = useState(selectedTask.description)


    const updateTask = async ()=>{
        try {
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/tasks/update/${selectedTask._id}`,{
                dueDate,
                status,
                description
            })
            refreshTasks()
            setIsEdit(false);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTask = async ()=>{
        const id = selectedTask._id
        try {
            const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/tasks/delete`,{
                data:{id}
            })
            setIsEdit(false)
            refreshTasks()
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        if (selectedTask) {
          setDueDate(selectedTask.dueDate || "");
          setStatus(selectedTask.status || false);
          setDescription(selectedTask.description || "");
        }
      }, [selectedTask]);

  return (
    <>
    <div className='absolute top-0 left-0 right-0 bottom-0 bg-gray-300 w-full h-[100vh] flex justify-center items-center'></div>
      <div className="max-w-[400px] w-full absolute top-1/2 left-1/2 h- -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow m-10">
    <div className="flex items-start justify-between p-5 rounded-t">
        <h3 className="text-xl font-semibold">
            Edit task
        </h3> 
        <button onClick={() => setIsEdit(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </div>

    <div className="p-6 space-y-6">
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <div className='flex flex-col'>
                <div className='flex justify-between items-center w-full'>
                    <label htmlFor="complete" className='font-semibold'>Complete?</label>
                    <input checked={status} onChange={(e)=>setStatus(e.target.checked)} type="checkbox" id="complete" />
                </div>
                <div className='mt-6 flex flex-col gap-3'>
                    <label htmlFor="date" className='font-semibold'>Due Date</label>
                    <input value={dueDate} onChange={(e)=>setDueDate(e.target.value)} type="text" id="date" className='rounded-md mt-4 p-4 bg-[#EAEEF4]' placeholder='1:26 pm 25 Nov 2025'/>
                </div>
                <div className='mt-6 flex flex-col gap-3'>
                    <label htmlFor="date" className='font-semibold'>Description</label>
                    <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text" id="date" className='rounded-md mt-4 p-4 bg-[#EAEEF4]' placeholder='lorem'/>
                </div>
            </div>
        </form>
    </div>

    <div className="flex justify-center gap-10 p-6 border-t border-gray-200 rounded-b">
        <button onClick={deleteTask} className="text-red-500 cursor-pointer focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Delete</button>
        <button onClick={updateTask} className="text-white cursor-pointer bg-[#514EF3] hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Done</button>
    </div>

</div>
</>
  )
}

export default TaskEdit