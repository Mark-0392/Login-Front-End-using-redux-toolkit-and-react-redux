const Single_Task = () => {
  function getDate() {
    const today = new Date()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const date = today.getDate()
    return `${month}/${date}/${year}`
  }
  return (
    <div className="min-h-screen grid place-items-center bg-slate-800 lg:bg-white ">
      <div className="w-11/12 flex flex-col text-center max-w-xl gap-y-4 lg:border-2 shadow-lg lg:shadow-md lg:shadow-cyan-500/50 shadow-cyan-500/50 py-4 ">
        <h2 className="text-base font-semibold text-white lg:text-black lg:text-2xl text-center underline decoration-solid underline-offset-8  decoration-slate-400 decoration-2 lg:decoration-4">
          Your Task Details
        </h2>
        <h4 className="text-base font-semibold text-white lg:text-black lg:font-bold lg:text-xl ">
          Task Name :
          <span className="text-lg lg:text-2xl text-sky-500">
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
    </div>
  )
}
export default Single_Task
