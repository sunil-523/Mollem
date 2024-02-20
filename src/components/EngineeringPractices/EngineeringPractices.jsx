import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "./pdf.jpg";
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
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TbDownload } from "react-icons/tb";

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
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  sm:gap-10 gap-4 pb-5">
          {pdf.map((card, key) => (
            <div className="" key={key}>
              <Card sx={{}}>
                <div className="sm:mx-5 mx-3 sm:mt-5 mt-3">
                  <Link
                    target="_blank"
                    className=" bg-[#F2F6FA] relative flex justify-center items-center lg:py-10 py-5"
                  >
                    <div>
                      <img className="" src={image} alt="pdf-image" />
                    </div>
                    <div className=" absolute top-0 left-0">
                      <div>
                        <img src={photo2} alt="image" />
                      </div>
                    </div>
                  </Link>
                  <CardContent>
                    <div className="">
                      <div className=" flex justify-between items-center">
                        <div className="font-semibold sm:text-lg text-base">
                          {t("PDFtit")}
                        </div>

                        <div className="font-bold text-[#808080]">
                          {card.date}
                        </div>
                      </div>
                      <div className=" flex justify-between items-center pt-2">
                        <p className="font-bold text-[#808080]">2.3 MB</p>
                        <div className="flex flex-row gap-2 sm:text-xl text-lg text-[#0C0830] items-center font-bold cursor-pointer">
                          <p>{t("download")}</p>
                          <TbDownload />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default EngineeringPractices;
