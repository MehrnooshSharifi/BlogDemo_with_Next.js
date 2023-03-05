import InputComponent from "@/common/Input";
import { useAuth, useAuthActions } from "@/context/AuthContext";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "src/container/Layout";
import * as Yup from "yup";

const initialValues = {
  name: "",
  phoneNumber: "",
  email: "",
  password: "",
  // passwordConfirmation: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("نام و نام خانوادگی را وارد نمایید"),
  phoneNumber: Yup.string().required("شماره تلفن همراه را وارد نمایید"),
  email: Yup.string()
    .required("ایمیل را وارد کنید")
    .email("فرمت ایمیل صحیح نیست"),
  password: Yup.string().required("رمز عبور را وارد کنید"),
  // passwordConfirmation: Yup.string().required("تکرار رمز عبور را وارد نمایید").oneOf(
  //   [Yup.ref("password"), null],
  //   "با رمز عبور وارد شده مطابقت ندارد"
  // ),
});
const SignUp = () => {
  const { user } = useAuth();
  const dispatch = useAuthActions();

  const onSubmit = (values) => {
    dispatch({ type: "SIGNUP", payload: values });
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
      <div className="container mx-auto p-4 md:max-w-md h-screen">
        <form onSubmit={formik.handleSubmit}>
          <h2 className="text-center text-3xl font-bold text-purple-800">
            ثبت نام
          </h2>
          <InputComponent
            name="name"
            formik={formik}
            label="نام و نام خانوادگی "
            type="text"
          />
          <InputComponent
            name="phoneNumber"
            formik={formik}
            label="شماره تلفن همراه"
            type="tel"
          />
          <InputComponent
            name="email"
            formik={formik}
            label="آدرس پست الکترونیکی"
            type="text"
          />
          <InputComponent
            name="password"
            formik={formik}
            label="رمز عبور "
            type="password"
          />
          {/* <InputComponent
            name="passwordConfirmation"
            formik={formik}
            label="تکرار رمز عبور"
            type="password"
          /> */}
          <button
            className={`w-full bg-purple-800 text-white rounded-md py-2 mt-4 ${
              !formik.isValid
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
            disabled={!formik.isValid}
          >
            ثبت نام
          </button>
          <Link href="/signin">
            <p className="mt-4 text-xs text-purple-800">قبلا ثبت نام کردی؟</p>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
