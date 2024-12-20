import Logo from '../assets/Landing Page Logo/noysi.svg'
import Navlinks from './Navlinks'
import { CgMenuGridO } from 'react-icons/cg'
import { CgMenuGridR } from 'react-icons/cg'
import { LuMenuSquare } from 'react-icons/lu'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import { logoutUser } from '../../Features/Users/userSlice'

const Navbar = () => {
  const topLeft = () => {
    toast.success('Hey 👋! You are logged out', {
      position: 'top-left',
    })
  }

  const user = useSelector((state) => state.userState.user)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleClick = () => {
    navigate('/')
    dispatch(logoutUser())
  }

  return (
    <nav className="flex justify-between items-center px-2 ">
      <div className="flex gap-2 ">
        {/* menu button */}
        <button type="button" className="lg:hidden">
          <LuMenuSquare size={22} />
        </button>
        {/* Logo and the Name of the Company */}
        <div className="flex gap-2 items-center ">
          <div>
            <img src={Logo} alt="logo" className="w-4 h-4 lg:w-8 lg:h-8 " />
          </div>
          <h1 className="font-medium text-sm lg:text-xl">Task List</h1>
        </div>
      </div>

      {/* Navlinks */}
      <div className="hidden lg:flex">
        <ul className="flex gap-6 items-center">
          <Navlinks />
        </ul>
      </div>
      {/* UserName and logout button */}
      <div className="flex items-center gap-2">
        <p className="text-sm lg:text-lg">Hey,{user.userName}</p>
        {/* <button type="button" className="">
          <CgMenuGridR size={30} />
        </button> */}
        <button type="button" onClick={handleClick}>
          Logout
        </button>
      </div>
    </nav>
  )
}
export default Navbar
