import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "./pdf.jpg";
import "./ep.css";
import { AiOutlineDownload } from "react-icons/ai";
import pdf1 from "./1.pdf";
import pdf2 from "./2.pdf";
import pdf3 from "./3.pdf";
import pdf4 from "./4.pdf";
import pdf5 from "./5.pdf";
import pdf6 from "./6.pdf";
import photo2 from "./photo2.jpeg";
import { useLanguage } from "../../context/LanguageContext";
import { useTranslation } from "react-i18next";
import Demo from "../demo";
function EngineeringPractices() {
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  const pdf = [
    {
      id: 1,
      name: "PDF Title here",
      date: "31 sept. 2023",
      size: "2.3MB",
      source: pdf1,
    },
    {
      id: 2,
      name: "PDF Title here",
      date: "31 sept. 2023",
      size: "2.3MB",
      source: pdf2,
    },
    {
      id: 3,
      name: "PDF Title here",
      date: "31 sept. 2023",
      size: "2.3MB",
      source: pdf3,
    },
    {
      id: 4,
      name: "PDF Title here",
      date: "31 sept. 2023",
      size: "2.3MB",
      source: pdf4,
    },
    {
      id: 5,
      name: "PDF Title here",
      date: "31 sept. 2023",
      size: "2.3MB",
      source: pdf5,
    },
    {
      id: 6,
      name: "PDF Title here",
      date: "31 sept. 2023",
      size: "2.3MB",
      source: pdf6,
    },
  ];

  return (
    <>
      <div className="bg-background pt-20 w-full lg:px-8 md:px-5 px-3">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  sm:gap-10 gap-4">
          {pdf.map((item, index) => (
            <div key={index} className="flex flex-col pdfBox px-4 m-4">
              <div className="w-[100%] items-center relative flex justify-center h-[200px]">
                <Link href={item.source} target="_blank">
                  <img
                    src={photo2}
                    className="absolute z-100 w-[40px] h-[40px] top-2 left-0"
                    alt=""
                  />
                  <img src={image} alt="" />
                </Link>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <p>{t("PDFtit")}</p>
                <p className="dateColor"> {item.date} </p>
              </div>
              <div className="flex flex-row justify-between mb-4">
                <p className="dateColor"> {item.size} </p>
                <Link
                  className="flex flex-row items-center"
                  href={item.source}
                  target="_blank"
                >
                  {t("download")} <AiOutlineDownload size={24} />{" "}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Demo />
    </>
  );
}

export default EngineeringPractices;
