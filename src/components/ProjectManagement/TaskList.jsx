import React from "react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { useTranslation } from "react-i18next";
import HideContentOverlay from "./HideContentOverlay";
import { Pagination } from "@mui/material";
import { styled } from "@mui/system";
import usePagination from "./Pagination";
function TaskList() {
  const CustomPagination = styled(Pagination)(({ theme }) => ({
    "& .MuiPagination-ul": {
      justifyContent: "center", // Center align the pagination items
    },
    "& .MuiPaginationItem-root": {
      margin: theme.spacing(0.5),
      borderRadius: "0",
    },
  }));
  const tasks = [
    {
      projectName: "Project Name",
      taskName: "Task Name",
      dept: "Department",
      assignee: "Assignee",
      start: "Start Date",
      due: "Due Date",
      status: "Pending",
      priority: "High",
      action: <FaEye />,
    },
    {
      projectName: "Project Name",
      taskName: "Task Name",
      dept: "Department",
      assignee: "Assignee",
      start: "Start Date",
      due: "Due Date",
      status: "Done",
      priority: "Medium",
      action: <FaEye />,
    },
    {
      projectName: "Project Name",
      taskName: "Task Name",
      dept: "Department",
      assignee: "Assignee",
      start: "Start Date",
      due: "Due Date",
      status: "Pending",
      priority: "Low",
      action: <FaEye />,
    },
    {
      projectName: "Project Name",
      taskName: "Task Name",
      dept: "Department",
      assignee: "Assignee",
      start: "Start Date",
      due: "Due Date",
      status: "Pending",
      priority: "Low",
      action: <FaEye />,
    },
    {
      projectName: "Project Name",
      taskName: "Task Name",
      dept: "Department",
      assignee: "Assignee",
      start: "Start Date",
      due: "Due Date",
      status: "Pending",
      priority: "Medium",
      action: <FaEye />,
    },
    {
      projectName: "Project Name",
      taskName: "Task Name",
      dept: "Department",
      assignee: "Assignee",
      start: "Start Date",
      due: "Due Date",
      status: "Pending",
      priority: "Medium",
      action: <FaEye />,
    },
    {
      projectName: "Project Name",
      taskName: "Task Name",
      dept: "Department",
      assignee: "Assignee",
      start: "Start Date",
      due: "Due Date",
      status: "Pending",
      priority: "Low",
      action: <FaEye />,
    },
    {
      projectName: "Project Name",
      taskName: "Task Name",
      dept: "Department",
      assignee: "Assignee",
      start: "Start Date",
      due: "Due Date",
      status: "Pending",
      priority: "High",
      action: <FaEye />,
    },
    {
      projectName: "Project Name",
      taskName: "Task Name",
      dept: "Department",
      assignee: "Assignee",
      start: "Start Date",
      due: "Due Date",
      status: "Done",
      priority: "High",
      action: <FaEye />,
    },
    {
      projectName: "Project Name",
      taskName: "Task Name",
      dept: "Department",
      assignee: "Assignee",
      start: "Start Date",
      due: "Due Date",
      status: "Pending",
      priority: "High",
      action: <FaEye />,
    },
    {
      projectName: "Project Name",
      taskName: "Task Name",
      dept: "Department",
      assignee: "Assignee",
      start: "Start Date",
      due: "Due Date",
      status: "Pending",
      priority: "High",
      action: <FaEye />,
    },
    {
      projectName: "Project Name",
      taskName: "Task Name",
      dept: "Department",
      assignee: "Assignee",
      start: "Start Date",
      due: "Due Date",
      status: "Done",
      priority: "High",
      action: <FaEye />,
    },
    {
      projectName: "Project Name",
      taskName: "Task Name",
      dept: "Department",
      assignee: "Assignee",
      start: "Start Date",
      due: "Due Date",
      status: "Pending",
      priority: "High",
      action: <FaEye />,
    },
    {
      projectName: "Project Name",
      taskName: "Task Name",
      dept: "Department",
      assignee: "Assignee",
      start: "Start Date",
      due: "Due Date",
      status: "Done",
      priority: "High",
      action: <FaEye />,
    },
    {
      projectName: "Project Name",
      taskName: "Task Name",
      dept: "Department",
      assignee: "Assignee",
      start: "Start Date",
      due: "Due Date",
      status: "Pending",
      priority: "High",
      action: <FaEye />,
    },
  ];
  const { t } = useTranslation();
  const [date, setDate] = useState();

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = (event, value) => {
    setCurrentPage(value);
    dataShown.jump(value);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);
  const totalData = 16;
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const count = Math.ceil(tasks.length / postPerPage);
  const dataShown = usePagination(tasks, totalData);

  const currentData = tasks.slice(firstPostIndex, lastPostIndex);
  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case "Low":
        return "var(--green-100, #DEF7EC)"; // Light green for low complexity
      case "Medium":
        return "var(--purple-100, #EDEBFE)"; // Yellow for medium complexity
      case "High" || "عالي":
        return "var(--red-100, #FDE8E8)"; // Light red for high complexity
      case "قليل":
        return "var(--green-100, #DEF7EC)";
      case "واسطة":
        return "var(--purple-100, #EDEBFE)";
      case "عالي":
        return "var(--red-100, #FDE8E8)";
    }
  };

  const getTextColor = (complexity) => {
    switch (complexity) {
      case "Low":
        return "#018B00"; // Light green for low complexity
      case "Medium":
        return "var(--purple-800, #5521B5)"; // Yellow for medium complexity
      case "High":
        return "var(--red-800, #9B1C1C)"; // Light red for high complexity
      case "قليل":
        return "#018B00";
      case "واسطة":
        return "var(--purple-800, #5521B5)";
      case "عالي":
        return "var(--red-800, #9B1C1C)";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "#FDE8E7";
      case "Done":
        return "#E3FEF0";
    }
  };
  const getStatusText = (status) => {
    switch (status) {
      case "Pending":
        return "#F15642";
      case "Done":
        return "#4B514B";
    }
  };

  const sendToParent = (data) => {
    console.log(data);
  };

  const [checkedT, setCheckedT] = useState(true);
  const [checkedD, setCheckedD] = useState(true);
  const [checkedS, setCheckedS] = useState(true);
  const [checkedE, setCheckedE] = useState(true);
  const [checkedA, setCheckedA] = useState(true);
  const [checkedSt, setCheckedSt] = useState(true);
  const [checkedP, setCheckedP] = useState(true);

  return (
    <div className="border-t border-gray-300 flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center ml-8 mt-4 gap-5">
          <p>{t("filter")}</p>
          <input
            type="date"
            className="border px-2 py-2 rounded-lg"
            value="05-10-2023"
          />
          <button
            onClick={() => openModal()}
            className="bg-white py-1 px-4 rounded-3xl font-medium  flex items-center text-primary focus:bg-primary focus:text-white"
          >
            {t("hide")} <IoMdEyeOff />
          </button>

          <button className="bg-white py-1 px-4 rounded-3xl font-medium flex items-center  text-primary focus:bg-primary focus:text-white">
            {t("customize")}{" "}
            <svg
              className="ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="18"
              viewBox="0 0 30 18"
              fill="none"
            >
              <rect width="14" height="8" rx="4" fill="#F06A6A" />
              <rect y="10" width="14" height="8" rx="4" fill="#5DA283" />
              <rect x="16" width="14" height="8" rx="4" fill="#F1BD6C" />
              <rect x="16" y="10" width="14" height="8" rx="4" fill="#4573D2" />
            </svg>
          </button>
          <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
            {t("print")}
          </button>
          <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
            {t("report")}
          </button>
        </div>
      </div>
      <div className="w-[95%] mx-auto bg-white table mt-4  rounded-2xl">
        <div className="w-full flex flex-row borderColor justify-between headings">
          <div className="w-[10%] items-center flex justify-center px-2 py-2">
            <th className="text-xs font-semibold text-[#6B7280]">
              {t("projectName")}
            </th>
          </div>
          {checkedT && (
            <div className="w-[10%] items-center flex justify-end px-2 py-2">
              <th className="text-xs font-semibold text-[#6B7280]">
                {t("taskName")}
              </th>
            </div>
          )}
          {checkedD && (
            <div className="w-[10%] items-center flex justify-end px-2 py-2">
              <th className="text-xs font-semibold text-[#6B7280]">
                {t("dept")}
              </th>
            </div>
          )}
          {checkedA && (
            <div className="w-[10%] items-center flex justify-end px-2 py-2">
              <th className="text-xs font-semibold text-[#6B7280]">
                {t("assignee")}
              </th>
            </div>
          )}
          {checkedSt && (
            <div className="w-[10%] items-center flex justify-end px-2 py-2">
              <th className="text-xs font-semibold text-[#6B7280]">
                {t("startDate")}
              </th>
            </div>
          )}
          {checkedD && (
            <div className="w-[10%] items-center flex justify-end px-2 py-2">
              <th className="text-xs font-semibold text-[#6B7280]">
                {t("dueDate")}
              </th>
            </div>
          )}
          {checkedS && (
            <div className="w-[10%] items-center flex justify-end px-2 py-2">
              <th className="text-xs font-semibold text-[#6B7280]">
                {t("status")}
              </th>
            </div>
          )}
          {checkedP && (
            <div className="w-[10%] items-center flex justify-end px-2 py-2">
              <th className="text-xs font-semibold text-[#6B7280]">
                {t("priority")}
              </th>
            </div>
          )}
          <div className="w-[10%] items-center flex justify-end px-2 py-2">
            <th className="text-xs font-semibold text-[#6B7280]">
              {t("action")}
            </th>
          </div>
        </div>

        {currentData.map((item) => (
          <div className="w-[100%] data flex flex-row justify-between datatext font-normal text-xs">
            <div className="w-[10%] items-center flex justify-center px-2 py-2 font-normal text-xs">
              <td>{item.projectName}</td>
            </div>
            {checkedT && (
              <div className="w-[10%] items-center flex justify-center px-2 py-2 font-normal text-xs">
                <td>{item.taskName}</td>
              </div>
            )}
            {checkedD && (
              <div className="w-[10%] items-center flex justify-end px-2 py-2 textcolor font-normal text-xs">
                <td>{item.dept}</td>
              </div>
            )}
            {checkedA && (
              <div className="w-[10%] items-center flex justify-end px-2 py-2 textcolor font-normal text-xs">
                <td>{item.assignee}</td>
              </div>
            )}
            {checkedSt && (
              <div className="w-[10%] items-center flex justify-end px-2 py-2">
                <td className="py-1 px-2 rounded-md text-primary font-normal text-xs">
                  {item.start}
                </td>
              </div>
            )}
            {checkedD && (
              <div className="w-[10%] items-center flex text-primary justify-end px-2 py-2 cursor-pointer font-normal text-xs">
                <td>{item.due}</td>
              </div>
            )}
            {checkedS && (
              <div className="w-[10%] items-center flex justify-end px-2 py-2 text-black font-semibold">
                <td
                  className="py-1 px-2 rounded-md font-normal text-xs"
                  style={{
                    background: getStatusColor(item.status),
                    color: getStatusText(item.status),
                  }}
                >
                  {item.status}
                </td>
              </div>
            )}

            {checkedP && (
              <div className="w-[10%] items-center flex justify-end px-2 py-2 text-black font-semibold">
                <td
                  className="py-1 px-2 rounded-md font-normal text-xs"
                  style={{
                    background: getComplexityColor(item.priority),
                    color: getTextColor(item.priority),
                  }}
                >
                  {item.priority}
                </td>
              </div>
            )}
            <div className="w-[10%] items-center flex justify-end px-2 py-2 font-normal text-xs">
              <td className="text-primary text-xl">{item.action}</td>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end w-full  my-4 px-10">
        <CustomPagination
          count={count}
          variant="outlined"
          page={currentPage}
          onChange={handleChange}
          color="primary"
        />
      </div>
      {modalOpen && (
        <HideContentOverlay
          checkedA={checkedA}
          checkedD={checkedD}
          checkedE={checkedE}
          checkedP={checkedP}
          checkedS={checkedS}
          checkedSt={checkedSt}
          checkedT={checkedT}
          setCheckedA={setCheckedA}
          setCheckedD={setCheckedD}
          setCheckedE={setCheckedE}
          setCheckedP={setCheckedP}
          setCheckedS={setCheckedS}
          setCheckedSt={setCheckedSt}
          setCheckedT={setCheckedT}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default TaskList;
