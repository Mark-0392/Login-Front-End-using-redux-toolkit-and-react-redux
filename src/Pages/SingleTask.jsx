import { Link } from 'react-router-dom'
import CommonButtonLayout from '../Components/CommonButtonLayout'

const Single_Task = () => {
  function getDate() {
    const today = new Date()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const date = today.getDate()
    return `${month}/${date}/${year}`
  }
  return (
    <div className="max-lg:h-[calc(100%-36px)] h-[calc(100%-56px)] grid place-items-center bg-slate-800 lg:bg-white border grid-rows-2">
      <div className="w-11/12 flex flex-col text-center max-w-xl gap-y-4 lg:border-2 shadow-lg lg:shadow-md lg:shadow-cyan-500/50 shadow-cyan-500/50 py-4 self-end ">
        <h2 className="text-base font-semibold text-white lg:text-black lg:text-2xl text-center underline decoration-solid underline-offset-8  decoration-slate-400 decoration-2 lg:decoration-4">
          Your Task Details
        </h2>
        <h4 className="text-base font-semibold text-white lg:text-black lg:font-bold lg:text-xl ">
          Task Name :
          <span className="text-md lg:text-2xl text-sky-500">
            {' '}
            Buy Vegetables
          </span>
        </h4>
        <h4 className="text-base font-semibold text-white lg:text-black lg:font-bold lg:text-xl ">
          Task Completed :{' '}
          <span className="text-lg lg:text-2xl text-sky-500 "> False</span>
        </h4>
        <h5 className="text-base font-semibold text-white lg:text-black lg:font-bold lg:text-xl ">
          Create At:{' '}
          <span className="text-lg lg:text-lg text-sky-500"> {getDate()}</span>
        </h5>
      </div>
      <Link to="/dashboard" className="self-start translate-y-6">
        <CommonButtonLayout text="Back to Tasks" />
      </Link>
    </div>
  )
}
export default Single_Task
