import Logo from '../assets/Landing Page Logo/noysi.svg'
import Navlinks from './Navlinks'

import { LuMenuSquare } from 'react-icons/lu'
import { IoSettingsOutline } from 'react-icons/io5'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { logoutUser } from '../../Features/Users/userSlice'
import DropDownSetting from './DropDownSetting'

import { closeSetting } from '../../Features/Settings/settingSlice'

const Navbar = () => {
  const topLeft = () => {
    toast.success('Hey 👋! You are logged out', {
      position: 'top-left',
    })
  }

  const user = useSelector((state) => state.userState.user)
  const { isOpen } = useSelector((state) => state.setting)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  return (
    <>
      <nav className="flex justify-between items-center px-2 h-full ">
        <div className="flex gap-2 ">
          {/* menu button */}
          {/* <button type="button" className="lg:hidden">
          <LuMenuSquare size={22} />
          </button> */}
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
          <ul className="flex gap-12  items-center">
            <Navlinks />
          </ul>
        </div>
        {/* UserName and logout button */}
        <div className="flex items-center gap-3">
          <p className="text-sm  lg:text-base">
            Hi!
            <span className="font-bold lg:text-lg text-red-400">
              {' '}
              {user.userName}
            </span>
          </p>

          <button
            type="button"
            className="relative"
            onClick={() => dispatch(closeSetting())}
          >
            <IoSettingsOutline size={25} />
          </button>
          {isOpen && <DropDownSetting />}

          {/* <button type="button" onClick={handleClick}>
          Logout
          </button> */}
        </div>
      </nav>
    </>
  )
}
export default Navbar
