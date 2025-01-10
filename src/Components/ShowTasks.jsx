import { MdEditSquare, MdDeleteForever } from 'react-icons/md'
import { GrView } from 'react-icons/gr'
import {
  Link,
  redirect,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTask, getUpdatedTask } from '../../Features/Tasks/Task'
import axios from 'axios'
import { toast } from 'react-toastify'

const ShowTasks = ({ tasks1 }) => {
  // console.log(tasks1)
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  const { tasks } = useLoaderData()
  console.log(tasks)
  const navigate = useNavigate()
  // const updatedtask = useSelector((state) => state.editTask.editTask)
  // console.log(updatedtask)
  // const { completed } = updatedtask
  // console.log(completed)

  const updatedTaskReal = tasks1.find((singeTask) => {
    const { _id: id } = singeTask
    return id
  })
  console.log(updatedTaskReal)
  // const { completed: completed2 } = updatedTaskReal
  // console.log(completed2)

  // const [isChecked, setIsChecked] = useState(updatedTaskReal.completed)

  // const handleChange = async (e) => {
  //   const id = updatedTaskReal._id
  //   console.log(id)

  //   const newValue = !isChecked
  //   // setIsChecked(newValue)
  //   console.log(newValue)
  //   try {
  //     const response = await axios.patch(`/api/v1/tasks/${id}`, {
  //       completed: newValue,
  //     })
  //     console.log(response)
  //     toast.success(response.data.msg)
  //     setIsChecked(response.data.tasks.completed)
  //     return navigate('/dashboard')
  //   } catch (error) {
  //     const errorMsg = error.response.data.msg
  //     console.log(errorMsg)
  //   }
  // }

  const handleClick = async () => {
    const id = updatedTaskReal._id
    console.log(id)

    try {
      const response = await axios.delete(`/api/v1/tasks/${id}`)
      console.log(response)
      toast.success(response.data.msg)
      return navigate('/dashboard')
    } catch (error) {
      const errorMsg = error.response.data.msg
      console.log(errorMsg)
    }
  }

  const [ischecked, setIsChecked] = useState(false)
  const handleChange = async (e, id) => {
    const newValue = e.target.checked

    console.log(id)
    console.log(newValue)

    try {
      const response = await axios.patch(`/api/v1/tasks/${id}`, {
        completed: newValue,
      })
      const somuchValue = response.data.tasks.completed
      setIsChecked(somuchValue)
      console.log(somuchValue)
      toast.success(response.data.msg)

      return navigate('/dashboard')
    } catch (error) {
      const errorMsg = error.response.data.msg
      console.log(errorMsg)
    }
  }
  return (
    <>
      {tasks.map((task) => {
        return (
          <div
            key={task._id}
            className="flex items-center justify-between rounded-md border px-2 py-2 mb-2"
          >
            <div className="flex items-center gap-2 basis-3/5 ">
              <input
                type="checkbox"
                name="completed"
                className={`size-4 md:size-5 `}
                checked={task.completed}
                onChange={(e) => handleChange(e, task._id)}
              />
              <p
                className={` font-medium md:font-semibold text-base md:text-xl ${
                  task.completed && 'line-through'
                }`}
              >
                {task.name}
              </p>
            </div>
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
              <button type="button" onClick={handleClick}>
                <MdDeleteForever className="size-5 lg:size-7" />
              </button>
            </div>
          </div>
        )
      })}
    </>
  )
}
export default ShowTasks

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
