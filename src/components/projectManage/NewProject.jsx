import React, { useState } from "react";

import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NewProject() {
  const [projectName, setProjectName] = useState("Topiwala Plant");
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [submit, setSubmit] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // Navigate back one step in the history stack
    setSubmit(false);
  };

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
  };

  return (
    <div className="bg-[#F2F6FE] lg:px-8 md:px-5 px-3 w-full   sm:pt-20 pt-16">
      <div className="flex  justify-between   items-center">
        <FaArrowLeft
          onClick={goBack}
          size={24}
          className="text-primary cursor-pointer"
        />
        <div className="flex flex-col items-center">
          <p className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-medium">
            {t("projectName")}
          </p>
          {editing ? (
            <input
              type="text"
              value={newName}
              placeholder="Enter Name"
              onChange={handleInputChange}
              className="border border-black outline-none px-2 border-none bg-transparent text-center"
              onKeyPress={handleKeyPress}
            />
          ) : (
            <p
              className="lg:text-2xl md:text-xl text-lg font-medium"
              onClick={handleEditClick}
            >
              {projectName}
            </p>
          )}
        </div>
        <button
          onClick={() => {
            setProjectName(newName);
            setEditing(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <g clipPath="url(#clip0_574_597)">
              <path
                d="M40 20C40 31.0459 31.0459 40 20 40C8.95414 40 0 31.0459 0 20C0 8.95414 8.95414 0 20 0C31.0459 0 40 8.95414 40 20Z"
                fill="url(#paint0_linear_574_597)"
              />
              <path
                d="M28.8112 11.1888C28.0445 10.4223 27.0252 10 25.941 10C24.8568 10 23.8375 10.4223 23.0707 11.1888L11.9947 22.2652C11.8887 22.3711 11.8119 22.5026 11.7719 22.647L10.0318 28.8972C9.99041 29.046 9.98941 29.2031 10.0289 29.3525C10.0684 29.5018 10.1469 29.6379 10.2564 29.7468C10.3659 29.8558 10.5024 29.9336 10.652 29.9723C10.8015 30.011 10.9586 30.0091 11.1072 29.9669L17.3576 28.1916C17.5033 28.1501 17.6356 28.0714 17.7414 27.9632C17.8473 27.855 17.9231 27.721 17.9614 27.5745C17.9995 27.428 17.9988 27.2741 17.9593 27.1279C17.9197 26.9818 17.8427 26.8485 17.7358 26.7412L13.8629 22.8564L22.9088 13.8102L26.1878 17.0895L19.227 24.031C18.8871 24.3702 18.8862 24.9207 19.2254 25.2609C19.5647 25.601 20.1151 25.6017 20.4553 25.2625L28.8111 16.9293C29.5779 16.1626 30 15.1433 30 14.0591C30 12.9748 29.5777 11.9556 28.8112 11.1888ZM15.4607 26.9223L12.123 27.8705L13.0578 24.512L15.4607 26.9223ZM27.5823 15.6986L27.4193 15.8612L24.1384 12.5806L24.3006 12.4187C24.7388 11.9805 25.3212 11.7391 25.941 11.7391C26.5608 11.7391 27.1432 11.9805 27.5814 12.4187C28.0195 12.8569 28.2609 13.4393 28.2609 14.0591C28.2609 14.6787 28.0195 15.2613 27.5823 15.6986Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_574_597"
                x1="-20"
                y1="20"
                x2="75.5"
                y2="62"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#72FF72" />
                <stop offset="0.425" stopColor="#018B00" />
              </linearGradient>
              <clipPath id="clip0_574_597">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div className="max-w-md mx-auto">
        <div className="relative z-10 bg-white mt-8  flex flex-col items-center">
          <svg
            className="absolute z-30 -top-4 -right-4"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            onClick={() => setSelectedImage(null)}
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
              width="100"
              height="100"
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
                style={{ maxHeight: "100%" }}
              />
            </div>
          )}
          <p className="mt-4 mb-16">{t("addProjectImg")}</p>
        </div>
      </div>

      <div className="mt-12    bg-white p-3 rounded-xl">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-3">
          <div className="flex flex-col">
            <label htmlFor="" className="font-medium ml-1">
              {t("site")}
            </label>
            <input
              type="text"
              className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
              placeholder="Karnak"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="font-medium ml-1">
              {t("contractor")}
            </label>
            <input
              type="text"
              className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
              placeholder="Desimine"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="font-medium ml-1">
              {t("startingDate")}
            </label>
            <input
              type="date"
              className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="font-medium ml-1">
              {t("closeODate")}
            </label>
            <input
              type="date"
              className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="font-medium ml-1">
              {t("currentStage")}
            </label>
            <input
              type="text"
              className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="font-medium ml-1">
              {t("projMan")}
            </label>
            <input
              type="text"
              className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
            />
          </div>
          {submit && (
            <>
              <div className="flex flex-col ">
                <label htmlFor="" className="font-medium ml-1">
                  {t("cashFlow")}
                </label>
                <input
                  type="text"
                  className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="" className="font-medium ml-1">
                  {t("nextMile")}
                </label>
                <input
                  type="text"
                  className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="" className="font-medium ml-1">
                  {t("delay")}
                </label>
                <input
                  type="text"
                  className="border border-[#D1D5DB] rounded-full  px-2 py-1 focus:outline-none text-[#808080]"
                />
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col p-2 mt-4 rounded-xl bg-[#DADADA]">
          <p className="font-medium">{t("timeline")}</p>
          <input
            id="fileInput"
            onChange={handleFileChange}
            style={{ display: "none" }}
            type="file"
            name=""
          />
          <div>
            <button
              className="bg-primary text-white px-4 py-1 rounded-3xl mt-2 flex items-center justify-center "
              onClick={handleUploadClick}
            >
              {t("uploadDoc")}
              <svg
                className="pl-1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="28"
                viewBox="0 0 23 28"
                fill="none"
              >
                <g clipPath="url(#clip0_354_1201)">
                  <path
                    d="M3.66282 22.2272C4.31357 21.5734 4.31357 20.5135 3.66282 19.8597C3.01206 19.206 1.95698 19.206 1.30623 19.8597C0.655471 20.5135 0.655471 21.5734 1.30623 22.2272C1.95698 22.8809 3.01206 22.8809 3.66282 22.2272Z"
                    fill="#F15642"
                  />
                  <path
                    d="M2.48456 23.0372C1.39046 23.0372 0.5 22.1426 0.5 21.0435C0.5 19.9444 1.39046 19.0498 2.48456 19.0498C3.57866 19.0498 4.46912 19.9444 4.46912 21.0435C4.46912 22.1426 3.57866 23.0372 2.48456 23.0372ZM2.48456 19.6891C1.74096 19.6891 1.13639 20.2965 1.13639 21.0435C1.13639 21.7905 1.74096 22.3978 2.48456 22.3978C3.22815 22.3978 3.83273 21.7905 3.83273 21.0435C3.83273 20.2965 3.22815 19.6891 2.48456 19.6891Z"
                    fill="#231F20"
                  />
                  <path
                    d="M14.7145 0.319824H6.60642C4.39325 0.319824 2.59961 2.1222 2.59961 4.34505V23.6553C2.59961 25.8786 4.39374 27.6805 6.60642 27.6805H18.174C20.3872 27.6805 22.1808 25.8781 22.1808 23.6553V7.82046L14.7145 0.319824Z"
                    fill="white"
                  />
                  <path
                    d="M18.1739 28H6.60625C4.22126 28 2.28125 26.0511 2.28125 23.6551V4.34488C2.28125 1.94893 4.22126 0 6.60625 0H14.7144C14.7985 0 14.8798 0.0334411 14.9395 0.0934383L22.4054 7.59407C22.4651 7.65407 22.4984 7.73521 22.4984 7.82029V23.6556C22.4984 26.0516 20.5584 28.0005 18.1734 28.0005L18.1739 28ZM6.60625 0.639314C4.57225 0.639314 2.91764 2.30153 2.91764 4.34488V23.6551C2.91764 25.6985 4.57225 27.3607 6.60625 27.3607H18.1739C20.2079 27.3607 21.8625 25.6985 21.8625 23.6551V7.95258L14.5827 0.639314H6.60625Z"
                    fill="#231F20"
                  />
                  <path
                    d="M14.7148 0.319824L22.1812 7.82046H16.3073C15.4281 7.82046 14.7148 7.10442 14.7148 6.2207V0.319824Z"
                    fill="#DCDDDE"
                  />
                  <path
                    d="M22.182 8.14006C22.182 8.14006 22.1815 8.14006 22.181 8.14006H16.3071C15.2537 8.14006 14.3965 7.27895 14.3965 6.22064V0.319768C14.3965 0.190429 14.4738 0.0738774 14.5928 0.0242076C14.7117 -0.0249704 14.8483 0.00207752 14.9394 0.0935486L22.391 7.57943C22.4576 7.63795 22.4997 7.72401 22.4997 7.81991C22.4997 7.99646 22.3572 8.13957 22.1815 8.13957L22.182 8.14006ZM15.0329 1.09137V6.22064C15.0329 6.92634 15.6042 7.50074 16.3071 7.50074H21.4129L15.0329 1.09137Z"
                    fill="#231F20"
                  />
                  <path
                    d="M2.6369 11.3906C1.64707 11.3906 0.844727 12.1967 0.844727 13.191V20.7305H0.877525C1.03711 19.9004 1.76358 19.2729 2.6369 19.2729H20.6849V11.3906H2.6369Z"
                    fill="#F15642"
                  />
                  <path
                    d="M0.877361 21.05H0.844562C0.668821 21.05 0.526367 20.9069 0.526367 20.7303V13.1909C0.526367 12.0219 1.47312 11.0708 2.63673 11.0708H20.6848C20.8605 11.0708 21.0029 11.2139 21.0029 11.3905V19.2727C21.0029 19.4493 20.8605 19.5924 20.6848 19.5924H2.63673C1.93181 19.5924 1.32332 20.0964 1.18968 20.7908C1.1608 20.9413 1.0296 21.05 0.877361 21.05ZM2.63673 11.7101C1.82411 11.7101 1.16276 12.3745 1.16276 13.1909V19.5565C1.54655 19.1807 2.06986 18.9531 2.63673 18.9531H20.3666V11.7101H2.63673Z"
                    fill="#231F20"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_354_1201">
                    <rect
                      width="22"
                      height="28"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div className="flex flex-row flex-wrap gap-3 py-4">
            <Link className="flex items-center px-2 py-1 border border-[#7F7F7F] rounded-full bg-[#E5E7EB]">
              {t("noOfInvoices")}
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.9348 8.35625C13.9996 8.1861 14.0166 7.99886 13.9835 7.81823C13.9504 7.63761 13.8687 7.4717 13.7487 7.34151L10.32 3.6177C10.2409 3.52879 10.1463 3.45787 10.0417 3.40908C9.93713 3.36029 9.82465 3.33461 9.71083 3.33353C9.59701 3.33246 9.48414 3.35601 9.37879 3.40282C9.27344 3.44963 9.17774 3.51876 9.09725 3.60617C9.01677 3.69358 8.95312 3.79752 8.91002 3.91193C8.86692 4.02634 8.84523 4.14893 8.84622 4.27254C8.84721 4.39615 8.87085 4.51831 8.91578 4.63189C8.9607 4.74547 9.02601 4.84819 9.10788 4.93407L11.0743 7.06968H2.8572C2.62985 7.06968 2.41182 7.16776 2.25107 7.34235C2.09031 7.51693 2 7.75372 2 8.00063C2 8.24753 2.09031 8.48432 2.25107 8.65891C2.41182 8.8335 2.62985 8.93158 2.8572 8.93158H11.0743L9.10874 11.0663C9.02686 11.1521 8.96156 11.2549 8.91664 11.3684C8.87171 11.482 8.84806 11.6042 8.84707 11.7278C8.84609 11.8514 8.86777 11.974 8.91088 12.0884C8.95398 12.2028 9.01763 12.3068 9.09811 12.3942C9.1786 12.4816 9.2743 12.5507 9.37965 12.5975C9.485 12.6443 9.59787 12.6679 9.71169 12.6668C9.82551 12.6657 9.93799 12.64 10.0426 12.5912C10.1472 12.5425 10.2417 12.4715 10.3208 12.3826L13.7496 8.65881C13.829 8.57214 13.8919 8.46933 13.9348 8.35625Z"
                  fill="#0E0E0E"
                />
              </svg>
            </Link>

            <Link className="flex items-center px-2 py-1 border border-[#7F7F7F] rounded-full bg-[#E5E7EB]">
              {t("projStatus")}
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.9348 8.35625C13.9996 8.1861 14.0166 7.99886 13.9835 7.81823C13.9504 7.63761 13.8687 7.4717 13.7487 7.34151L10.32 3.6177C10.2409 3.52879 10.1463 3.45787 10.0417 3.40908C9.93713 3.36029 9.82465 3.33461 9.71083 3.33353C9.59701 3.33246 9.48414 3.35601 9.37879 3.40282C9.27344 3.44963 9.17774 3.51876 9.09725 3.60617C9.01677 3.69358 8.95312 3.79752 8.91002 3.91193C8.86692 4.02634 8.84523 4.14893 8.84622 4.27254C8.84721 4.39615 8.87085 4.51831 8.91578 4.63189C8.9607 4.74547 9.02601 4.84819 9.10788 4.93407L11.0743 7.06968H2.8572C2.62985 7.06968 2.41182 7.16776 2.25107 7.34235C2.09031 7.51693 2 7.75372 2 8.00063C2 8.24753 2.09031 8.48432 2.25107 8.65891C2.41182 8.8335 2.62985 8.93158 2.8572 8.93158H11.0743L9.10874 11.0663C9.02686 11.1521 8.96156 11.2549 8.91664 11.3684C8.87171 11.482 8.84806 11.6042 8.84707 11.7278C8.84609 11.8514 8.86777 11.974 8.91088 12.0884C8.95398 12.2028 9.01763 12.3068 9.09811 12.3942C9.1786 12.4816 9.2743 12.5507 9.37965 12.5975C9.485 12.6443 9.59787 12.6679 9.71169 12.6668C9.82551 12.6657 9.93799 12.64 10.0426 12.5912C10.1472 12.5425 10.2417 12.4715 10.3208 12.3826L13.7496 8.65881C13.829 8.57214 13.8919 8.46933 13.9348 8.35625Z"
                  fill="#0E0E0E"
                />
              </svg>
            </Link>

            <Link className="flex items-center px-2 py-1 border border-[#7F7F7F] rounded-full bg-[#E5E7EB]">
              {t("view")}
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.9348 8.35625C13.9996 8.1861 14.0166 7.99886 13.9835 7.81823C13.9504 7.63761 13.8687 7.4717 13.7487 7.34151L10.32 3.6177C10.2409 3.52879 10.1463 3.45787 10.0417 3.40908C9.93713 3.36029 9.82465 3.33461 9.71083 3.33353C9.59701 3.33246 9.48414 3.35601 9.37879 3.40282C9.27344 3.44963 9.17774 3.51876 9.09725 3.60617C9.01677 3.69358 8.95312 3.79752 8.91002 3.91193C8.86692 4.02634 8.84523 4.14893 8.84622 4.27254C8.84721 4.39615 8.87085 4.51831 8.91578 4.63189C8.9607 4.74547 9.02601 4.84819 9.10788 4.93407L11.0743 7.06968H2.8572C2.62985 7.06968 2.41182 7.16776 2.25107 7.34235C2.09031 7.51693 2 7.75372 2 8.00063C2 8.24753 2.09031 8.48432 2.25107 8.65891C2.41182 8.8335 2.62985 8.93158 2.8572 8.93158H11.0743L9.10874 11.0663C9.02686 11.1521 8.96156 11.2549 8.91664 11.3684C8.87171 11.482 8.84806 11.6042 8.84707 11.7278C8.84609 11.8514 8.86777 11.974 8.91088 12.0884C8.95398 12.2028 9.01763 12.3068 9.09811 12.3942C9.1786 12.4816 9.2743 12.5507 9.37965 12.5975C9.485 12.6443 9.59787 12.6679 9.71169 12.6668C9.82551 12.6657 9.93799 12.64 10.0426 12.5912C10.1472 12.5425 10.2417 12.4715 10.3208 12.3826L13.7496 8.65881C13.829 8.57214 13.8919 8.46933 13.9348 8.35625Z"
                  fill="#0E0E0E"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {!submit && (
        <div className="flex justify-end ">
          <button
            className="bg-primary sm:my-6 my-3 text-white px-4 py-1 rounded-3xl flex items-center"
            onClick={() => setSubmit(true)}
          >
            {t("submit")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13.9348 8.35625C13.9996 8.1861 14.0166 7.99886 13.9835 7.81823C13.9504 7.63761 13.8687 7.4717 13.7487 7.34151L10.32 3.6177C10.2409 3.52879 10.1463 3.45787 10.0417 3.40908C9.93713 3.36029 9.82465 3.33461 9.71083 3.33353C9.59701 3.33246 9.48414 3.35601 9.37879 3.40282C9.27344 3.44963 9.17774 3.51876 9.09725 3.60617C9.01677 3.69358 8.95312 3.79752 8.91002 3.91193C8.86692 4.02634 8.84523 4.14893 8.84622 4.27254C8.84721 4.39615 8.87085 4.51831 8.91578 4.63189C8.9607 4.74547 9.02601 4.84819 9.10788 4.93407L11.0743 7.06968H2.8572C2.62985 7.06968 2.41182 7.16776 2.25107 7.34235C2.09031 7.51693 2 7.75372 2 8.00063C2 8.24753 2.09031 8.48432 2.25107 8.65891C2.41182 8.8335 2.62985 8.93158 2.8572 8.93158H11.0743L9.10874 11.0663C9.02686 11.1521 8.96156 11.2549 8.91664 11.3684C8.87171 11.482 8.84806 11.6042 8.84707 11.7278C8.84609 11.8514 8.86777 11.974 8.91088 12.0884C8.95398 12.2028 9.01763 12.3068 9.09811 12.3942C9.1786 12.4816 9.2743 12.5507 9.37965 12.5975C9.485 12.6443 9.59787 12.6679 9.71169 12.6668C9.82551 12.6657 9.93799 12.64 10.0426 12.5912C10.1472 12.5425 10.2417 12.4715 10.3208 12.3826L13.7496 8.65881C13.829 8.57214 13.8919 8.46933 13.9348 8.35625Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default NewProject;
