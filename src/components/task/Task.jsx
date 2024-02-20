import React from "react";
import { useState } from "react";
import Dashboard from "./Dashboard";
import TaskList from "./TaskList";
import TimeLine from "./TimeLine";

function Task() {
  const [dashboard, setDashboard] = useState(true);
  const [taskList, setTaskList] = useState();
  const [timeLine, setTimeLine] = useState();

  const showDashboard = () => {
    setDashboard(true);
    setTimeLine(false);
    setTaskList(false);
  };
  const showTaskList = () => {
    setDashboard(false);
    setTimeLine(true);
    setTaskList(false);
  };
  const showTimeLine = () => {
    setDashboard(false);
    setTimeLine(false);
    setTaskList(true);
  };
  return (
    <>
      <div className="bg-[#F2F6FE] pt-14  w-full  ">
        <div className=" shadow-lg  py-8">
          <div className="px-8 flex flex-row gap-3">
            <button
              onClick={showDashboard}
              className="bg-primary py-1 px-4 rounded-3xl font-medium   text-white focus:bg-white focus:text-primary"
            >
              Dashboard
            </button>
            <button
              onClick={showTaskList}
              className="bg-primary py-1 px-4 rounded-3xl font-medium   text-white focus:bg-white focus:text-primary"
            >
              Task List
            </button>
            <button
              onClick={showTimeLine}
              className="bg-primary py-1 px-4 rounded-3xl font-medium   text-white focus:bg-white focus:text-primary"
            >
              Timeline
            </button>
          </div>
        </div>

        <div>
          {dashboard && <Dashboard />}
          {taskList && <TaskList />}
          {timeLine && <TimeLine />}
        </div>
      </div>
      ;
    </>
  );
}

export default Task;
