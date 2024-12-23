import { Form } from 'react-router-dom'
import CommonFormLayout from '../Components/CommonFormLayout'
import SubmitButtonCommon from '../Components/SubmitButtonCommon'

const UpdateUser = () => {
  return (
    <div className="min-h-screen grid place-items-center bg-slate-800 lg:bg-white">
      <Form className=" w-11/12 max-w-[500px] grid grid-flow-row gap-y-5 rounded-lg  px-4 lg:mx-0 hover:shadow-lg hover:shadow-purple-400 lg:hover:shadow-lg lg:hover:shadow-fuchsia-400/50  duration-700">
        <h1 className="text-base font-semibold text-white lg:text-black lg:text-lg text-center  items-center">
          Update Your Email and Name
        </h1>
        <div className="mb-3">
          <div className="mb-3 ">
            <CommonFormLayout
              type="email"
              name="email"
              defaultValue=""
              placeholder="enter your email address here"
              label="Email"
            />
          </div>
          <div>
            <CommonFormLayout
              type="name"
              name="name"
              defaultValue=""
              placeholder="enter your name here"
              label="Name"
            />
          </div>
        </div>
        <div className="mb-4">
          <SubmitButtonCommon text="Submit" navigationState="sending" />
        </div>
      </Form>
    </div>
  )
}
export default UpdateUser
