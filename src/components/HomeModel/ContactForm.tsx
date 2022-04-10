import React, { useRef } from "react";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { imageTransparent } from "../imageTransparent";
import emailjs from "emailjs-com";
import { FaYoutube } from "react-icons/fa";
import { Form, Formik, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

type Props = {
  setOpen: any;
  setSelected: any;
  setShow: any;
};

const DisplayingErrorMessagesSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  number: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  productName: Yup.string().required("Required"),
});

const ContactForm = (props: Props) => {
  const form = useRef();
  const { setShow, setOpen, setSelected } = props;
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      address: "",
      productName: "",
    },
    validationSchema: DisplayingErrorMessagesSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        emailjs.sendForm(
          "service_76bvuor",
          "template_vefo0ch",
          //@ts-ignore
          form.current,

          "3tOjgQYDS_3oNxS_u"
        );

        setShow(true);
        setOpen(false);
        console.log(values);
      } catch (e) {
        console.log("err", e);
      }
    },
  });
  return (
    <FormikProvider value={formik}>
      <Form
        //@ts-ignore
        ref={form}
        className="sm:py-8 items-center gap-10 text-sm space-y-6"
        onSubmit={formik.handleSubmit}
      >
        <div className="lg:w-3/4 space-y-4">
          <div className="">
            <input
              type={"text"}
              name="name"
              className="border p-2 px-2 w-full bg-transparent rounded bg-white"
              placeholder="Enter your name*"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-xs text-red-700">{formik.errors.name}</div>
            ) : null}
          </div>
          <div>
            <input
              type={"email"}
              name="email"
              className="border p-2 px-2 w-full bg-transparent rounded bg-white"
              placeholder="Enter your email*"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-xs text-red-700">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <input
              type={"text"}
              name="number"
              className="border p-2 px-2 w-full bg-transparent rounded bg-white"
              placeholder="Enter your contact number*"
              onChange={formik.handleChange}
              value={formik.values.number}
            />
            {formik.touched.number && formik.errors.number ? (
              <div className="text-xs text-red-700">{formik.errors.number}</div>
            ) : null}
          </div>
          <div>
            <input
              type={"text"}
              name="address"
              className="border p-2 px-2 w-full bg-transparent rounded bg-white"
              placeholder="Enter your address*"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="text-xs text-red-700">
                {formik.errors.address}
              </div>
            ) : null}
          </div>
          <div>
            <select
              name="productName"
              className="border p-2 px-2 w-full bg-transparent rounded bg-white text-gray-400"
              value={formik.values.productName}
              onChange={(e) => {
                formik.handleChange(e);
                setSelected(e.target.value);
              }}
            >
              <option value="default" hidden>
                Bikes you are interested in*
              </option>
              {imageTransparent.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button
            type="submit"
            className="py-2 px-4 text-gray-700 bg-gray-300 text-sm rounded"
          >
            Get Started
          </button>
          <a
            href="https://www.facebook.com/motorheadnepal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook className="w-6 h-6 text-gray-100" />
          </a>
          <a
            href="https://www.instagram.com/motorheadbikesnepal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiInstagramFill className="w-7 h-7 text-gray-100" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCb7V1K8g3OZqS9xaFKpS9gg"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaYoutube className="w-7 h-7 text-gray-100" />
          </a>
        </div>
      </Form>
    </FormikProvider>
  );
};

export default ContactForm;
