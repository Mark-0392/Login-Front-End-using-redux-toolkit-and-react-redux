import { Link } from 'react-router-dom'
import { PiSignOutBold, PiPasswordBold } from 'react-icons/pi'
import { FaUserEdit } from 'react-icons/fa'

const dropDownLinks = [
  {
    id: 1,
    url: '/updateUserDetails',
    text: 'Edit/update Your Details',
    icon: <FaUserEdit size={20} />,
  },
  {
    id: 2,
    url: '/updateUserPassword',
    text: 'Edit/update Your Password',
    icon: <PiPasswordBold size={20} />,
  },
]

const DropDownSetting = () => {
  return (
    <>
      <div className="border flex flex-col rounded-s-md absolute top-16 md:right-4  ">
        {dropDownLinks.map((link) => {
          const { id, url, text, icon } = link
          return (
            <Link
              key={id}
              to={url}
              className="flex gap-2 items-center  px-[10px] py-2 hover:bg-slate-500 hover:text-white border-l-8 border-indigo-500 "
            >
              {icon} {text}
            </Link>
          )
        })}

        <button
          type="button"
          className="inline-flex gap-2 items-center px-[10px] py-2 hover:bg-red-500 hover:text-white hover:rounded-sm duration-500"
        >
          <PiSignOutBold size={20} />
          Sign Out
        </button>
      </div>
    </>
  )
}
export default DropDownSetting
