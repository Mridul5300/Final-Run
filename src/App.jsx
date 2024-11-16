import { Outlet } from 'react-router-dom'
import './App.css'
import Fotter from './Component/Fotter/Fotter'
import Navbar from './Component/Navbar/Navbar'

function App() {

  return (
    <div>
    <div>
    <Navbar></Navbar>
    </div>
    <div className='min-h-screen'>
      <Outlet></Outlet>
    </div>
      <div>
      <Fotter></Fotter>
      </div>
    </div>
  )
}

export default App
