import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

const Register = () => {
  return (
    <div className="my-5 space-y-6">
      <div className="text-center text-3xl font-light uppercase text-red-700">
        Register
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col space-y-4">
            <label className="flex items-start flex-col space-y-2">
              <span className="uppercase text-sm font-medium text-gray-700">
                USERNAME
              </span>
              <Field
                name="Name"
                className="p-2 w-full rounded border border-t-2 border-gray-300 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700"
              />
              {errors.firstName && touched.firstName ? (
                <div className="text-sm text-red-700">{errors.firstName}</div>
              ) : null}
            </label>
            <label className="flex items-start flex-col space-y-1">
              <span className="uppercase text-sm font-medium text-gray-700">
                Password
              </span>
              <Field
                name="Password"
                className="p-2 w-full rounded border border-t-2 border-gray-300 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700"
              />
              {errors.firstName && touched.firstName ? (
                <div className="text-sm text-red-700">{errors.firstName}</div>
              ) : null}
            </label>
            <label className="flex items-start flex-col space-y-1">
              <span className="uppercase text-sm font-medium text-gray-700">
                Conform Password
              </span>
              <Field
                name="Password"
                className="p-2 w-full rounded border border-t-2 border-gray-300 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700"
              />
              {errors.firstName && touched.firstName ? (
                <div className="text-sm text-red-700">{errors.firstName}</div>
              ) : null}
            </label>

            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button
              type="submit"
              className=" py-2 bg-red-700 hover:bg-red-900 text-white rounded w-full font-semibold"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
