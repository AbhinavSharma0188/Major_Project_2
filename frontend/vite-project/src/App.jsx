import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import CustomAlert from './component/CustomAlert'
import Shorts from './Pages/Shorts/Shorts'
export const serverUrl="http://localhost:3000";

function App() {
  return (
    <>
    <CustomAlert />
    <Routes>
      <Route path='/' element={<Home/>}>
      <Route path='shorts' element={<Shorts/>}/>
      </Route>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
    </Routes>
    </>
   
  )
}

export default App