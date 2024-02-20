import React, { useState } from "react";
// import form from "./Group.jpg";
import { useTranslation } from "react-i18next";

function Templates() {
  const [report, setReport] = useState("true");
  const [mgReport, setMgReport] = useState("false");

  const { t } = useTranslation();

  const prReport = () => {
    setReport(true);
    setMgReport(!mgReport);
  };
  const manageReport = () => {
    setMgReport(true);
    setReport(false);
  };

  return (
    <div className="bg-[#F2F6FE] lg:px-8 md:px-5 px-3 w-full md:h-screen h-full sm:pt-20 pt-16">
      <div className="relative max-w-4xl mx-auto lg:text-3xl md:text-2xl text-xl  font-medium text-center leading-5 pb-1">
        {t("templatesHeading")}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-gradient-to-r from-white via-green-600 to-transparent"></div>
      </div>

      <div className="flex flex-col  md:mt-12 sm:mt-8 mt-3">
        <div
          className="overflow-auto scrollbar-hidden"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-3 min-w-96 ">
            <button
              className="bg-primary py-1 px-4 rounded-3xl font-medium   text-white focus:bg-[#F0F2FC] focus:text-primary "
              onClick={prReport}
            >
              {t("periodicRep")}
            </button>
            <button
              className=" bg-primary py-1 px-4 rounded-3xl font-medium   text-white focus:bg-[#F0F2FC] focus:text-primary"
              onClick={manageReport}
            >
              {t("PMPlan")}
            </button>
          </div>
        </div>
        {report && <ProjectPlan t={t} />}
        {mgReport && !report && <PeriodicReport t={t} />}
      </div>
    </div>
  );
}

export default Templates;

