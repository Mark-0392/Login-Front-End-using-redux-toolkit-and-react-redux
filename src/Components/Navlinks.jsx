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

export const Navlinks = () => {
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

export const Navlink_With_Icon = () => {
  const { isSelectedText } = useSelector((state) => state.setting)
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
                dispatch(closeNav())
              }}
            >
              <NavLink
                to={url}
                className={`flex gap-x-2 w-10/12 items-center text-sm text-white font-semibold px-2 capitalize h-12 rounded-r-full  transition-all ease-in-out duration-500 ${
                  isSelectedText === text
                    ? 'bg-red-500 text-white ml-2'
                    : 'text-white'
                }`}
              >
                <span className={`text-white pl-1 `}>{icon}</span>
                {text}
              </NavLink>
            </li>
          )
        })}
        <button
          type="button"
          className="inline-flex gap-2 items-center px-[10px] py-2 hover:bg-red-500 hover:text-white hover:rounded-sm transition-all duration-700 text-sm"
        >
          <PiSignOutBold size={22} />
          Sign Out
        </button>
      </ul>
    </div>
  )
}
