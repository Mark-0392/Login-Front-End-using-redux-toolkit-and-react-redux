import { Link } from 'react-router-dom'

const RegisterPageHeader = () => {
  return (
    <div className="text-white lg:text-black mb-8 text-center">
      <h2 className=" font-DM_Serif_FontBold font-normal text-2xl md:text-3xl text-red-400">
        Create an Account
      </h2>
      <p className="font-Roboto_Bold_Italic font-medium text-base pt-1  lg:text-xl">
        Already have an account?
        <Link
          to="/login"
          className="font-Playfair_SemiBold font-semibold text-xl lg:text-3xl text-pink-600 hover:text-blue-700  sm:max-md:text-blue-200 ml-1"
        >
          {' '}
          Login
        </Link>
      </p>
    </div>
  )
}
export default RegisterPageHeader
