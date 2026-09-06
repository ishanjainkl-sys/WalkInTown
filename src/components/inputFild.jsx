export default function InputFild({
  label,
  inputName,
  same,
  notNsc,
  disable,
  placeholder,
}) {
  return (
    <div className=" w-full flex flex-col gap-1">
      <p className={`font-semibold`}>
        {label} {!notNsc && <span className=" text-primary-red">*</span>}
      </p>
      <input
        type="text"
        placeholder={placeholder}
        defaultValue={inputName}
        className=" w-full text-sm rounded-md p-2 border "
      />
      {same && (
        <div className=" flex gap-2 mt-4 items-center">
          <input type="checkbox" className=" size-4"></input>
          <p className=" text-gray-600 text-sm">Same as phone number</p>
        </div>
      )}
    </div>
  );
}
