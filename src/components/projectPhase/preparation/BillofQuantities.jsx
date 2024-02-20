import React from "react";
import "./evaluation.css";
import { useLanguage } from "../../../context/LanguageContext";
import { TbLambda } from "react-icons/tb";
import { useTranslation } from 'react-i18next';
function BillofQuantities() {
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();
  return (
    <div className="mt-6 flex flex-col items-center">
      <thead>
        <tr>
          <th className="th rounded-tl-md">
            {t('cashFlow')}
          </th>
          <th className="th">
            {t('prodCode')}
          </th>
          <th className="th">
            {t('totPrice')}
          </th>
          <th className="th">
            {t('unitPrice')}
          </th>
          <th className="th">{t('quantity')}</th>
          <th className="th">{t('unit')}</th>
          <th className="th">
            {t('itemDesc')}
          </th>
          <th className="th rounded-tr-md">
            {t('prod')}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white">
          <td className="td rounded-bl-md">-</td>
          <td className="td">-</td>
          <td className="td">-</td>
          <td className="td bg-[#E9E9E9]">20 SAR</td>
          <td className="td">5</td>
          <td className="td bg-[#E9E9E9]">500</td>
          <td className="td"></td>
          <td className="td bg-[#E9E9E9] rounded-br-md">ABC OILone</td>
        </tr>
      </tbody>
      <p className="mt-16 mb-6 text-3xl font-medium">
        {t('firstPhases')}
      </p>
      <thead>
        <tr>
          <th className="th rounded-tl-md">
            {t('phaseDur')}
          </th>
          <th className="th">
            {t('phaseCost')}
          </th>
          <th className="th rounded-tr-md">
            {t('perOf')}
          </th>
          <th className="th">
            {t('cashFlow')}
          </th>
          <th className="th rounded-tr-md">
            {t('itemsCount')}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white">
          <td className="td rounded-bl-md">-</td>
          <td className="td">-</td>
          <td className="td">-</td>
          <td className="td">-</td>
          <td className="td rounded-br-md">-</td>
        </tr>
      </tbody>
      <div className="flex flex-row gap-5 mt-16">
        <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
         {t('verify')}
        </button>
        <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
          {t('saveLater')}
        </button>
        <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
          {t('print')}
        </button>
      </div>
    </div>
  );
}

export default BillofQuantities;
