import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <>
      <div className="h-screen bg-slate-50 pt-2 max-w-6xl mx-auto flex flex-col gap-y-2">
        <div className=" border border-red-300 basis-10   ">
          <Navbar />
        </div>
        {isPageLoading ? (
          <h1 className="text-center font-bold text-4xl max-w-6xl mx-auto">
            loading.....
          </h1>
        ) : (
          <section className="w-full max-w-6xl mx-auto basis-[900px] px-2 border ">
            <Outlet />
          </section>
        )}
      </div>
    </>
  )
}
export default HomeLayout
