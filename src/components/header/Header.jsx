import React from "react";
import "./Header.css";
import { useState, useEffect } from "react";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useTranslation } from "react-i18next";

function Header() {
  const [hamburgerSize, setHamburgerSize] = useState(30); // Initial size
  const { i18n } = useTranslation();
  const [checked, setChecked] = useState(i18n.language === "ar");

  const location = useLocation();
  const admin =
    location.pathname == "/useradmin" || location.pathname == "/topiwala"
      ? false
      : true;

  const [isDrawerOpen, setDrawerOpen] = useState(admin);

  const handleHamburgerClick = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleChange = () => {
    const newLanguage = checked ? "en" : "ar";
    i18n.changeLanguage(newLanguage);
    setChecked(!checked);
  };

  return location.pathname == "/" || location.pathname == "/login" ? (
    <></>
  ) : (
    <div>
      <div className="w-full bg-primary sm:h-14 h-12 flex justify-between fixed md:px-8 sm:px-5 px-3 py-2  z-[3000]">
        <div className="flex flex-row sm:gap-3 gap-2 items-center justify-center">
          <button className="sm:w-8 w-7  sm:h-8 h-7  rounded-full">
            <img src="/Images/navbar/Avatar.png" />
          </button>
          <button className="sm:w-8 w-7 sm:h-8 h-7  bg-[#ffffff] bg-opacity-20 drop-shadow-lg rounded-full flex justify-center items-center">
            <IoIosNotifications color="white" />
          </button>
        </div>

        <div className="flex justify-center items-center sm:gap-6 gap-3">
          {/* <Switch color="default" checked={checked} inputProps={{ 'aria-label': 'toggle language' }} onChange={handleChange} /> */}
          <button
            className="text-white"
            checked={checked}
            onClick={handleChange}
          >
            {!checked ? "عربي" : "English"}
          </button>
          <div>
            <div className="relative md:block hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CiSearch color="white" size={20} />
              </div>
              <input
                type="search"
                className="block w-full p-1 pl-10 border-0 rounded-xl ring-0 outline-none bg-[#f9fafb] bg-opacity-20 text-white placeholder-white focus:placeholder-opacity-75"
                placeholder="Search"
                required
              />
            </div>

            <div className="relative md:hidden block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
                <CiSearch color="white" size={20} />
              </div>
              <input
                type="search"
                className=" sm:w-[32px] sm:h-[32px] w-[28px] h-[28px]  p-1  border-0 rounded-full ring-0 outline-none bg-[#f9fafb] bg-opacity-20 text-white placeholder-white "
                required
              />
            </div>
          </div>

          <div>
            <RxHamburgerMenu
              color="white"
              size={30}
              onClick={handleHamburgerClick}
            />
          </div>

          <div className="lg:pl-8 sm:pl-3 ">
            <Link to="/useradmin" className="lg:block hidden">
              <img src="/Images/navbar/Logo.png" alt="logo" />
            </Link>
            <Link to="/useradmin" className="lg:hidden block">
              <img src="/Images/logo-sm.svg" alt="logo" className="h-[30px]" />
            </Link>
          </div>
        </div>
      </div>

      <SwipeableDrawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
      >
        <div className="sm:w-[300px] w-[280px] pt-16 px-4">
          <NestedDrawer />
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default Header;

const NestedDrawer = () => {
  const [isProjectOpen, setProjectOpen] = useState(false);
  const [isHubOpen, setHubOpen] = useState(false);
  const { t } = useTranslation();

  const toggleProject = () => {
    setProjectOpen(!isProjectOpen);
    setHubOpen(false);
  };

  const toggleHub = () => {
    setHubOpen(!isHubOpen);
    setProjectOpen(false);
  };
  return (
    <div>
      <div>
        <ListItemButton>
          <div className="flex items-center justify-end w-full">
            <Link to="/task">
              <div className="flex gap-3">
                <ListItemText primary={t("taskManagement")} />

                <ListItemIcon className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6.82969 13.4486C6.5749 13.8898 6.32021 14.3306 6.06563 14.7708C5.93563 14.9958 5.68062 15.0367 5.46031 14.9227C5.14781 14.7277 5.28781 14.3227 5.31406 14.3377L6.0775 13.0142C6.13623 12.9167 6.23088 12.8462 6.34108 12.8178C6.45128 12.7893 6.56824 12.8053 6.6668 12.8622C6.76535 12.9191 6.83763 13.0125 6.8681 13.1221C6.89856 13.2318 6.88477 13.349 6.82969 13.4486ZM7.92531 13.5808C7.82595 13.5306 7.7112 13.5202 7.60443 13.5517C7.49766 13.5831 7.40689 13.6541 7.35063 13.7502C7.16719 14.0677 6.96062 14.4767 6.76156 14.7717C6.65406 14.9592 6.73438 15.2205 6.91187 15.3342C7.13812 15.4439 7.38688 15.4242 7.52344 15.1873C7.70625 14.8705 7.91437 14.4583 8.11312 14.1645C8.23344 13.9302 8.1275 13.7189 7.92531 13.5808ZM4.125 11.3852C4.02496 11.3283 3.90655 11.3131 3.79541 11.343C3.68428 11.3728 3.58937 11.4452 3.53125 11.5445L2.57312 13.2039C2.52528 13.2999 2.51415 13.41 2.54184 13.5136C2.56952 13.6172 2.6341 13.7071 2.72344 13.7664C2.94969 13.8758 3.19844 13.8564 3.33531 13.6192L4.28125 11.9789C4.33837 11.8792 4.354 11.7611 4.32477 11.65C4.29553 11.5389 4.22378 11.4438 4.125 11.3852ZM9.72906 14.5627L8.76281 14.0042C8.757 14.1735 8.70956 14.3388 8.62469 14.4855L8.30781 15.0345C8.58906 15.1973 8.91187 15.3658 9.18281 15.5398C9.31199 15.6071 9.46228 15.6213 9.60181 15.5796C9.74133 15.5379 9.85911 15.4435 9.93017 15.3163C10.0012 15.1892 10.02 15.0394 9.98243 14.8987C9.94488 14.758 9.854 14.6375 9.72906 14.5627ZM13.3519 5.11766L11.8438 5.98797L13.9922 9.70891L15.5 8.83859L13.3519 5.11766ZM2.64812 5.65641L0.5 9.37734L2.0075 10.248L4.15625 6.52703L2.64812 5.65641ZM5.39813 12.1198C5.29807 12.0635 5.17993 12.0485 5.06898 12.0781C4.95802 12.1077 4.86305 12.1796 4.80438 12.2783L3.94906 13.7602C3.91894 13.8096 3.89899 13.8645 3.89039 13.9217C3.88179 13.9789 3.8847 14.0373 3.89897 14.0934C3.91324 14.1495 3.93857 14.2021 3.97347 14.2483C4.00838 14.2944 4.05215 14.3332 4.10223 14.3622C4.1523 14.3912 4.20766 14.4099 4.26507 14.4172C4.32247 14.4245 4.38076 14.4203 4.4365 14.4047C4.49224 14.3892 4.54432 14.3627 4.58968 14.3268C4.63504 14.2908 4.67276 14.2462 4.70062 14.1955L5.55656 12.713C5.61307 12.6129 5.62796 12.4947 5.59803 12.3838C5.56809 12.2729 5.49573 12.1782 5.39656 12.1202L5.39813 12.1198ZM12.3125 10.0877L8.93 8.13484L8.64531 8.20297C8.54094 8.22766 8.38875 8.48859 8.1725 8.85922C8.0475 9.07578 7.53938 9.95891 7.28969 10.1283C7.05594 10.2867 6.82938 10.2736 6.57094 9.89234C6.42915 9.6715 6.33535 9.42332 6.29563 9.16391C6.25156 8.87922 6.29375 8.72828 6.35469 8.51109C6.48906 8.03266 6.61344 7.54828 6.74219 7.06797C6.75398 7.02348 6.76849 6.97975 6.78562 6.93703C6.43404 6.82545 6.07294 6.74647 5.70687 6.70109C5.39137 6.66142 5.07227 6.65922 4.75625 6.69453L2.5 10.6002C2.69306 10.7878 2.86975 10.9915 3.02813 11.2092C3.50719 10.4461 4.67937 10.6217 4.90812 11.4964C5.04002 11.461 5.17761 11.4519 5.31302 11.4697C5.44843 11.4875 5.57901 11.5318 5.69728 11.6001C5.81556 11.6684 5.91921 11.7593 6.0023 11.8677C6.0854 11.9761 6.14631 12.0998 6.18156 12.2317C6.44798 12.1604 6.73181 12.1978 6.97066 12.3357C7.20951 12.4736 7.38383 12.7007 7.45531 12.967C7.66679 12.9097 7.89099 12.9208 8.09579 12.9987C8.30058 13.0766 8.47544 13.2174 8.59531 13.4008C8.6417 13.371 8.69534 13.3546 8.75043 13.3531C8.80552 13.3517 8.85994 13.3654 8.90781 13.3927C9.25937 13.5958 9.725 13.8302 10.0494 14.0514C10.3359 14.2014 10.6341 14.0827 10.8022 13.8227C10.8706 13.694 10.8867 13.5439 10.847 13.4036C10.8073 13.2634 10.715 13.1439 10.5894 13.0702L8.92062 12.1067C8.88636 12.087 8.85631 12.0608 8.83219 12.0295C8.80807 11.9981 8.79035 11.9624 8.78005 11.9242C8.75924 11.8472 8.76991 11.765 8.80969 11.6958C8.84947 11.6266 8.91511 11.576 8.99218 11.5552C9.06925 11.5344 9.15142 11.5451 9.22062 11.5848L10.8912 12.5492C10.955 12.5895 11.0262 12.6164 11.1006 12.6284C11.175 12.6405 11.2511 12.6374 11.3242 12.6193C11.3974 12.6012 11.4662 12.5686 11.5264 12.5233C11.5866 12.478 11.6371 12.421 11.6748 12.3557C11.7124 12.2904 11.7365 12.2182 11.7456 12.1434C11.7547 12.0686 11.7486 11.9927 11.7276 11.9203C11.7067 11.8479 11.6713 11.7805 11.6236 11.7221C11.576 11.6637 11.517 11.6155 11.4503 11.5805L9.27375 10.3239C9.2045 10.2838 9.15401 10.2179 9.13338 10.1406C9.11275 10.0633 9.12368 9.98097 9.16375 9.91172C9.20382 9.84247 9.26976 9.79198 9.34706 9.77135C9.42436 9.75072 9.50669 9.76165 9.57594 9.80172L11.7525 11.0586C11.8162 11.0988 11.8874 11.1258 11.9618 11.1378C12.0362 11.1499 12.1123 11.1468 12.1855 11.1287C12.2586 11.1106 12.3274 11.0779 12.3876 11.0326C12.4479 10.9873 12.4984 10.9303 12.536 10.8651C12.5737 10.7998 12.5978 10.7276 12.6069 10.6528C12.616 10.5779 12.6098 10.5021 12.5889 10.4297C12.5679 10.3573 12.5325 10.2898 12.4849 10.2315C12.4372 10.1731 12.3783 10.1249 12.3116 10.0898L12.3125 10.0877ZM10.6028 2.03516H11.9575L10.4466 0.394531V1.87891C10.4466 1.92035 10.463 1.96009 10.4923 1.98939C10.5216 2.01869 10.5614 2.03516 10.6028 2.03516ZM5.4375 4.09766C5.46297 4.12311 5.49364 4.14276 5.52741 4.15526C5.56118 4.16776 5.59726 4.17282 5.63316 4.17009C5.66907 4.16736 5.70396 4.15691 5.73545 4.13944C5.76695 4.12198 5.79429 4.09792 5.81563 4.06891L6.18188 3.64922C6.21914 3.59876 6.23607 3.53614 6.22931 3.47378C6.22255 3.41141 6.1926 3.35387 6.14539 3.31257C6.09818 3.27126 6.03718 3.24921 5.97447 3.25079C5.91176 3.25237 5.85194 3.27746 5.80688 3.32109L5.6025 3.55547L5.59312 3.54641C5.54586 3.5015 5.48292 3.47684 5.41773 3.47767C5.35254 3.47851 5.29026 3.50477 5.24416 3.55087C5.19806 3.59697 5.17179 3.65926 5.17095 3.72445C5.17012 3.78964 5.19478 3.85258 5.23969 3.89984L5.4375 4.09766ZM4.77875 6.09391L4.0425 5.66922V0.606719C4.04267 0.55066 4.06501 0.496944 4.10465 0.457304C4.14429 0.417664 4.198 0.395321 4.25406 0.395156H9.94656V1.87953C9.94656 2.05358 10.0157 2.2205 10.1388 2.34357C10.2618 2.46664 10.4288 2.53578 10.6028 2.53578H11.9575V5.15484L11.2075 5.58703C10.6029 5.56835 9.99791 5.60707 9.40063 5.70266C8.84406 5.79141 8.28562 5.93422 7.82531 6.14609C7.76943 6.1722 7.71127 6.19312 7.65156 6.20859C7.62031 6.21734 7.58719 6.22703 7.55031 6.23984C7.43195 6.27745 7.32095 6.33517 7.22219 6.41047C7.21205 6.40546 7.20161 6.40107 7.19094 6.39734C6.76431 6.24876 6.32324 6.14549 5.875 6.08922C5.51088 6.04399 5.14247 6.04556 4.77875 6.09391ZM7.52219 2.86516C7.52219 2.93146 7.54853 2.99505 7.59541 3.04193C7.64229 3.08882 7.70588 3.11516 7.77219 3.11516H9.33219C9.39849 3.11516 9.46208 3.08882 9.50896 3.04193C9.55585 2.99505 9.58219 2.93146 9.58219 2.86516C9.58219 2.79885 9.55585 2.73526 9.50896 2.68838C9.46208 2.6415 9.39849 2.61516 9.33219 2.61516H7.77219C7.70588 2.61516 7.64229 2.6415 7.59541 2.68838C7.54853 2.73526 7.52219 2.79885 7.52219 2.86516ZM7.52219 3.75234C7.52219 3.81865 7.54853 3.88224 7.59541 3.92912C7.64229 3.976 7.70588 4.00234 7.77219 4.00234H9.99094C10.0572 4.00234 10.1208 3.976 10.1677 3.92912C10.2146 3.88224 10.2409 3.81865 10.2409 3.75234C10.2409 3.68604 10.2146 3.62245 10.1677 3.57557C10.1208 3.52868 10.0572 3.50234 9.99094 3.50234H7.77219C7.70588 3.50234 7.64229 3.52868 7.59541 3.57557C7.54853 3.62245 7.52219 3.68604 7.52219 3.75234ZM7.52219 4.63953C7.52219 4.70584 7.54853 4.76942 7.59541 4.81631C7.64229 4.86319 7.70588 4.88953 7.77219 4.88953H11.1316C11.1979 4.88953 11.2615 4.86319 11.3083 4.81631C11.3552 4.76942 11.3816 4.70584 11.3816 4.63953C11.3816 4.57323 11.3552 4.50964 11.3083 4.46275C11.2615 4.41587 11.1979 4.38953 11.1316 4.38953H7.77219C7.70588 4.38953 7.64229 4.41587 7.59541 4.46275C7.54853 4.50964 7.52219 4.57323 7.52219 4.63953ZM4.86844 4.38453C4.86844 4.42597 4.8849 4.46571 4.9142 4.49502C4.9435 4.52432 4.98325 4.54078 5.02469 4.54078H6.38781C6.42925 4.54078 6.469 4.52432 6.4983 4.49502C6.5276 4.46571 6.54406 4.42597 6.54406 4.38453V3.02141C6.54406 2.97997 6.5276 2.94022 6.4983 2.91092C6.469 2.88162 6.42925 2.86516 6.38781 2.86516H5.02469C4.98325 2.86516 4.9435 2.88162 4.9142 2.91092C4.8849 2.94022 4.86844 2.97997 4.86844 3.02141V4.38453ZM9.55937 6.29078C9.19625 6.34891 7.71156 6.72234 7.46 6.98422C7.39551 7.0517 7.34908 7.13435 7.325 7.22453C7.19562 7.70734 7.07063 8.19328 6.93563 8.67453C6.895 8.81922 6.86688 8.91953 6.89062 9.07234C6.9148 9.22583 6.96567 9.37391 7.04094 9.50984C7.26469 9.19484 7.45594 8.88766 7.65063 8.55453C7.94313 8.05453 8.15063 7.70016 8.50594 7.61516C8.66969 7.57609 8.96531 7.45891 9.12719 7.55266C10.2834 8.22109 11.4691 8.87891 12.6147 9.56609C12.8696 9.71303 13.0589 9.95163 13.1441 10.2333L13.1622 10.2173C13.2539 10.1321 13.3503 10.0521 13.4509 9.97766L11.2541 6.17266C10.6868 6.16139 10.1197 6.20061 9.55937 6.28984V6.29078Z"
                      fill="#0C0830"
                    />
                  </svg>
                </ListItemIcon>
              </div>
            </Link>
          </div>
        </ListItemButton>
        <ListItemButton onClick={toggleProject}>
          <div className="flex items-center justify-between w-full">
            {isProjectOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}

            <div className="flex gap-2">
              <ListItemText primary={t("projectPhases")} />

              <ListItemIcon className="flex items-center justify-center">
                <img
                  src="/Images/sidebar/Vector.png"
                  alt="project-image"
                  className="w-4 h-4"
                />
              </ListItemIcon>
            </div>
          </div>
        </ListItemButton>

        {isProjectOpen && (
          <div className="">
            <Link to="/preparation">
              <ListItemButton className=" !text-end !pr-10">
                <ListItemText primary={t("preparationPhase")} />
              </ListItemButton>
            </Link>

            <Link to="/initiatingphase">
              <ListItemButton className=" !text-end !pr-10">
                <ListItemText primary={t("initiatingPhase")} />
              </ListItemButton>
            </Link>
            <Link to="/execution">
              <ListItemButton className=" !text-end !pr-10">
                <ListItemText primary={t("excecutionPhase")} />
              </ListItemButton>
            </Link>
            <Link to="/close">
              <ListItemButton className=" !text-end !pr-10">
                <ListItemText primary={t("closeOutPhase")} />
              </ListItemButton>
            </Link>
          </div>
        )}
      </div>

      <div>
        <ListItemButton onClick={toggleHub}>
          <div className="flex items-center justify-between w-full">
            {isHubOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}

            <div className="flex gap-3">
              <ListItemText primary={t("knowledgeHub")} />

              <ListItemIcon className="flex items-center justify-center">
                <img
                  src="/Images/sidebar/Vector.png"
                  alt="project-image"
                  className="w-4 h-4"
                />
              </ListItemIcon>
            </div>
          </div>
        </ListItemButton>

        {isHubOpen && (
          <div className="">
            <Link to="/reg">
              <ListItemButton className=" !text-end !pr-10">
                <ListItemText primary={t("regulations")} />
              </ListItemButton>
            </Link>

            <Link to="/template">
              <ListItemButton className=" !text-end !pr-10">
                <ListItemText primary={t("templates")} />
              </ListItemButton>
            </Link>

            <Link to="/ep">
              <ListItemButton className=" !text-end !pr-10">
                <ListItemText primary={t("engineeringPractices")} />
              </ListItemButton>
            </Link>
          </div>
        )}
      </div>

      <ListItemButton>
        <div className="flex items-center justify-end w-full">
          <Link to="/data">
            <div className="flex gap-3">
              <ListItemText primary={t("database")} />

              <ListItemIcon className="flex items-center justify-center">
                <img
                  src="/Images/sidebar/database.svg"
                  alt="project-image"
                  className="w-4 h-4"
                />
              </ListItemIcon>
            </div>
          </Link>
        </div>
      </ListItemButton>

      <ListItemButton>
        <div className="flex items-center justify-end w-full">
          <Link to="/ProjectManagement">
            <div className="flex gap-3">
              <ListItemText primary={t("projMan")} />

              <ListItemIcon className="flex items-center justify-center">
                <img
                  src="/Images/sidebar/project.svg"
                  alt="project-image"
                  className="w-4 h-4"
                />
              </ListItemIcon>
            </div>
          </Link>
        </div>
      </ListItemButton>

      <ListItemButton>
        <div className="flex items-center justify-end w-full">
          <div className="flex gap-3">
            <ListItemText primary={t("calculator")} />

            <ListItemIcon className="flex items-center justify-center">
              <img
                src="/Images/sidebar/calculator.svg"
                alt="project-image"
                className="w-4 h-4"
              />
            </ListItemIcon>
          </div>
        </div>
      </ListItemButton>

      <ListItemButton>
        <div className="flex items-center justify-end w-full">
          <div className="flex gap-3">
            <ListItemText primary={t("report")} />

            <ListItemIcon className="flex items-center justify-center">
              <img
                src="/Images/sidebar/report.svg"
                alt="project-image"
                className="w-4 h-4"
              />
            </ListItemIcon>
          </div>
        </div>
      </ListItemButton>

      <ListItemButton>
        <div className="flex items-center justify-end w-full">
          <div className="flex gap-3">
            <ListItemText primary={t("techSupp")} />

            <ListItemIcon className="flex items-center justify-center">
              <img
                src="/Images/sidebar/support.svg"
                alt="project-image"
                className="w-4 h-4"
              />
            </ListItemIcon>
          </div>
        </div>
      </ListItemButton>
    </div>
  );
};
