const CommonFormLayout = ({ type, name, defaultValue, placeholder, label }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-lg tracking-wide font-semibold lg:text-xl lg:tracking-normal text-white mb-1 px-1 lg:text-gray-800"
      >
        {label}
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        name={name}
        id={name}
        placeholder={placeholder}
        required
        className="w-full h-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-gray-500 mt-1 p-2"
      />
    </div>
  )
}
export default CommonFormLayout
