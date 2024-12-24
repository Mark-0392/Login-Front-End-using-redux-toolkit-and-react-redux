import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <>
      <div className="h-screen bg-slate-50 max-w-6xl mx-auto">
        <Navbar />
      </div>
    </>
  )
}
export default HomeLayout
