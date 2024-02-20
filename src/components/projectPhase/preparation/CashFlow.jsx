import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import "./evaluation.css";
import { useTranslation } from 'react-i18next';
function CashFlow() {
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();
  return (
    <div className="mt-6 flex flex-col items-center">
      <p className="text-xl font-normal mt-6  text-[#808080]">
      {t('loremMed')}
      </p>

      <thead className="mt-8">
        <tr>
          <th className="th rounded-tl-md">
            {t('correlation')}
          </th>
          <th className="th">
            {t('phaseCost')}
          </th>
          <th className="th">
            {t('items%')}
          </th>
          <th className="th">
            {t('phaseDur')}
          </th>
          <th className="th rounded-tr-md">
            {t('%cumulative')}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white">
          <td className="td rounded-bl-md">500</td>
          <td className="td">-</td>
          <td className="td">-</td>
          <td className="td">-</td>
          <td className="td rounded-br-md">-</td>
        </tr>
      </tbody>

      <thead className="mt-12">
        <tr>
          <th className="th rounded-tl-md">
            {t('percOfInvoice')}
          </th>
          <th className="th">{t('phase')}</th>
          <th className="th rounded-tr-md">
            {t('no.')}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white">
          <td className="td rounded-bl-md">-</td>
          <td className="td">2</td>
          <td className="td rounded-br-md">1</td>
        </tr>
      </tbody>

      <div className="flex flex-row gap-10 mt-16">
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
  );
}

export default CashFlow;
