import { useState } from "react";
import { FaBars, FaHistory, FaHome, FaList, FaMicrophone, FaSearch, FaThumbsUp, FaUser, FaUserCircle } from "react-icons/fa";
import { MdOutlineSubscriptions, MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import logo from '../../public/logo.png';
import { IoIosAddCircle } from "react-icons/io";
import { Outlet, useNavigate } from "react-router-dom";
function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedItem, setSelectedItem] = useState("Home")
  const [active,setActive]=useState("Home")
  const categories = [
    "Music", "Gaming", "Movies", "TV Shows", "News",
    "Trending", "Entertainment", "Education", "Science & Tech",
    "Travel", "Fashion", "Cooking", "Sports", "Pets",
    "Art", "Comedy", "Vlogs"
  ];
  const navigate=useNavigate();

  return (
    <div className='bg-[#0f0f0f] text-white min-h-screen relative'>
      {/* {navbar} */}

      <header className='bg-[#0f0f0f] h-15 p-3 border-b border-gray-800 fixed top-0 left-0 right-0 z-50' >


        <div className='flex items-center justify-between'>
          {/* {left} */}
          <div className='flex items-center gap-4'>
            <button className='text-xl bg-[#272727] p-2 rounded-full md:inline hidden' onClick={() => setSidebarOpen(!sidebarOpen)
            }><FaBars /></button>
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

      {/* sidebar */}
      <aside className={`bg-[#0f0f0f] border-r border-gray-800 transition-all duration-300 fixed top-[60px] bottom-0 z-40
          ${sidebarOpen ? "w-60" : "w-20"} hidden md:flex flex-col overflow-y-auto`}
      >
        <nav className="space-y-1 mt-3">

          <SidebarItem icon={<FaHome />} text="Home" open={sidebarOpen} selected={selectedItem === "Home"} onClick={() => {setSelectedItem("Home");navigate('/')}} />

          <SidebarItem icon={<SiYoutubeshorts />} text="Shorts" open={sidebarOpen} selected={selectedItem === "Shorts"} onClick={() => {setSelectedItem("Shorts");navigate('/shorts')}} />

          <SidebarItem icon={<MdOutlineSubscriptions />} text="Subscriptions" open={sidebarOpen} selected={selectedItem === "Subscriptions"} onClick={() => setSelectedItem("Subscriptions")} />
        </nav>
        <hr className="border-gray-800 my-3" />
        {sidebarOpen && <p className="text-sm text-gray-400 px-2">You</p>}
        <div >

          <nav className="space-y-1">
            <SidebarItem icon={<FaHistory />} text="History" open={sidebarOpen} selected={selectedItem === "History"} onClick={() => setSelectedItem("History")} />
            <SidebarItem icon={<FaList />} text="Playlist" open={sidebarOpen} selected={selectedItem === "Playlists"} onClick={() => setSelectedItem("Playlist")} />
            <SidebarItem icon={<MdOutlineWatchLater />} text="Saved videos" open={sidebarOpen} selected={selectedItem === "Saved videos"} onClick={() => setSelectedItem("Saved videos")} />
            <SidebarItem icon={<FaThumbsUp />} text="Liked Videos" open={sidebarOpen} selected={selectedItem === "Liked Videos"} onClick={() => setSelectedItem("Liked Videos")} />
          </nav>
          <hr className="border-gray-800 my-3" />
          {sidebarOpen && <p className="text-sm text-gray-400 px-2">Subscriptions</p>}
        </div>

      </aside>
      {/* Main area */}
      <main className={`overflow-y-auto p-4 flex flex-col pb-16 transition-all duration-300 ${sidebarOpen ? "md:ml-60" : "md:ml-20"}`}>
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pt-2 mt-[60px]">
           {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className="whitespace-nowrap bg-[#272727] px-4 py-1 rounded-lg text-sm hover:bg-gray-700" 
                  
                >
                  {cat}

                </button>

              ))}

        </div>
        <div className="mt-2">
          <Outlet/>
        </div>

      </main>


{/* bottom Nav */}
<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0f0f0f] border-t border-gray-800 flex justify-around py-2 z-10">
  <MobileSizeNav icon={<FaHome />} text="Home" active={active === "Home"} onClick={() => setActive("Home")}/>
  <MobileSizeNav icon={<SiYoutubeshorts />} text="Shorts" active={active === "Shorts"} onClick={() => setActive("Shorts")}/>
  <MobileSizeNav icon={<IoIosAddCircle size={40} />}  active={active === "+"} onClick={() => setActive("+")}/>
   <MobileSizeNav onClick={() => setActive("Subscriptions")} active={active === "Subscriptions"} icon={<MdOutlineSubscriptions />} text="Subscriptions" />
        <MobileSizeNav
          active={active === "You"}
          icon={<FaUserCircle/> }
          text="You"
          onClick={()=>setActive("You")}
        />

</nav>





    </div>
  )
}
function SidebarItem({ icon, text, open, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-4 p-2 rounded w-full transition-colors ${open ? "justify-start" : "justify-center"} ${selected ? "bg-[#272727]" : "hover:bg-[#272727]"}`}
    >
      <span className="text-lg">{icon}</span>
      {open && <span className="text-sm">{text}</span>}
    </button>

  )
}
function MobileSizeNav({ icon, text, onClick,active }){
  return(
    <button  onClick={onClick} className={`flex flex-col items-center justify-center gap-1  px-3 py-2 rounded-lg transition-all duration-300 ${active ? "text-white" : "text-gray-400"} hover:scale-105`}>


      <span className="text-2xl">{icon}</span>
      {text && <span className="text-xs">{text}</span>}
    </button>
  )
}

export default Home