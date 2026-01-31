import React from 'react'
import { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from "react-spinners";


import axios from 'axios';
import { serverUrl } from '../App';
import { showCustomAlert } from '../component/CustomAlert';


function SignIn() {
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword,setShowPassword]=useState(false);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const handleNext=()=>{
        if(step==1){
            if(!email){
                showCustomAlert("Fill all the fields")
                return;
            }

        }
        if(step==2){
            if(!password){
                showCustomAlert("Fill all the fields")
                return;
            }
            

        }
        setStep(step+1);
    }
    const handleSignIn=async()=>{
      setLoading(true);
      try {
        const result= await axios.post(serverUrl+"/api/auth/signin",{email,password},{withCredentials:true});
        console.log(result.data);
        navigate("/");
        setLoading(false);
        showCustomAlert("Sign In successful")
        
      } catch (error) {
        setLoading(false);
        console.log(error);

        showCustomAlert("Sign In failed")
        
      }
    }

  return (
    <div className='flex items-center justify-center min-h-screen bg-[#181818]'>
      <div className='bg-[#202124] rounded-2xl p-10 w-full max-w-md shadow-lg'>
        <div className='flex items-center mb-6'>
          <button className='text-gray-300 mr-3 hover:text-white' onClick={() => { if (step > 1) { setStep(step - 1) } else { navigate("/") } }}>

            <FaArrowLeft size={20} />

          </button>
          <span className='text-white text-2xl font-medium'>Flow-Forge</span>


        </div>


        {/* step1 */}

        {step == 1 && (
          <>
            <h1 className='text-3xl font-normal text-white mb-5 flex items-center gap-2'>

              <img src="/logo.png" alt="/logo.png" className='w-8 h-8' />
              Sign In
            </h1>
            <p className='text-gray-400 text-sm mb-6'>with your account to continue to Flow-Forge.</p>
           
            <input type="text" placeholder='Enter Email' className='w-full bg-transparent border border-gray-500 rounded-md px-3 py-3 text-white focus:outline-none focus:border-orange-500 mb-4 ' onChange={(e) => setEmail(e.target.value)} value={email} />

            <div className='flex justify-between items-center mt-10'>
              <button className='text-orange-500 text-sm hover:underline cursor-pointer' onClick={()=>navigate("/signup")}>Create Account</button>
              <button className='bg-orange-500 text-white px-6 py-2  hover:bg-orange-600 rounded-full' onClick={handleNext} >Next</button>
            </div>

          </>



        )}
        {step == 2 && (
          <>
            <h1 className='text-3xl font-normal text-white mb-5 flex items-center gap-2'>

              <img src="/logo.png" alt="/logo.png" className='w-8 h-8' />
            Welcome back
            </h1>
            <div className='flex items-center bg-[#3c4043] text-white px-3 py-2 rounded-full w-fit mb-6'>


              <FaUserCircle className=" mr-2 " size={20} />
              {email}

            </div>
            <input type={showPassword ? "text" : "password"} placeholder='Password' className='w-full bg-transparent border border-gray-500 rounded-md px-3 py-3 text-white focus:outline-none focus:border-orange-500 mb-4 ' onChange={(e) => setPassword(e.target.value)} value={password} />
           
            <div className='flex items-center gap-2 mt-3'>
              <input type="checkbox" id="showpass" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
              <label htmlFor="showpass" className='text-gray-300 cursor-pointer'>Show Password</label>

            </div>
            <div className='flex justify-between items-center mt-10'>
              <button className='text-orange-500 text-sm hover:underline cursor-pointer'>Forgot Password?</button>
              <button className='bg-orange-500 text-white px-6 py-2  hover:bg-orange-600 rounded-full'  onClick={handleSignIn}>Sign In</button>
            </div>

          </>



        )}



      </div>






    </div>
  )
}

export default SignIn