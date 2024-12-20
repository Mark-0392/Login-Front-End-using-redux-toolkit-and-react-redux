import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <>
      <div className="max-w-6xl mx-auto border border-red-300 mt-4">
        <Navbar />
      </div>
      {isPageLoading ? (
        <h1 className="text-center font-bold text-4xl max-w-6xl mx-auto">
          loading.....
        </h1>
      ) : (
        <section className="max-w-6xl mx-auto py-8 px-2 border ">
          <Outlet />
        </section>
      )}
    </>
  )
}
export default HomeLayout
