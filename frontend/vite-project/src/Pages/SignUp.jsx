import { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import logo from '../../public/logo.png';

function SignUp() {
    const [step,setStep]=useState(2);
    const [userName,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [showPassword,setShowPassword]=useState(false)

  return (
    <div className='flex items-center justify-center min-h-screen bg-[#181818]'>
    <div className='bg-[#202124] rounded-2xl p-10 w-full max-w-md shadow-lg'>
        <div className='flex items-center mb-6'>
            <button className='text-gray-300 mr-3 hover:text-white'>

                <FaArrowLeft size={20}/>

            </button>
            <span className='text-white text-2xl font-medium'>Create Account</span>


        </div>


        {/* step1 */}

        {step==1 && (
            <>
            <h1 className='text-3xl font-normal text-white mb-5 flex items-center gap-2'>

                  <img src={logo} alt="logo" className='w-8 h-8' />
                  Basic Info
            </h1>
            <input type="text" placeholder='Enter Username'  className='w-full bg-transparent border border-gray-500 rounded-md px-3 py-3 text-white focus:outline-none focus:border-orange-500 mb-4 ' onChange={(e)=>setUserName(e.target.value)} value={userName}/>
            <input type="text" placeholder='Enter Email'  className='w-full bg-transparent border border-gray-500 rounded-md px-3 py-3 text-white focus:outline-none focus:border-orange-500 mb-4 ' onChange={(e)=>setEmail(e.target.value)} value={email}/>
          
            <div className='flex justify-end mt-10'>
                <button className='bg-orange-500 text-white px-6 py-2  hover:bg-orange-600 rounded-full'>Next</button>
            </div>
            
            </>



        )}
        {step==2 && (
            <>
            <h1 className='text-3xl font-normal text-white mb-5 flex items-center gap-2'>

                  <img src={logo} alt="logo" className='w-8 h-8' />
                 Security
            </h1>
            <div className='flex items-center bg-[#3c4043] text-white px-3 py-2 rounded-full w-fit mb-6'>


                <FaUserCircle className=" mr-2 " size={20}/>
                {email}

            </div>
            <input type={showPassword? "text":"password"} placeholder='Password'  className='w-full bg-transparent border border-gray-500 rounded-md px-3 py-3 text-white focus:outline-none focus:border-orange-500 mb-4 ' onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <input type={showPassword? "text":"password"} placeholder='Confirm Password'  className='w-full bg-transparent border border-gray-500 rounded-md px-3 py-3 text-white focus:outline-none focus:border-orange-500 mb-4 ' onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
          <div className='flex items-center gap-2 mt-3'>
            <input type="checkbox"  id="showpass" checked={showPassword} onChange={()=>setShowPassword(!showPassword)}/>
            <label htmlFor="showpass" className='text-gray-300 cursor-pointer'>Show Password</label>
            
          </div>
            <div className='flex justify-end mt-10'>
                <button className='bg-orange-500 text-white px-6 py-2  hover:bg-orange-600 rounded-full'>Next</button>
            </div>
            
            </>



        )}

   



    </div>

    
    
    
    
    
    </div>
  )
}

export default SignUp