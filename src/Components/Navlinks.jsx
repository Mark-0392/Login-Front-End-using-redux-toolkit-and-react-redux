import { NavLink } from 'react-router-dom'
import { FaHome, FaEnvelopeOpenText, FaUserEdit } from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'
import { PiSignOutBold, PiPasswordBold } from 'react-icons/pi'
import { BsInfoCircleFill } from 'react-icons/bs'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectText,
  closeNav,
  closeSetting,
} from '../../Features/Settings/settingSlice'
const navlinks = [
  {
    id: 1,
    url: '/dashboard',
    text: 'Home',
  },
  {
    id: 2,
    url: 'about',
    text: 'About',
  },
  {
    id: 3,
    url: 'newsLetter',
    text: 'News Letter',
  },
]

const links_With_Icon = [
  {
    id: 1,
    url: '/dashboard',
    text: 'Home',
    icon: <FaHome size={20} />,
  },
  {
    id: 2,
    url: 'about',
    text: 'About',
    icon: <BsInfoCircleFill size={20} />,
  },
  {
    id: 3,
    url: 'newsLetter',
    text: 'News Letter',
    icon: <FaEnvelopeOpenText size={19} />,
  },
  {
    id: 4,
    url: '/updateUserDetails',
    text: 'Edit/update Your Details',
    icon: <FaUserEdit size={20} />,
  },
  {
    id: 5,
    url: '/updateUserPassword',
    text: 'Edit/update Your Password',
    icon: <PiPasswordBold size={20} />,
  },
]

const Navlinks = () => {
  return (
    <>
      {navlinks.map((link) => {
        const { id, url, text } = link
        return (
          <li key={id} className="text-sm lg:font-semibold lg:text-lg">
            <NavLink to={url}>{text}</NavLink>
          </li>
        )
      })}
    </>
  )
}
export default Navlinks

export const Navlink_With_Icon = () => {
  const { isSelectedText, isOpen } = useSelector((state) => state.setting)
  const dispatch = useDispatch()
  return (
    <div>
      <ul className=" flex flex-col gap-y-4 py-4 text-white ">
        {links_With_Icon.map((link) => {
          const { id, url, text, icon } = link
          return (
            <li
              key={id}
              onClick={() => {
                dispatch(selectText(text))
              }}
            >
              <NavLink
                to={url}
                className={`flex gap-x-4 w-36 items-center text-sm text-white font-semibold px-2 capitalize h-12  rounded-l-md rounded-r-full  ${
                  isSelectedText === text
                    ? 'bg-red-500 text-white ml-4 transition-all  duration-500'
                    : 'text-white'
                }`}
              >
                <span className="text-white">{icon}</span>
                {text}
              </NavLink>
            </li>
          )
        })}
        <button
          type="button"
          className="inline-flex gap-2 items-center px-[10px] py-2 hover:bg-red-500 hover:text-white hover:rounded-sm duration-500 text-sm"
        >
          <PiSignOutBold size={22} />
          Sign Out
        </button>
      </ul>
    </div>
  )
}
