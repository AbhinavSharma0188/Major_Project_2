import { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import logo from '../../public/logo.png';

function SignUp() {
    const [step,setStep]=useState(1);
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
            <h1 className='text-3xl font-normal text-white mb-2 flex items-center gap-2'>

                  <img src={logo} alt="logo" className='w-8 h-8' />
                  Basic Info
            </h1>
            <input type="text" placeholder='Enter Username'  className='w-full bg-transparent border border-gray-500 rounded-md px-3 py-3 text-white focus:outline-none focus:border-orange-500 mb-4 '/>
          
            
            
            </>



        )}

   



    </div>
    
    
    
    
    
    </div>
  )
}

export default SignUp