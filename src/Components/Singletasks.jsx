import { MdEditSquare, MdDeleteForever } from 'react-icons/md'
import { GrView } from 'react-icons/gr'
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
      <div
        className="inline-flex space-x-4 justify-end
       items-center basis-2/5 cursor-pointer md:hidden"
      >
        <Link to="singleTask/123">
          <GrView size={18} className="" />
        </Link>
        <Link to="editTasks/:id">
          <MdEditSquare className="   md:hidden" />
        </Link>
        <MdDeleteForever size={18} className="  md:hidden" />
      </div>
      {/* Large screen */}
      <div
        className="inline-flex space-x-2 justify-between
       items-center basis-2/5 cursor-pointer md:block hidden"
      >
        <Link to="singleTask/123">
          <GrView size={20} className="hidden md:block " />
        </Link>

        <Link to="editTasks/:id">
          <MdEditSquare size={20} className="hidden md:block " />
        </Link>

        <MdDeleteForever size={25} className="hidden md:block" />
      </div>
    </div>
  )
}
export default Singletasks
