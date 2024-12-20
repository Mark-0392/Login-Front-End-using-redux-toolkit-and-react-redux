import { Form, useNavigation } from 'react-router-dom'
import SubmitButtonCommon from '../Components/SubmitButtonCommon'

const ResetPassword = () => {
  const navigate = useNavigation()
  const isSubmitting = navigate.state === 'submitting'
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-800 lg:bg-white">
      <Form
        method="post"
        className="max-w-xl flex flex-1 flex-col gap-y-4 px-2 py-4 border border-indigo-500 mx-2 lg:mx-0 hover:shadow-md hover:shadow-purple-400 duration-700"
      >
        <h2 className="text-base font-semibold text-white lg:text-black lg:text-lg text-center">
          Reset Your Password
        </h2>
        <div className="flex">
          <label
            htmlFor="resetPassword"
            className="block basis-1/3 text-sm font-medium lg:text-base text-white mb-1 px-2 lg:text-black"
          >
            Enter your new password
          </label>
          <input
            type="text"
            name="password"
            id="resetPassword"
            className="w-full h-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-gray-500 p-2"
          />
        </div>
        <div className="lg:hidden">
          <SubmitButtonCommon text="Submit" navigationState="saving..." />
        </div>
      </Form>
      <div className="h-[130px] w-16 max-lg:hidden  border-red-400">
        <button
          type="submit"
          className="w-full h-full border border-transparent rounded shadow-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 "
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="animate-spin h-5 w-5"></span>
          ) : (
            'Submit'
          )}
        </button>
      </div>
    </div>
  )
}
export default ResetPassword
