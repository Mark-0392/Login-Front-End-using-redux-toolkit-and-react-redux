import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { closeNav } from '../../Features/Settings/settingSlice'
import { Navlink_With_Icon } from './Navlinks'
import { useRef } from 'react'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { isNavOpen } = useSelector((state) => state.setting)
  return (
    <>
      <aside
        className={` h-[calc(100%-40px)]  w-[225px]  bg-slate-800 absolute top-[40px] md:top-[44px] flex flex-col transition-all ease-out duration-700 lg:hidden z-50  ${
          isNavOpen ? ' translate-x-0' : '-translate-x-full'
          // isNavOpen ? ' w-[200px]' : 'w-0'
        } `}
      >
        <div>
          {isNavOpen && (
            <div>
              <Navlink_With_Icon />
            </div>
          )}

          <div
            className="w-10 h-12  bg-white border-2 border-l-0 border-indigo-900 border-opacity-30 text-sky-700 absolute top-1/2 left-full rounded-r-md  -translate-x-1 -translate-y-32 flex items-center justify-center "
            onClick={() => dispatch(closeNav())}
          >
            <div
              className={`transition-all delay-300  duration-700 border-2 p-[4px] border-indigo-500 rounded-full animate-pulse   text-black ${
                isNavOpen ? 'rotate-180' : 'rotate-0'
              }`}
              // style={{
              //   transform: isNavOpen ? `rotate(180deg)` : `rotate(0deg)`,
              // }}
            >
              <MdOutlineArrowForwardIos size={15} />
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
export default Sidebar
