import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { Navlinks } from '../Components/Navlinks'
import { Navlink_With_Icon } from '../Components/Navlinks'
import DropDownSetting from '../Components/DropDownSetting'
import { useDispatch, useSelector } from 'react-redux'
import { closeNav } from '../../Features/Settings/settingSlice'
import Sidebar from '../Components/Sidebar'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <>
      <div className="h-screen bg-slate-50 max-w-6xl mx-auto relative">
        {isPageLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {' '}
            <Navbar /> <Sidebar /> <Outlet />
          </>
        )}
      </div>
    </>
  )
}
export default HomeLayout
