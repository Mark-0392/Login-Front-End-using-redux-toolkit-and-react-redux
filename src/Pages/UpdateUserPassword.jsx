import { Form } from 'react-router-dom'
import SubmitButtonCommon from '../Components/SubmitButtonCommon'

const ResetPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-800 lg:bg-white">
      <Form
        method="post"
        className="px-2 max-w-xl flex-1 flex flex-col border gap-y-4 py-4"
      >
        <h2 className="text-base font-semibold text-white lg:text-black lg:text-lg text-center">
          Update Your Password
        </h2>
        <div className="flex gap-1 justify-center items-center">
          <label
            htmlFor="oldPassword"
            className="block basis-1/3 text-sm font-medium lg:text-base text-white mb-1 px-2 lg:text-black"
          >
            Old Password
          </label>
          <input
            type="text"
            id="oldPassword"
            placeholder="Enter your old password here"
            name="oldPassword"
            required
            className="w-full h-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-gray-500 p-2"
          />
        </div>
        <div className="flex gap-1 justify-center items-center">
          <label
            htmlFor="newPassword"
            className="block basis-1/3 text-sm font-medium lg:text-base text-white mb-1 px-2 lg:text-black"
          >
            New Password
          </label>
          <input
            type="text"
            id="newPassword"
            placeholder="Enter your new password here"
            name="newPassword"
            required
            className="w-full h-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-gray-500 mt-1 p-2"
          />
        </div>
        <SubmitButtonCommon text="Submit" navigationState="submitting..." />
        {/* <div className="self-end w-[413.5px] ">
          <button
            type="button"
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded shadow-md text-sm lg:text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Submit
          </button>
        </div> */}
      </Form>
    </div>
  )
}
export default ResetPassword
