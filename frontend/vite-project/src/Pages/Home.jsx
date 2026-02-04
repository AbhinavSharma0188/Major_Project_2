import { FaBars, FaMicrophone, FaSearch, FaUserCircle } from "react-icons/fa";
import logo from '../../public/logo.png';
function Home() {
  return (
    <div className='bg-[#0f0f0f] text-white min-h-screen relative'>
      {/* {navbar} */}

      <header className='bg-[#0f0f0f] h-15 p-3 border-b border-gray-800 fixed top-0 left-0 right-0 z-50' >


        <div className='flex items-center justify-between'>
          {/* {left} */}
          <div className='flex items-center gap-4'>
            <button className='text-xl bg-[#272727] p-2 rounded-full md:inline hidden'><FaBars /></button>
            <div className='flex items-center gap-[5px]'>
              <img src={logo} alt="" className='w-[30px]' />
              <span className='text-white font-bold text-xl tracking-tight font-roboto'>Flow-Forge</span>



            </div>

          </div>
          {/* {search} */}
          <div className='hidden md:flex items-center gap-2 flex-1 max-w-xl'>

            <div className='flex flex-1'>
              <input type="" className='flex-1 bg-[#121212] px-4 py-2 rounded-l-full outline-none border border-gray-700' placeholder='Search' />
              <button className='bg-[#272727] px-4  rounded-r-full  border border-gray-700'><FaSearch /></button>
            </div>
            <button className='bg-[#272727] rounded-full p-3'><FaMicrophone /></button>
          </div>
          {/* {right} */}


          <div className='flex items-center gap-3'>
            <button className='hidden md:flex items-center gap-1 bg-[#272727] px-3 py-1 rounded-full cursor-pointer'>
              <span className='text-lg'>+</span>
              <span>Create</span>
            </button>
            <FaUserCircle className='text-3xl hidden md:flex text-gray-400 cursor-pointer' />
            <FaSearch className='text-lg md:hidden flex cursor-pointer' />


          </div>
        </div>
      </header>




    </div>
  )
}
function sidebarItem({ icon, text, open, selected, onClick }) {
  return (
    <button></button>

  )
}

export default Home