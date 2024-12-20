import { Form } from 'react-router-dom'
import CommonFormLayout from '../Components/CommonFormLayout'

const EditTasks = () => {
  return (
    <div className="min-h-screen grid place-items-center bg-slate-800 lg:bg-white">
      <Form method="POST" className="w-11/12 max-w-xl grid gap-y-4">
        <h1 className="text-lg font-semibold text-white lg:text-black lg:text-xl lg:text-center">
          Edit Task
        </h1>

        <CommonFormLayout
          type="text"
          name="name"
          defaultValue=""
          placeholder=""
          label="Task"
        />
        <div className="flex items-center gap-x-4 ">
          <label
            htmlFor="isCompleted"
            className="block   text-sm font-medium lg:text-lg text-white mb-1 px-2 lg:text-black"
          >
            Completed :
          </label>
          <input
            type="checkbox"
            id="isCompleted"
            name="completed"
            className="h-3 w-3 lg:h-5   lg:w-5 rounded-md border-gray-500"
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
