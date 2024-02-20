import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import TaskList from "./TaskList";
import DashBoard from "../task/Dashboard";
function Task({ checkedA }) {
  const { t } = useTranslation();

  const [dashboard, setDashboard] = useState(true);
  const [taskList, setTaskList] = useState(false);
  const [timeline, setTimeline] = useState(false);

  const showDashboard = () => {
    setDashboard(true);
    setTaskList(false);
    setTimeline(false);
  };

  const showTasklist = () => {
    setTaskList(true);
    setTimeline(false);
    setDashboard(false);
  };

  const showTimeline = () => {
    setTimeline(true);
    setDashboard(false);
    setTaskList(false);
  };

  return (
    <div className="bg-background h-full pt-20 pb-3">
      <div className="flex justify-between ml-8 pb-8 mr-8">
        <div
          className="overflow-auto scrollbar-hidden"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex flex-row gap-7  min-w-[460px]">
            <button
              onClick={showDashboard}
              className="bg-white py-1 px-4 rounded-3xl font-medium   text-primary focus:bg-primary focus:text-white"
            >
              {t("dashboard")}
            </button>
            <button
              onClick={showTasklist}
              className="bg-white py-1 px-4 rounded-3xl font-medium   text-primary focus:bg-primary focus:text-white"
            >
              {t("taskList")}
            </button>
            <button
              onClick={showTimeline}
              className="bg-white py-1 px-4 rounded-3xl font-medium   text-primary focus:bg-primary focus:text-white"
            >
              {t("timeline")}
            </button>
          </div>
        </div>
        {!dashboard && (
          <button className="bg-primary text-white py-1 px-4 rounded-2xl">
            {t("addNewTask")}
          </button>
        )}
      </div>
      {taskList && <TaskList />}
      {dashboard && <DashBoard />}
    </div>
  );
}

export default Task;
