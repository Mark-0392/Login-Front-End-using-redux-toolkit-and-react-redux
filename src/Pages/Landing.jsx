import CommonFormLayout from '../Components/CommonFormLayout'
import CreateTaskForm from '../Components/CreateTaskForm'
import Singletasks from '../Components/Singletasks'
import SubmitButtonCommon from '../Components/SubmitButtonCommon'
import { Form } from 'react-router-dom'
const Landing = () => {
  return (
    <div className="  w-full h-[calc(100%-41px)]  mx-auto flex flex-col items-center justify-center  lg:bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="max-w-xl mx-auto w-full py-4">
        {/* <h2>hello there</h2> */}
        <h2 className="text-center text-base  font-medium mb-2 ">Add Tasks</h2>
        <Form method="post">
          <CreateTaskForm />
        </Form>

        <div className="mt-4 max-w-xl mx-auto ">
          <Singletasks />
        </div>
      </div>
    </div>
  )
}
export default Landing

{
  /* <div className="mt-4 max-w-xl mx-auto">
        <div className="grid grid-flow-col grid-cols-4 px-2 border place-items-center py-2">
          <input
            type="checkbox"
            name="isCompleted"
            className="justify-self-start md:justify-self-end md:mr-4 "
          />
          <p className="justify-self-start font-medium md:font-semibold text-base md:text-xl">
            Buy Vegetables
          </p>
          <MdEditSquare size={20} className="justify-self-end cursor-pointer" />
          <MdDeleteForever
            size={25}
            className="justify-self-end cursor-pointer"
          />
        </div>
      </div>
    </div> */
}
