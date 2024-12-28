import { Form } from 'react-router-dom'
import CommonFormLayout from '../Components/CommonFormLayout'
import SubmitButtonCommon from '../Components/SubmitButtonCommon'

const EditTasks = () => {
  return (
    <div className="max-lg:h-[calc(100%-36px)] lg:h-[calc(100%-56px)]  grid place-items-center bg-slate-800 lg:bg-white">
      <Form className="w-11/12 max-w-xl grid gap-y-4 max-sm:mt-12   ">
        <h1 className="text-lg font-semibold text-white lg:text-black lg:text-xl lg:text-center">
          Edit Task
        </h1>
        <div className="flex gap-1 justify-center items-center">
          <label
            htmlFor="task"
            className="block basis-1/3 text-sm md:text-lg font-medium  text-white mb-1 px-2 lg:text-black"
          >
            Task
          </label>
          <input
            type="text"
            id="task"
            placeholder="Enter your task here"
            name="task"
            className="w-full h-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-base text-gray-500 p-2"
          />
        </div>
        {/* <CommonFormLayout
          type="text"
          name="name"
          defaultValue=""
          placeholder=""
          label="Task"
        /> */}
        <div className="flex items-center gap-x-4 ">
          <label
            htmlFor="isCompleted"
            className="block basis-1/4 text-sm md:text-lg font-medium  text-white mb-1 px-2 lg:text-black"
          >
            Task Completed
          </label>
          <input
            type="checkbox"
            id="isCompleted"
            name="completed"
            className=" h-4 w-4 rounded-md border-gray-500 -ml-2"
          />
        </div>
        <div className="">
          <SubmitButtonCommon
            text="Confirm my Edit"
            navigationState="saving..."
            width="w-full"
          />
        </div>
      </Form>
    </div>
  )
}
export default EditTasks

// <div className="min-h-screen flex justify-center items-center border bg-slate-800 lg:bg-white">
//   <Form method="POST" className="border w-11/12 max-w-xl ">
//     <div className="border justify-self-center">hello there</div>
//     <div className="border">hello there</div>
//     <div className="border">hello there</div>
//   </Form>
// </div>
