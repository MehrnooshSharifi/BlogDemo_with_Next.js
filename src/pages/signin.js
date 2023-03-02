import { useFormik } from "formik";
import Link from "next/link";
import Layout from "src/container/Layout";
import * as Yup from 'yup'

const initialValues = {
  email: "",
  password: "",
};
const validationSchema=Yup.object({
  email : Yup.string().required("ایمیل را وارد کنید").email("فرمت ایمیل صحیح نیست") ,
  password : Yup.string().required("رمز عبور را وارد کنید")
})

const SignIn = () => {
  const onSubmit = (values) => {
    e.preventDefualt()
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount :true
  });
  console.log(formik.values)
  return (
    <Layout>
      <div className="container mx-auto p-4 md:max-w-md ">
        <form onsubmit={formik.handleSubmit}>
          <h2 className="text-center text-3xl font-bold text-purple-800">
            ورود
          </h2>
          <div className="flex flex-col">
            <label className="text-sm text-purple-800 mb-2" htmlFor="email">ایمیل</label>
            <input
              className="mb-2 py-2 px-4 rounded-md shadow-sm outline-0  focus:border-2 focus:border-purple-800"
              type="text"
              id="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email&&formik.errors.email&&<span className="text-xs text-red-600">{formik.errors.email}</span>}
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-purple-800 mb-2" htmlFor="password">رمز عبور</label>
            <input
              className="mb-2 py-2 px-4 rounded-md shadow-sm outline-0  focus:border-2 focus:border-purple-800"
              type="password"
              id="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password&&formik.errors.password&&<span className="text-xs text-red-600">{formik.errors.password}</span>}
          </div>
          <button className={`w-full bg-purple-800 text-white rounded-md py-2 mt-4 cursor-pointer ${!formik.isValid? "opacity-30" : "opacity-100"}`} disabled={formik.isValid}>
            ورود
          </button>
          <Link href="/signup">
            <p className="mt-4 text-xs text-purple-800">هنوز ثبت نام نکردی ؟</p>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default SignIn;
