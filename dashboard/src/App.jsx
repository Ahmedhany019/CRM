/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import DashboardPage from './pages/DashboardPage'
import DealsPage from './pages/DealsPage'
import TaskPage from './pages/TaskPage'
import CustomerPage from './pages/CustomerPage'
import { Route, Routes } from 'react-router'
import ErrorPage from './pages/ErrorPage'
import DealSinglePage from './pages/singlePage/DealSinglePage'
import CustomerDetail from './pages/singlePage/CustomerDetail'
import RegisterPage from './pages/RegisterPage'

function App() {
  const [pageName, setPageName] = useState('Dashboard')
  const [token,setToken] = useState(localStorage.getItem("token")? localStorage.getItem("token"):"")
  
  useEffect(()=>{
    localStorage.setItem("token",token)
  },[token])

  return token ==="" ? <RegisterPage setToken={setToken}/>:(
    <div className='bg-[#F6FAFDE5]'>
      <Navbar pageName={pageName}/>
      <div className='flex'>
      <Sidebar />
      <div className='w-[calc(100%-90px)] md:p-8 p-4'>
      <Routes >
        <Route path='/' element={<DashboardPage pageName={pageName} setPageName={setPageName}/>} />
        <Route path='/deals' element={<DealsPage setPageName={setPageName}/>} />
        <Route path='/customer' element={<CustomerPage setPageName={setPageName}/>} />
        <Route path='/tasks' element={<TaskPage setPageName={setPageName}/>} />
        <Route path='/deals/:id' element={<DealSinglePage setPageName={setPageName}/>} />
        <Route path='/customer/:id' element={<CustomerDetail setPageName={setPageName}/>} />
        <Route path='*' element={<ErrorPage setPageName={setPageName}/>} />
      </Routes>
      </div>
      </div>
      
    </div>
  )
}

export default App