import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
function TaskCreate() {
  const { t } = useTranslation();

  const [textareaValue, setTextareaValue] = useState("");

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <div className="bg-background w-full h-screen lg:px-8 md:px-5 px-3 pt-20  ">
      <div className="flex flex-col justify-center items-center">
        <p className="lg:text-3xl md:text-2xl sm:text-xl text-lg mx-auto font-medium">
          {t("taskCreate")}
        </p>
        <div className=" inset-x-1/3 w-1/4 h-1 bg-gradient-to-r  from-white via-black to-transparent"></div>
      </div>

      <div className="w-full mt-10 shadow-box border  px-3 py-5 bg-white rounded-3xl">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
          <div className="flex flex-col ">
            <label htmlFor="" className="font-medium ml-1 ">
              {t("taskName")}
            </label>
            <input
              type="text"
              className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
              placeholder="Karnak"
            />
          </div>

          <div className="flex flex-col  ">
            <label htmlFor="" className="font-medium ml-1 ">
              {t("assignTo")}
            </label>
            <input
              type="text"
              className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
              placeholder="Desimine"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-medium ml-1 ">
              {t("startingDate")}
            </label>
            <input
              type="date"
              className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
              placeholder="Desimine"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-medium ml-1 ">
              {t("endingDate")}
            </label>
            <input
              type="date"
              className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
              placeholder="Desimine"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-medium ml-1 ">
              {t("priority")}
            </label>
            <input
              type="text"
              className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
              placeholder="Desimine"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-medium ml-1 ">
              {t("status")}
            </label>
            <input
              type="text"
              className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
              placeholder="Pending"
            />
          </div>

          <div className="flex flex-col lg:col-span-3 md:col-span-2 col-span-1 ">
            <label htmlFor="" className="font-medium ml-1 ">
              {t("description")}
            </label>
            <textarea
              className="border border-[#D1D5DB] rounded-3xl px-2 py-1 focus:outline-none text-[#808080]"
              placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              value={textareaValue}
              onChange={handleTextareaChange}
              style={{ resize: "none" }}
            ></textarea>
          </div>
        </div>
        <button className="bg-primary py-1 mt-8 ml-4 px-4 rounded-3xl font-medium text-white">
          {t("createTask")}
        </button>
      </div>
    </div>
  );
}

export default TaskCreate;
