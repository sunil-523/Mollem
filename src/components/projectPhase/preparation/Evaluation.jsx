import React, { useState } from "react";
import "./evaluation.css";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { useLanguage } from "../../../context/LanguageContext";
function Evaluation() {
  const [mainCriteria, setMainCriteria] = useState("");
  const onCriteriaChange = (event) => {
    // console.log(event.target)
    setMainCriteria(event.target.value);
  };
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();


  return (
    <div className="bg-[#F2F6FE]  w-full flex flex-col  ">
      <p className="text-xl font-normal mt-8  text-[#808080]">
        {t('loremMed')}
      </p>
      <div className="flex flex-col items-center mt-8">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col bg-white box mr-8">
            <p className="text-xl font-medium mt-4 mx-4">
              {t('weight')}
            </p>
            <input
              type="number"
              className="outline-none pl-4 input m-4  h-[35px]"
            />
          </div>
          <div className="flex flex-col bg-white box ml-8 w-[250px]">
            <p className="text-xl font-medium mt-4 mx-4">
              {t('mainCri')}
            </p>
            <FormControl className="app-dropdown">
              <Select
                className="m-4 bg-white"
                variant="outlined"
                onChange={onCriteriaChange}
                value={mainCriteria}
                sx={{
                  borderRadius: "6px",
                  height: "35px",
                }}
              >
                <MenuItem disabled value={mainCriteria}>
                  {language === "english"
                    ? "Main Criteria"
                    : "المعايير الرئيسية"}
                </MenuItem>
                <MenuItem value="criteria1" onClick={onCriteriaChange}>
                  {language === "english" ? "Criteria 1" : "معايير 1"}
                </MenuItem>
                <MenuItem value="criteria2">
                  {language === "english" ? "Criteria 2" : "معايير 2"}
                </MenuItem>
                <MenuItem value="criteria3">
                  {language === "english" ? "Criteria 3" : "معايير 3"}
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="flex flex-row gap-3 mt-16">
          <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
            {t('print')}
          </button>
          <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
            {t('export')}
          </button>
          <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
            {t('saveLater')}
          </button>
          <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
            {t('verify')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Evaluation;
