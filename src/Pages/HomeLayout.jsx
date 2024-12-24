import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import Navlinks from '../Components/Navlinks'
import { Navlink_With_Icon } from '../Components/Navlinks'
import DropDownSetting from '../Components/DropDownSetting'
import { useDispatch, useSelector } from 'react-redux'
import { closeNav } from '../../Features/Settings/settingSlice'

const HomeLayout = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { isNavOpen } = useSelector((state) => state.setting)
  const isPageLoading = navigation.state === 'loading'
  return (
    <>
      <div className="h-screen bg-slate-50 max-w-6xl mx-auto relative">
        <Navbar />
        <aside>
          <div
            className={` h-[calc(100%-42px)] bg-slate-800 absolute top-[42px] flex flex-col transition-all duration-700 ${
              isNavOpen ? 'w-[200px]' : 'w-0'
            } `}
          >
            {isNavOpen && (
              <div>
                <Navlink_With_Icon />
              </div>
            )}

            <div
              className="w-10 h-12  bg-white border-2 border-l-0 border-indigo-900 border-opacity-30 text-sky-700 absolute top-1/2 left-full rounded-r-md  -translate-x-1 -translate-y-1/2 flex items-center justify-center"
              onClick={() => dispatch(closeNav())}
            >
              <div
                className={`transition-all delay-300 duration-700 border-2 p-[4px] border-indigo-500 rounded-full animate-pulse text-black ${
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
      </div>
    </>
  )
}
export default HomeLayout
