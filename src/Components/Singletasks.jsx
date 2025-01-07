import { MdEditSquare, MdDeleteForever } from 'react-icons/md'
import { GrView } from 'react-icons/gr'
import { Link, useLoaderData } from 'react-router-dom'
import { useState } from 'react'

const ShowTasks = () => {
  const { tasks } = useLoaderData()
  console.log(tasks)

  // const [ischecked, setIsChecked] = useState(false)
  // console.log(ischecked)

  // // const setLocalStorage = () => {
  // //   localStorage.setItem('isChecked', JSON.stringify(ischecked))
  // // }
  // // setLocalStorage()

  // const checkedValue = JSON.parse(localStorage.getItem('isChecked'))
  // console.log(checkedValue)

  // // const checkedTrue = getLocalStorage()
  // const handleOnChange = (e) => {
  //   const checkedTrue = !ischecked
  //   setIsChecked(checkedTrue)
  //   localStorage.setItem('isChecked', JSON.stringify(checkedTrue))
  //   // setIsChecked(Boolean(chekcedTrue))
  // }

  return (
    <>
      {tasks.map((task) => {
        return (
          <div
            key={task._id}
            className="flex items-center justify-between rounded-md border px-2 py-2 mb-2"
          >
            <form className="flex items-center gap-2 basis-3/5 ">
              <input
                type="checkbox"
                name="isCompleted"
                defaultChecked={task.completed}
                className="mr-1 h-4 w-4 md:h-5 md:w-5"
              />
              <p
                className={` font-medium md:font-semibold text-base md:text-xl ${
                  task.completed && 'line-through'
                }`}
              >
                {task.name}
              </p>
            </form>
            {/* small screen */}

            {/* Large screen */}
            <div
              className="inline-flex space-x-2 justify-between
        items-center basis-2/5 cursor-pointer mr-2"
            >
              <Link to={`singleTask/${task._id}`}>
                <GrView className="size-4 lg:size-6 hover:text" />
              </Link>

              <Link to={`editTasks/${task._id}`}>
                <MdEditSquare className="size-4 lg:size-6 " />
              </Link>

              <MdDeleteForever className="size-5 lg:size-7" />
            </div>
          </div>
        )
      })}
    </>
  )
}
export default ShowTasks
