import { Form, Link, redirect } from 'react-router-dom'
import SubmitButtonCommon from '../Components/SubmitButtonCommon'
import CommonFormLayout from '../Components/CommonFormLayout'
import RegisterPageHeader from '../Components/Register Page Components/RegisterPage Header'
import { BaseURL } from '../../Utils/BaseUrl'
import { toast } from 'react-toastify'

export const action = async (e, { request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    const response = await BaseURL.post('api/v1/auth/register', data)
    // console.log(response)

    toast.success(response.data.msg)
    return redirect('/login')
  } catch (error) {
    // console.log(error)

    const error_Message =
      error?.response?.data?.msg || 'Please check your credentials'
    toast.error(error_Message)
    return null
  }
}

function RegisterPage() {
  return (
    <section className=" grid place-items-center min-h-screen bg-slate-900 lg:bg-slate-800 px-2">
      <div className="grid w-full border max-w-[450px]  rounded-lg border-violet-500 lg:border-black">
        <div className=" shadow-md rounded-lg px-3 py-8 lg:py-7 lg:px-6 lg:bg-white lg:w-[450px] lg:mx-auto">
          <RegisterPageHeader />

          {/* A separate div for form details */}
          <Form method="post" className="box-border space-y-6 ">
            <CommonFormLayout
              label="Name"
              type="text"
              name="name"
              placeholder="Enter your name here"
              defaultValue="Susan"
              required
            />

            <CommonFormLayout
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email address here"
              defaultValue="susan@hello.com"
            />
            <CommonFormLayout
              label="Password"
              type="password"
              name="password"
              placeholder="set your password"
              defaultValue="success"
            />
            {/* <div className=" flex items-center">
              <input
                type="checkbox"
                name="terms-and-conditions"
                id="terms-and-conditions"
                className=" h-5 w-5 rounded border-gray-500 "
              />
              <label
                htmlFor="terms-and-conditions"
                className="ml-2 block text-white lg:text-black"
              >
                I agree to the
                <Link
                  to="#"
                  className="lg:text-indigo-600 text-yellow-200 lg:hover:text-indigo-500 ml-1 font-semibold underline decoration-1 underline-offset-8 decoration-yellow-400 "
                >
                  Terms & Privacy Policy.
                </Link>
              </label>
            </div> */}
            <SubmitButtonCommon
              width={'w-full'}
              text="Register"
              navigationState="registering...."
            />
          </Form>
        </div>
      </div>
    </section>
  )
}
export default RegisterPage

// bg-sky bg-cover bg-center
