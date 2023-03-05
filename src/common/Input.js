const InputComponent = ({label ,type,formik , name}) => {
    return ( 
        <div className="flex flex-col">
        <label className="text-sm text-purple-800 mb-2" htmlFor={name}>{label}</label>
        <input
        dir="ltr"
          className="mb-2 py-2 px-4 rounded-md shadow-sm outline-0  focus:border-2 focus:border-purple-800"
          type={type}
          id={name}
          {...formik.getFieldProps(name)}
        />
        {formik.touched[name]&&formik.errors[name]&&<span className="text-xs text-red-600">{formik.errors[name]}</span>}
      </div>
     );
}
 
export default InputComponent;