const ProjectPlan = ({ t }) => {
  return (
    <>
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 sm:gap-3 gap-2 mt-4">
        <div className="flex flex-col  sm:mt-4 mt-0 ">
          <h2 className="font-semibold text-sm">{t("cretingRiskLog")}</h2>
          <div className=" bg-white   sm:p-4 p-2 mt-1 rounded-2xl box-shadow">
            <p>{t("loremText")}</p>
          </div>
        </div>
        <div className="flex flex-col  sm:mt-4 mt-0">
          <h2 className="font-semibold">{t("creatingStakeLog")}</h2>
          <div className=" bg-white   sm:p-4 p-2 mt-1 rounded-2xl box-shadow">
            <p>{t("loremText")}</p>
          </div>
        </div>
        <div className="flex flex-col  sm:mt-4 mt-0">
          <h2 className="font-semibold">{t("creatingDisputesLog")}</h2>
          <div className=" bg-white   sm:p-4 p-2 mt-1 rounded-2xl box-shadow">
            <p>{t("loremText")}</p>
          </div>
        </div>
        <div className="flex flex-col  sm:mt-4 mt-0">
          <h2 className="font-semibold">{t("periodicRep")}</h2>
          <div className=" bg-white   sm:p-4 p-2 mt-1 rounded-2xl box-shadow">
            <p>{t("loremText")}</p>
          </div>
        </div>

        <div className="flex flex-col  sm:mt-4 mt-0 box-shadow bg-white px-2 rounded-2xl">
          <p className="font-semibold text-xl ">{t("temp&Forms")}</p>
          <div className=" relative bg-transparent mt-4 flex justify-center items-center">
            <img src="/Images/img/Group.jpg" className="" alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" absolute bg-transparent -top-3 "
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clip-path="url(#clip0_343_864)">
                <path
                  d="M15 0C23.2713 0 30 6.72867 30 15C30 23.2713 23.2713 30 15 30C6.72867 30 0 23.2713 0 15C0 6.72867 6.72867 0 15 0Z"
                  fill="#F15642"
                />
                <path
                  d="M8.43746 16.2498H13.75V21.5624C13.75 22.2525 14.3099 22.8123 15 22.8123C15.69 22.8123 16.2499 22.2525 16.2499 21.5624V16.2498H21.5625C22.2525 16.2498 22.8124 15.69 22.8124 14.9999C22.8124 14.3099 22.2525 13.75 21.5625 13.75H16.2499V8.43742C16.2499 7.74736 15.69 7.1875 15 7.1875C14.3099 7.1875 13.75 7.74736 13.75 8.43742V13.75H8.43746C7.7474 13.75 7.18753 14.3099 7.18753 14.9999C7.18753 15.69 7.7474 16.2498 8.43746 16.2498Z"
                  fill="#FAFAFA"
                />
              </g>
              <defs>
                <clipPath id="clip0_343_864">
                  <rect
                    width="30"
                    height="30"
                    fill="white"
                    transform="matrix(-1 0 0 1 30 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3 flex-wrap mt-12">
        <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
          {t("withdrawlProcedures")}
        </button>
        <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
          {t("suspensionProce")}
        </button>
        <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
          {t("changeReqProcedure")}
        </button>
        <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
          {t("extensionProc")}
        </button>
        <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
          {t("voilationProc")}
        </button>
        <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
          {" "}
          {t("warningProc")}
        </button>
        <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
          {" "}
          {t("payingInvoices")}
        </button>
      </div>
    </>
  );
};
const PeriodicReport = ({ t }) => {
  return (
    <>
      <div className="grid grid-cols-5 gap-3 mt-4">
        <div className="flex flex-col  mt-4 ">
          <h2 className="font-semibold text-sm">{t("cretingRiskLog")}</h2>
          <div className=" bg-white   p-4 mt-1 rounded-2xl box-shadow">
            <p>{t("loremText")}qqq</p>
          </div>
        </div>
        <div className="flex flex-col  mt-4">
          <h2 className="font-semibold">{t("creatingStakeLog")}</h2>
          <div className=" bg-white   p-4 mt-1 rounded-2xl box-shadow">
            <p>{t("loremText")}</p>
          </div>
        </div>
        <div className="flex flex-col  mt-4">
          <h2 className="font-semibold">{t("creatingDisputesLog")}</h2>
          <div className=" bg-white   p-4 mt-1 rounded-2xl box-shadow">
            <p>{t("loremText")}</p>
          </div>
        </div>
        <div className="flex flex-col  mt-4">
          <h2 className="font-semibold">{t("periodicRep")}</h2>
          <div className=" bg-white   p-4 mt-1 rounded-2xl box-shadow">
            <p>{t("loremText")}</p>
          </div>
        </div>

        <div className="flex flex-col  mt-4 box-shadow bg-white px-2 rounded-2xl">
          <p className="font-semibold text-xl ">{t("temp&Forms")}</p>
          <div className=" relative bg-transparent mt-4 flex justify-center items-center">
            <img src="/Images/img/Group.jpg" className="" alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" absolute bg-transparent -top-3 "
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clip-path="url(#clip0_343_864)">
                <path
                  d="M15 0C23.2713 0 30 6.72867 30 15C30 23.2713 23.2713 30 15 30C6.72867 30 0 23.2713 0 15C0 6.72867 6.72867 0 15 0Z"
                  fill="#F15642"
                />
                <path
                  d="M8.43746 16.2498H13.75V21.5624C13.75 22.2525 14.3099 22.8123 15 22.8123C15.69 22.8123 16.2499 22.2525 16.2499 21.5624V16.2498H21.5625C22.2525 16.2498 22.8124 15.69 22.8124 14.9999C22.8124 14.3099 22.2525 13.75 21.5625 13.75H16.2499V8.43742C16.2499 7.74736 15.69 7.1875 15 7.1875C14.3099 7.1875 13.75 7.74736 13.75 8.43742V13.75H8.43746C7.7474 13.75 7.18753 14.3099 7.18753 14.9999C7.18753 15.69 7.7474 16.2498 8.43746 16.2498Z"
                  fill="#FAFAFA"
                />
              </g>
              <defs>
                <clipPath id="clip0_343_864">
                  <rect
                    width="30"
                    height="30"
                    fill="white"
                    transform="matrix(-1 0 0 1 30 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3 flex-wrap mt-12">
        <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
          {t("withdrawlProcedures")}
        </button>
        <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
          {t("suspensionProce")}
        </button>
        <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
          {t("changeReqProcedure")}
        </button>
        <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
          {t("extensionProc")}
        </button>
        <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
          {t("voilationProc")}
        </button>
        <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
          {" "}
          {t("warningProc")}
        </button>
        <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
          {" "}
          {t("payingInvoices")}
        </button>
      </div>
    </>
  );
};
