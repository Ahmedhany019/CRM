/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
function LoginPage({setIsLogin,setToken}) {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')



    const submitHandler =async (e)=>{
        try {
            e.preventDefault()
            const response = await axios.post("http://localhost:5000/api/users/login",{
                email,
                password,
            })
            if(response.data.success){
                setToken(response.data.token)
                localStorage.setItem("token",response.data.token)
                toast.success("Login Successfully")
            }else{
                toast.error(response.data.message)
                console.log(response.data.message)
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    }


  return (
    <div className="flex justify-center items-center h-[100vh]">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full animate-fade-in">
        <h2 className="text-2xl font-bold text-center text-indigo-800 mb-8">Create an Account</h2>
        <form onSubmit={submitHandler} className="space-y-6">
            <div>
                <label htmlFor="email" className="block text-indigo-900 font-semibold mb-2">Email</label>
                <input 
                onChange={(e)=>setEmail(e.target.value)}
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800 transition-all duration-300" 
                    placeholder="Enter your email" 
                    required
                />
                <p className="text-red-500 text-sm mt-2 hidden" id="emailError">Please enter a valid email.</p>
            </div>

            <div>
                <label htmlFor="password" className="block text-indigo-900 font-semibold mb-2">Password</label>
                <input 
                onChange={(e)=>setPassword(e.target.value)}
                    type="password" 
                    id="password" 
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800 transition-all duration-300" 
                    placeholder="Enter your password" 
                    required
                />
                <p className="text-red-500 text-sm mt-2 hidden" id="passwordError">Password is required.</p>
            </div>

            <button 
                type="submit" 
                className="cursor-pointer w-full bg-indigo-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02]"
            >
                Register
            </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
            Already have an account? 
            <button onClick={()=>setIsLogin(false)} className="text-indigo-800 hover:underline cursor-pointer">Register</button>
        </p>
    </div>
        </div>
  )
}

export default LoginPage