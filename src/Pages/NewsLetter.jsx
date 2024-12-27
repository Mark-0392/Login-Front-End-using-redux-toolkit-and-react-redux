import CommonFormLayout from '../Components/CommonFormLayout'
import SubmitButtonCommon from '../Components/SubmitButtonCommon'

const NewsLetter = () => {
  return (
    <div className="grid place-items-center w-full px-2  mx-auto h-[calc(100%-36px)] lg:h-[calc(100%-56px)] lg:bg-white bg-slate-500  ">
      <div className=" flex flex-col gap-y-4 text-white lg:text-black  md:border-4 md:border-double md:border-blue-500 px-2 lg:px-8 py-4 lg:py-8 hover:shadow-lg hover:shadow-blue-300 rounded-md ">
        <h2 className="text-center font-bold text-base lg:text-2xl capitalize">
          We will be glad if you can join us for better future
        </h2>
        <p className="capitalize font-serif text-sm lg:text-xl">
          Please subscribe to our newsletter for more exiting offers and to know
          more about us.
        </p>
        <div className="flex gap-x-2 flex-1 gap-y-4 md:gap-y-0 md:flex-row flex-col ">
          <div className="basis-3/4">
            <CommonFormLayout
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email address here"
            />
          </div>
          <div className="basis-1/4 md:self-end ">
            <SubmitButtonCommon
              text="Subscribe"
              height="h-[42px]"
              width="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default NewsLetter
