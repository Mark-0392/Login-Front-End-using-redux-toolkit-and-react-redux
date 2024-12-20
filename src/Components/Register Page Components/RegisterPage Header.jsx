import { Link } from 'react-router-dom'

const RegisterPageHeader = () => {
  return (
    <div className="text-white lg:text-black mb-8 text-center">
      <h2 className="font-bold text-3xl lg:text-4xl ">Create an account</h2>
      <p className="font-medium pt-1 text-sm lg:text-lg">
        Already have an account?
        <Link
          to="/login"
          className="font-bold text-blue-400 hover:text-blue-500 sm:max-md:text-blue-200 ml-1"
        >
          Login
        </Link>
      </p>
    </div>
  )
}
export default RegisterPageHeader
