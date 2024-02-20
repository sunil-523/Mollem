import { useEffect, useState } from "react";
import React from 'react'
import './HCO.css'
import { useTranslation } from 'react-i18next';
import { MdOutlineClose } from "react-icons/md";
import { Switch } from "@mui/material";
function HideContentOverlay({closeModal, checkedA, checkedD, checkedE, checkedP, checkedS, checkedSt, checkedT ,setCheckedA, setCheckedD, setCheckedE, setCheckedP, setCheckedS, setCheckedSt, setCheckedT}) {
  const { t } = useTranslation();
  // const [checkedT, setCheckedT] = useState(true);
  // const [checkedD, setCheckedD] = useState(true);
  // const [checkedS, setCheckedS] = useState(true);
  // const [checkedE, setCheckedE] = useState(true);
  // const [checkedA, setCheckedA] = useState(true);
  // const [checkedSt, setCheckedSt] = useState(true);
  // const [checkedP, setCheckedP] = useState(true);

    const handleChangeT = () => {
      setCheckedT(!checkedT);

    }
    const handleChangeD = () => {
      setCheckedD(!checkedD);

    }
    const handleChangeS = () => {
      setCheckedS(!checkedS);

    }
    const handleChangeE = () => {
      setCheckedE(!checkedE);

    }
    const handleChangeA = () => {
      setCheckedA(!checkedA);

    }
    const handleChangeSt = () => {
      setCheckedSt(!checkedSt);

    }
    const handleChangeP = () => {
      setCheckedP(!checkedP);

    }
    useEffect(() => {
        const handleClickOutside = (event) => {
          const modalContent = document.querySelector(".modal-content");
    
          if (modalContent && !event.target.closest(".modal-content")) {
            // Close the modal if the click is outside the modal content and not on the excluded class
            closeModal();
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [closeModal]);
  return (
    <div className="modal-overlay ">
      <div className="modal-content relative rounded-xl bg-white w-[50%] flex flex-col">
        <div className="flex w-[100%] justify-between items-center">
          <p className="text-2xl p-4 pl-8 font-bold text-primary">{t('customize')}</p>
          <MdOutlineClose
              size={24}
              className=" m-4 cursor-pointer" 
              // color="default"
              onClick={closeModal}
            />

        </div>
        <div className="flex w-[100%] justify-between flex-wrap px-8 py-4">
          <div className="flex justify-between items-center w-[48%] px-4 box py-1 my-2">
            <p className="text-primary">{t('taskName')}</p>
            <Switch className="" color="default" checked={checkedT} onChange={handleChangeT} />
          </div>
          <div className="flex justify-between items-center w-[48%] px-4 box py-1 my-2">
            <p className="text-primary">{t('dept')}</p>
            <Switch className="" color="default" checked={checkedD} onChange={handleChangeD} />
          </div>
          <div className="flex justify-between items-center w-[48%] px-4 box py-1 my-2">
            <p className="text-primary">{t('startDate')}</p>
            <Switch className="" color="default" checked={checkedS} onChange={handleChangeS} />
          </div>
          <div className="flex justify-between items-center w-[48%] px-4 box py-1 my-2">
            <p className="text-primary">{t('endDate')}</p>
            <Switch className="" color="default" checked={checkedE} onChange={handleChangeE} />
          </div>
          <div className="flex justify-between items-center w-[48%] px-4 box py-1 my-2">
            <p className="text-primary">{t('assignee')}</p>
            <Switch className="" color="default" checked={checkedA} onChange={handleChangeA} />
          </div>
          <div className="flex justify-between items-center w-[48%] px-4 box py-1 my-2">
            <p className="text-primary">{t('status')}</p>
            <Switch className="" color="default" checked={checkedSt} onChange={handleChangeSt} />
          </div>
          <div className="flex justify-between items-center w-[48%] px-4 box py-1 my-2">
            <p className="text-primary">{t('priority')}</p>
            <Switch className="" color="default" checked={checkedP} onChange={handleChangeP} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HideContentOverlay