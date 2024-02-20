import React from "react";
import "./phase.css";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

function InitialPhase() {

  const [projectName, setProjectName] = useState("Topiwala Plant");
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useTranslation();
  const handleEditClick = () => {
    setNewName(projectName);
    setEditing(true);
  };

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setProjectName(newName);
      setEditing(false);
    }
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
    console.log(selectedImage);
  };
  return (
    <div>
      <div className="pt-14">
        <div className="bg-[#F2F6FE] px-8 w-full h-full lg:pt-4 sm:pt-2">
          <div className="relative">
            <div className="max-w-4xl mx-auto text-3xl font-medium text-center pb-1">
              {t('initPhases')}
            </div>
            <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1 bg-gradient-to-r from-white via-green-600 to-transparent"></div>
          </div>

          <div className="max-w-sm mx-auto">
            <div className="relative z-10 bg-white mt-8  flex flex-col items-center">
              <svg
                className="absolute z-30 -top-4 -right-4"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <circle cx="17.5" cy="17.5" r="17.5" fill="#ABFFAA" />
                <path
                  d="M23.2861 10L25.1281 11.842L12.8421 24.128L11.0002 22.286L23.2861 10Z"
                  fill="#018B00"
                />
                <path
                  d="M12.8447 10L25.1307 22.286L23.2887 24.128L11.0028 11.842L12.8447 10Z"
                  fill="#018B00"
                />
              </svg>
              <input
                id="fileInput"
                onChange={handleFileChange}
                style={{ display: "none" }}
                type="file"
                name=""
              />
              <button className="pt-24 px-60" onClick={handleUploadClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="107"
                  height="107"
                  viewBox="0 0 107 107"
                  fill="none"
                >
                  <g clipPath="url(#clip0_576_605)">
                    <path
                      d="M107 0H98.6406V3.34375H103.656V10.0312H107V0ZM90.2812 0H81.9219V3.34375H90.2812V0ZM73.5625 0H65.2031V3.34375H73.5625V0ZM56.8438 0H48.4844V3.34375H56.8438V0ZM40.125 0H31.7656V3.34375H40.125V0ZM23.4062 0H15.0469V3.34375H23.4062V0ZM6.6875 0H0V3.34375H6.6875V0ZM3.34375 10.0312H0V18.3906H3.34375V10.0312ZM3.34375 26.75H0V35.1094H3.34375V26.75ZM3.34375 43.4688H0V51.8281H3.34375V43.4688ZM3.34375 60.1875H0V68.5469H3.34375V60.1875ZM3.34375 76.9062H0V85.2656H3.34375V76.9062ZM3.34375 93.625H0V101.984H3.34375V93.625ZM11.7031 103.656H3.34375V107H11.7031V103.656ZM28.4219 103.656H20.0625V107H28.4219V103.656ZM45.1406 103.656H36.7812V107H45.1406V103.656ZM61.8594 103.656H53.5V107H61.8594V103.656ZM78.5781 103.656H70.2188V107H78.5781V103.656ZM95.2969 103.656H86.9375V107H95.2969V103.656ZM107 101.984H103.656V107H107V101.984ZM107 85.2656H103.656V93.625H107V85.2656ZM107 68.5469H103.656V76.9062H107V68.5469ZM107 51.8281H103.656V60.1875H107V51.8281ZM107 35.1094H103.656V43.4688H107V35.1094ZM107 18.3906H103.656V26.75H107V18.3906Z"
                      fill="#ABFFAA"
                    />
                    <path
                      d="M50.9922 36.7764H56.0078V70.2306H50.9922V36.7764Z"
                      fill="#018B00"
                    />
                    <path
                      d="M36.7764 50.9922H70.2306V56.0078H36.7764V50.9922Z"
                      fill="#018B00"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_576_605">
                      <rect width="107" height="107" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              {selectedImage && (
                <div className=" absolute z-20" style={{ zIndex: "20" }}>
                  <img
                    src={selectedImage}
                    alt="Selected"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
              <p className="mt-4 mb-16">
                {t('addProjectImg')}
              </p>
            </div>
          </div>

          <div>
            <h2 className="py-3 text-2xl">More Info</h2>
            <div className="  grid grid-cols-5 gap-3 ">
              <div className="flex flex-col font-medium">
                <label htmlFor="" className="font-medium ">
                  {t('currentPhase')}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
                />
              </div>

              <div className="flex flex-col font-medium">
                <label htmlFor="" className=" font-medium">
                  {t('startingDate')}
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  placeholder="21/07/2023"
                  className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
                />
              </div>
              <div className="flex flex-col font-medium">
                <label htmlFor="" className=" font-medium">
                  {t('nextMile')}
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
                />
              </div>
              <div className="flex flex-col font-medium">
                <label htmlFor="" className=" font-medium">
                  {t('completion%')}
                </label>
                <input
                  type="number"
                  name=""
                  id=""
                  className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
                />
              </div>
              <div className="flex flex-col font-medium">
                <label htmlFor="" className=" font-medium">
                  {t('cashFlow')}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
                />
              </div>
              <div className="flex flex-col font-medium">
                <label htmlFor="" className=" font-medium">
                  {t('delayDays')}
                </label>
                <input
                  type="number"
                  name=""
                  id=""
                  className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="pt-2">
            <div className="flex items-center">
              <h2 className="py-3 text-2xl ">{t('activity')}</h2>
              <span className="pl-2">
                <img src="Images/Group.png" alt="image" />
              </span>
            </div>

            <div className="flex justify-between ">
              <div className="flex gap-3">
                <button className="bg-primary py-1 px-4 rounded-3xl font-medium 1  text-white focus:bg-[#F0F2FC] focus:text-primary">
                  {t('billOf')}
                </button>
                <button className=" bg-primary py-1 px-4 rounded-3xl font-medium 2  text-white focus:bg-[#F0F2FC] focus:text-primary">
                  {t('evalCri')}
                </button>
                <button className=" bg-primary py-1 px-4 rounded-3xl font-medium  3 text-white focus:bg-[#F0F2FC] focus:text-primary">
                  {t('timeFrame')}
                </button>
              </div>
              <button className=" bg-primary py-1 px-4 rounded-3xl font-medium   text-white focus:bg-[#F0F2FC] focus:text-primary flex items-center">
                {t('sendNote')}
                <img
                  src="Images/Isolation_Mode.svg"
                  alt="img"
                  className="ps-2"
                />
              </button>
            </div>
          </div>

          <div className="pt-2">
            <div className="flex items-center">
              <h2 className="py-3 text-2xl ">{t('initDoc')}</h2>
              <span className="pl-2">
                <img src="Images/Group.png" alt="image" />
              </span>
            </div>
            <div className="flex gap-3">
              <button className="bg-primary py-1 px-4 rounded-3xl font-medium 1  text-white focus:bg-[#F0F2FC] focus:text-primary">
                {t('projChar')}
              </button>
              <button className=" bg-primary py-1 px-4 rounded-3xl font-medium 2  text-white focus:bg-[#F0F2FC] focus:text-primary">
                {t('projHand')}
              </button>
              <button className=" bg-primary py-1 px-4 rounded-3xl font-medium  3 text-white focus:bg-[#F0F2FC] focus:text-primary">
                {t('projPlan')}
              </button>
              <button className=" bg-primary py-1 px-4 rounded-3xl font-medium  3 text-white focus:bg-[#F0F2FC] focus:text-primary">
                {t('projRep')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InitialPhase;
