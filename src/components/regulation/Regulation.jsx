import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import pdf_image from "../public/pdf.svg";
// import logo_png from "../public/logo-2222_1.png";

import pdf from "/Images/pdf.svg";
import pdflogo from "/Images/pdf-logo.png";
import { useTranslation } from "react-i18next";
import { TbDownload } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";
import EngineeringPractices from "../EngineeringPractices/EngineeringPractices";
import Templates from "../template/Templates";
// import pdf1 from "../src/EngineeringPractices/1.pdf";

export default function Regulation() {
  const { t } = useTranslation();

  const [regulation, setRegulation] = useState(true);
  const [ep, setEp] = useState(false);
  const [template, setTemplate] = useState(false);

  const regulationClick = () => {
    setRegulation(true);
    setEp(false);
    setTemplate(false);
  };
  const epClick = () => {
    setRegulation(false);
    setEp(true);
    setTemplate(false);
  };
  const tempClick = () => {
    setRegulation(false);
    setEp(false);
    setTemplate(true);
  };

  let cardData = [
    {
      title: "PDF title here",
      date: "12/01/2000",
      //   source: pdf1,
    },
    {
      title: "PDF title here",
      date: "12/02/2000",
    },
    {
      title: "PDF title here",
      date: "12/05/2000",
    },
    {
      title: "PDF title here",
      date: "12/07/2000",
    },
    {
      title: "PDF title here",
      date: "12/08/2000",
    },
    {
      title: "PDF title here",
      date: "12/08/2000",
    },
  ];
  return (
    <>
      <div className="w-full bg-background lg:px-8 md:px-5 px-3 pt-20 ">
        <div className="relative max-w-4xl mx-auto lg:text-3xl md:text-2xl text-xl  font-medium text-center leading-5 pb-1">
          {t("knowledgeHub")}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-gradient-to-r from-white via-green-600 to-transparent"></div>
        </div>

        <div className="flex flex-col  md:mt-12 sm:mt-8 mt-3">
          <div
            className="overflow-auto scrollbar-hidden"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex gap-3 min-w-[460px] ">
              <button
                className="bg-primary py-1 px-4 rounded-3xl font-medium   text-white focus:bg-[#F0F2FC] focus:text-primary "
                onClick={regulationClick}
              >
                {t("regulations")}
              </button>
              <button
                className=" bg-primary py-1 px-4 rounded-3xl font-medium   text-white focus:bg-[#F0F2FC] focus:text-primary"
                onClick={epClick}
              >
                {t("engineeringPractices")}
              </button>
              <button
                className="  bg-primary py-1 px-4 rounded-3xl font-medium   text-white focus:bg-[#F0F2FC] focus:text-primary"
                onClick={tempClick}
              >
                Templates
              </button>
            </div>
          </div>

          {regulation && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  sm:gap-10 gap-4  pt-10 pb-5">
              {cardData.map((card, key) => (
                <div className="" key={key}>
                  <Card sx={{}}>
                    <div className="sm:mx-5 mx-3 sm:mt-5 mt-3">
                      <Link
                        target="_blank"
                        className=" bg-[#F2F6FA] relative flex justify-center items-center lg:py-10 py-5"
                      >
                        <div>
                          <img className="" src={pdf} alt="pdf-image" />
                        </div>
                        <div className=" absolute top-0 left-0">
                          <div>
                            <img src={pdflogo} alt="image" />
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
          )}

          {ep && <EngineeringPractices />}
          {template && <Templates />}
        </div>
      </div>
    </>
  );
}
