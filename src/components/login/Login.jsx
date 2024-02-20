import React from "react";
import "./login.css";
// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { Switch } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { t } from "i18next";

function Login() {
  const { i18n } = useTranslation();
  const [checked, setChecked] = useState(i18n.language === "ar");
  const handleChange = () => {
    const newLanguage = checked ? "en" : "ar";
    i18n.changeLanguage(newLanguage);
    setChecked(!checked);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      keepLogin: true,
    },

    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(4, "Password must be at least 8 characters long"),
    }),

    onSubmit: (values) => {
      console.log(values);
      // handleLogin(values);
    },
  });
  // const imageUrl = "/Images/login.png";
  const imgUrl2 = "/Images/bg-bottom.png";
  const bgImg = "/Images/login2.png";

  return (
    <div
      className="w-screen h-screen lg:grid lg:grid-cols-2 grid grid-cols-1 md:px-8 px-5  bg-bottom bg-no-repeat"
      style={{ backgroundImage: `url(${imgUrl2})` }}
    >
      <div className="flex flex-col items-center justify-center  ">
        {/* <Switch className="mx-auto" color="default" checked={checked} inputProps={{ 'aria-label': 'toggle language' }} onChange={handleChange} /> */}
        <div className="flex  items-center justify-center">
          <button
            className="text-white  bg-primary rounded-2xl px-4"
            checked={checked}
            onClick={handleChange}
          >
            {!checked ? "عربي" : "English"}
          </button>
        </div>
        <div className="lg:px-28 lg:my-5 my-3">
          <img src="/Images/loginLogo.svg" alt="logo" className="" />

          <h1 className="text-xl font-medium text-[#0C0830] py-1 mt-2">
            {t("login")}
          </h1>
          <p className="text-lg font-normal text-[#808080]  leading-[1.5rem] ">
            {t("loginInfo")}
          </p>

          <form
            className="flex flex-col gap-2 mt-3"
            onSubmit={formik.handleSubmit}
          >
            <div className="w-full flex flex-col">
              <label className="font-medium text-[#0C0830] ">
                {t("yourEmail")}
              </label>
              <input
                className="bg-[#F9FAFB] border-2 p-1 outline-0 rounded-md text-base text-[#808080] px-2"
                placeholder="name@gmail.com"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-start text-sm text-red-600 ">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>{" "}
            <div className="w-full flex flex-col">
              <label className="font-medium text-[#0C0830] ">
                {t("password")}
              </label>
              <input
                className="bg-[#F9FAFB] border-2 p-1 outline-0 rounded-md text-base text-[#808080] px-2"
                placeholder="password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.password && formik.errors.password ? (
                <div className="text-start text-sm text-red-600 ">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className=" "
                  style={{ accentColor: "#018B00" }}
                />
                <span className="ml-2 font-normal text-[#808080]">
                  {t("keepLogged")}
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="  rounded-md bg-primary py-3 text-white flex items-center justify-center"
            >
              {t("login")}
              <span className="ml-1">
                <FaArrowRight />
              </span>
            </button>
            <div className=" text-center ">
              <h4 className="mt-2">
                <span className="font-normal text-[#808080]">
                  {t("dontHaveAccount")}
                </span>
                <Link to="/">
                  <span className="font-semibold text-primary">
                    {t("signup")}
                  </span>
                </Link>
              </h4>
            </div>
            <div className="flex justify-center text-primary">
              <Link to="/useradmin">
                <h4 className="font-semibold">{t("forgotPass")}</h4>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div
        className="bg-cover h-full bg-no-repeat  relative lg:block hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute bottom-0 left-1/3 max-w-44">
          <Swiper
            // install Swiper modules
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="mb-5 text-[#BFC4DB]">{t("oneStop")}</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-5 text-[#BFC4DB]">{t("oneStop")}</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-5 text-[#BFC4DB]">{t("oneStop")}</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Login;
