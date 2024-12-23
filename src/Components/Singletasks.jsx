import { MdEditSquare, MdDeleteForever } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Singletasks = () => {
  return (
    <div className="flex items-center justify-between rounded-md border px-2 py-2">
      <div className="flex items-center gap-2 basis-3/5 ">
        <input
          type="checkbox"
          name="isCompleted"
          className="mr-1 h-4 w-4 md:h-5 md:w-5"
        />
        <p className=" font-medium md:font-semibold text-base md:text-xl">
          Buy Vegetables
        </p>
      </div>
      {/* small screen */}
      <Link to="/editTasks/:id">
        <MdEditSquare className=" cursor-pointer basis-1/5 md:hidden" />
      </Link>
      <MdDeleteForever
        size={18}
        className=" cursor-pointer basis-1/5 md:hidden"
      />
      {/* Large screen */}
      <Link to="/editTasks/:id">
        <MdEditSquare
          size={20}
          className=" cursor-pointer basis-1/5 hidden md:block"
        />
      </Link>
      <MdDeleteForever
        size={25}
        className=" cursor-pointer basis-1/5 hidden md:block"
      />
    </div>
  )
}
export default Singletasks
