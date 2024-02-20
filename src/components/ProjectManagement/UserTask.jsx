import React from "react";
import { useTranslation } from "react-i18next";
function UserTask() {
  const { t } = useTranslation();
  return (
    <div className="bg-background w-full h-screen lg:px-8 md:px-5 px-3 pt-20  ">
      <div className="flex flex-col justify-center items-center ">
        <p className="text-3xl mx-auto font-medium">{t("userTask")}</p>
        <div className=" inset-x-1/3 w-1/4 h-1 bg-gradient-to-r  from-white via-black to-transparent"></div>
        <div className="w-full mt-10 shadow-box  grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 border  px-3 py-5 bg-white rounded-3xl ">
          <div className="flex flex-col  ">
            <label htmlFor="" className="font-medium ml-1 ">
              {t("taskName")}
            </label>
            <input
              type="text"
              className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
              placeholder="Karnak"
            />
          </div>

          <div className="flex flex-col   ">
            <label htmlFor="" className="font-medium ml-1 ">
              {t("assignTo")}
            </label>
            <input
              type="text"
              className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
              placeholder="Desimine"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="font-medium ml-1 ">
              {t("startingDate")}
            </label>
            <input
              type="date"
              className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
              placeholder="Desimine"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="font-medium ml-1 ">
              {t("endingDate")}
            </label>
            <input
              type="date"
              className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
              placeholder="Desimine"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="font-medium ml-1 ">
              {t("priority")}
            </label>
            <input
              type="text"
              className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
              placeholder="Desimine"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="font-medium ml-1 ">
              {t("status")}
            </label>
            <input
              type="text"
              className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
              placeholder="Pending"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserTask;
