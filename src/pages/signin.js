import InputComponent from "@/common/Input";
import { useAuth, useAuthActions } from "@/context/AuthContext";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "src/container/Layout";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .required("ایمیل را وارد کنید")
    .email("فرمت ایمیل صحیح نیست"),
  password: Yup.string().required("رمز عبور را وارد کنید"),
});

const SignIn = () => {
  const dispatch = useAuthActions();
  const {user} = useAuth();

  const onSubmit = (values) => {
    dispatch({ type: "SIGNIN", payload: values });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  console.log(formik.values);
  return (
    <Layout>
      <div className="container mx-auto p-4 md:max-w-md  ">
        <form onSubmit={formik.handleSubmit}>
          <h2 className="text-center text-3xl font-bold text-purple-800">
            ورود
          </h2>
          <InputComponent
            name="email"
            formik={formik}
            label="نام کاربری"
            type="text"
          />
          <InputComponent
            name="password"
            formik={formik}
            label="رمز عبور "
            type="password"
          />
          <button
            className={`w-full bg-purple-800 text-white rounded-md py-2 mt-4 ${
              !formik.isValid
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
            disabled={!formik.isValid}
          >
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
