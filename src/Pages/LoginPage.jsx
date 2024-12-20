import { toast } from 'react-toastify'
import CommonFormLayout from '../Components/CommonFormLayout'
import SubmitButtonCommon from '../Components/SubmitButtonCommon'
import { Form, Link, redirect } from 'react-router-dom'
import { BaseURL } from '../../Utils/BaseUrl'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../Features/Users/userSlice'

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    // const dispatch = useDispatch()
    try {
      const response = await BaseURL.post('api/v1/auth/login', data)
      store.dispatch(loginUser(response.data))

      toast.success('You have successfully logged in')
      return redirect('/dashboard')
    } catch (error) {
      console.log(error)

      const error_Message = error.response.data.message
      toast.error(error_Message)
      return null
    }

    return 'something'
  }

function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-900 lg:bg-none lg:bg-slate-900">
      <Form
        method="post"
        className="w-[26rem] h-96 shadow-lg rounded-lg border border-gray-100 px-4 flex flex-col justify-center gap-2 "
      >
        <h2 className="text-3xl font-semibold text-white lg:text-white sm:text-2xl text-center ">
          Login In
        </h2>
        <div className="mb-4">
          <CommonFormLayout
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            defaultValue="susan@hello.com"
          />
        </div>
        <div className="mb-4">
          <CommonFormLayout
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            defaultValue="success"
          />
        </div>
        <Link
          to="/forgotPassword"
          className="text-white self-end hover:text-cyan-200 mb-2"
        >
          Forgot Password ?
        </Link>
        <SubmitButtonCommon text="Sign In" navigationState="Logging in..." />
      </Form>
    </div>
  )
}
export default LoginPage

// <label
//       htmlFor="email"
//       className="absolute left-0 -top-3.5 text-gray-600 text-lg peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
//        transition-all  duration-1000"
//     >
