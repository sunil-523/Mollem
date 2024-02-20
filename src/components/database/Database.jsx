import React, { useState } from "react";
import "./database.css";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Pagination } from "@mui/material";
import usePagination from "./Pagination";
import MapOverlay from "./MapOverlay";
import { CiSearch } from "react-icons/ci";
import { styled } from "@mui/system";
import { FormControl, MenuItem, Select } from "@mui/material";

import { useLanguage } from "../../context/LanguageContext";
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';

const CustomPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPagination-ul": {
    justifyContent: "center", // Center align the pagination items
  },
  "& .MuiPaginationItem-root": {
    margin: theme.spacing(0), // Remove margin to reduce spacing
    borderRadius: "0", // Add margin to each pagination item
  },
}));
function Database() {
  const { language, toggleLanguage } = useLanguage();
  const database = [
    {
      id: 1,
      notes: "Note",
      sample: "Link",
      contract: "Link",
      complexity: "Low",
      location: "Area",
      duration: "2 years",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      id: 2,
      notes: "Note",
      sample: "Link",
      contract: "Link",
      complexity: "Medium",
      location: "Area",
      duration: "1 years",
      cost: "$6M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      id: 3,
      notes: "Note",
      sample: "Link",
      contract: "Link",
      complexity: "High",
      location: "Area",
      duration: "2 years",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      id: 4,
      notes: "Note",
      sample: "Link",
      contract: "Link",
      complexity: "Low",
      location: "Area",
      duration: "1 years",
      cost: "$6M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      id: 5,
      notes: "Note",
      sample: "Link",
      contract: "Link",
      complexity: "Medium",
      location: "Area",
      duration: "1 years",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      id: 6,
      notes: "Note",
      sample: "Link",
      contract: "Link",
      complexity: "High",
      location: "Area",
      duration: "2 years",
      cost: "$6M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      id: 7,
      notes: "Note",
      sample: "Link",
      contract: "Link",
      complexity: "Low",
      location: "Area",
      duration: "2 years",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      id: 8,
      notes: "Note",
      sample: "Link",
      contract: "Link",
      complexity: "Medium",
      location: "Area",
      duration: "1 years",
      cost: "$6M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      id: 9,
      notes: "Note",
      sample: "Link",
      contract: "Link",
      complexity: "High",
      location: "Area",
      duration: "2 years",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      id: 10,
      notes: "Note",
      sample: "Link",
      contract: "Link",
      complexity: "Low",
      location: "Area",
      duration: "1 years",
      cost: "$6M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      id: 11,
      notes: "Note",
      sample: "Link",
      contract: "Link",
      complexity: "Medium",
      location: "Area",
      duration: "1 years",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      id: 12,
      notes: "Note",
      sample: "Link",
      contract: "Link",
      complexity: "High",
      location: "Area",
      duration: "2 years",
      cost: "$6M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      id: 13,
      notes: "Note",
      sample: "Link",
      contract: "Link",
      complexity: "Low",
      location: "Area",
      duration: "2 years",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      id: 14,
      notes: "Note",
      sample: "Link",
      contract: "Link",
      complexity: "Medium",
      location: "Area",
      duration: "1 years",
      cost: "$6M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      id: 15,
      notes: "Note",
      sample: "Link",
      contract: "Link",
      complexity: "High",
      location: "Area",
      duration: "2 years",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      id: 16,
      notes: "Note",
      sample: "Link",
      contract: "Link",
      complexity: "Low",
      location: "Area",
      duration: "1 years",
      cost: "$6M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
  ];

  const database_A = [
    {
      id: 1,
      notes: "ملحوظة",
      sample: "رابط موقع",
      contract: "رابط موقع",
      complexity: "قليل",
      location: "منطقة",
      duration: "2 سنين",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "فئة",
      name: "اسم المشروع",
    },
    {
      id: 2,
      notes: "ملحوظة",
      sample: "رابط موقع",
      contract: "رابط موقع",
      complexity: "واسطة",
      location: "منطقة",
      duration: "2 سنين",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "فئة",
      name: "اسم المشروع",
    },
    {
      id: 3,
      notes: "ملحوظة",
      sample: "رابط موقع",
      contract: "رابط موقع",
      complexity: "عالي",
      location: "منطقة",
      duration: "2 سنين",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "فئة",
      name: "اسم المشروع",
    },
    {
      id: 4,
      notes: "ملحوظة",
      sample: "رابط موقع",
      contract: "رابط موقع",
      complexity: "قليل",
      location: "منطقة",
      duration: "2 سنين",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "فئة",
      name: "اسم المشروع",
    },
    {
      id: 5,
      notes: "ملحوظة",
      sample: "رابط موقع",
      contract: "رابط موقع",
      complexity: "واسطة",
      location: "منطقة",
      duration: "2 سنين",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "فئة",
      name: "اسم المشروع",
    },
    {
      id: 6,
      notes: "ملحوظة",
      sample: "رابط موقع",
      contract: "رابط موقع",
      complexity: "عالي",
      location: "منطقة",
      duration: "2 سنين",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "فئة",
      name: "اسم المشروع",
    },
    {
      id: 7,
      notes: "ملحوظة",
      sample: "رابط موقع",
      contract: "رابط موقع",
      complexity: "قليل",
      location: "منطقة",
      duration: "2 سنين",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "فئة",
      name: "اسم المشروع",
    },
    {
      id: 8,
      notes: "ملحوظة",
      sample: "رابط موقع",
      contract: "رابط موقع",
      complexity: "واسطة",
      location: "منطقة",
      duration: "2 سنين",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "فئة",
      name: "اسم المشروع",
    },
    {
      id: 9,
      notes: "ملحوظة",
      sample: "رابط موقع",
      contract: "رابط موقع",
      complexity: "عالي",
      location: "منطقة",
      duration: "2 سنين",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "فئة",
      name: "اسم المشروع",
    },
    {
      id: 10,
      notes: "ملحوظة",
      sample: "رابط موقع",
      contract: "رابط موقع",
      complexity: "قليل",
      location: "منطقة",
      duration: "2 سنين",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "فئة",
      name: "اسم المشروع",
    },
    {
      id: 11,
      notes: "ملحوظة",
      sample: "رابط موقع",
      contract: "رابط موقع",
      complexity: "واسطة",
      location: "منطقة",
      duration: "2 سنين",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "فئة",
      name: "اسم المشروع",
    },
    {
      notes: "ملحوظة",
      sample: "رابط موقع",
      contract: "رابط موقع",
      complexity: "عالي",
      location: "منطقة",
      duration: "2 سنين",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "فئة",
      name: "اسم المشروع",
    },
    {
      id: 13,
      notes: "ملحوظة",
      sample: "رابط موقع",
      contract: "رابط موقع",
      complexity: "قليل",
      location: "منطقة",
      duration: "2 سنين",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "فئة",
      name: "اسم المشروع",
    },
    {
      id: 14,
      notes: "ملحوظة",
      sample: "رابط موقع",
      contract: "رابط موقع",
      complexity: "واسطة",
      location: "منطقة",
      duration: "2 سنين",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "فئة",
      name: "اسم المشروع",
    },
    {
      id: 15,
      notes: "ملحوظة",
      sample: "رابط موقع",
      contract: "رابط موقع",
      complexity: "عالي",
      location: "منطقة",
      duration: "2 سنين",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "فئة",
      name: "اسم المشروع",
    },
    {
      id: 16,
      notes: "ملحوظة",
      sample: "رابط موقع",
      contract: "رابط موقع",
      complexity: "قليل",
      location: "منطقة",
      duration: "2 سنين",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "فئة",
      name: "اسم المشروع",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);
  const totalData = 16;
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentData = database.slice(firstPostIndex, lastPostIndex);
  const currentData_A = database_A.slice(firstPostIndex, lastPostIndex);

  const count = Math.ceil(database.length / postPerPage);
  const dataShown = usePagination(database, totalData);
  const handleChange = (event, value) => {
    setCurrentPage(value);
    dataShown.jump(value);
  };

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

  const [duration, setDuration] = useState("Duration");
  const [projectSize, setPorjectSize] = useState("Project Size");
  const [sector, setSector] = useState("Sector");
  const [cost, setCost] = useState("Cost");
  const [date, setDate] = useState("Date");

  const onDurationChange = (event) => {
    setDuration(event.target.value);
    event.target.classList.remove("border", "border-gray-300");
  };

  return (
    <div className="background w-full text-xs px-8 pl-8 py-14">
      <div className="flex flex-row w-full  justify-between pt-8">
        <div className="flex flex-row">
          <div className="mr-4">
            <FormControl className="app-dropdown">
              <Select
                variant="outlined"
                value={duration}
                sx={{
                  borderRadius: "50px",
                  height: "40px",
                }}
              >
                <MenuItem disabled value="Duration">
                  {language === "english" ? "Project Size" : "حجم المشروع"}
                </MenuItem>
                <MenuItem>5 minutes</MenuItem>
                <MenuItem>30 minutes</MenuItem>
                <MenuItem>60 minutes</MenuItem>
              </Select>
            </FormControl>{" "}
          </div>

          <div className="mr-4">
            <FormControl className="app-dropdown">
              <Select
                variant="outlined"
                value={projectSize}
                sx={{
                  borderRadius: "50px",
                  height: "40px",
                }}
              >
                <MenuItem disabled value="Project Size">
                  {language === "english" ? "Project Size" : "حجم المشروع"}
                </MenuItem>
                <MenuItem>1GB</MenuItem>
                <MenuItem>2GB</MenuItem>
                <MenuItem>10GB</MenuItem>
              </Select>
            </FormControl>{" "}
          </div>

          <div className="mr-4">
            <FormControl className="app-dropdown">
              <Select
                variant="outlined"
                value={sector}
                sx={{
                  borderRadius: "50px",
                  height: "40px",
                }}
              >
                <MenuItem disabled value="Sector">
                  {language === "english" ? "Sector" : "قطاع"}
                </MenuItem>
                <MenuItem>Jaipur</MenuItem>
                <MenuItem>Banglore</MenuItem>
                <MenuItem>Noida</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="mr-4">
            <FormControl className="app-dropdown">
              <Select
                variant="outlined"
                value={cost}
                sx={{
                  borderRadius: "50px",
                  height: "40px",
                }}
              >
                <MenuItem disabled value="Cost">
                  {language === "english" ? "Cost" : "يكلف"}
                </MenuItem>
                <MenuItem>1,00,000</MenuItem>
                <MenuItem>5,00,000</MenuItem>
                <MenuItem>10,00,000</MenuItem>
              </Select>
            </FormControl>{" "}
          </div>

          <div className="mr-4">
            <FormControl className="app-dropdown">
              <Select
                variant="outlined"
                value={date}
                sx={{
                  borderRadius: "50px",
                  height: "40px",
                }}
              >
                <MenuItem disabled value="Date">
                  {language === "english" ? "Date" : "تاريخ"}
                </MenuItem>
                <MenuItem>2023</MenuItem>
                <MenuItem>2022</MenuItem>
                <MenuItem>2021</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="flex flex-row borderCustom  rounded-3xl px-4 mr-8  items-center bg-white">
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none text-base"
          />
          <CiSearch size={20} color="grey" />
        </div>
      </div>

      <div className="w-full bg-white table mt-8 rounded-2xl">
        <div className="w-[100%] flex flex-row borderColor headings">
          <div className="w-[10%] items-center flex justify-center px-2 py-2">
            <th className="text-xs font-semibold text-[#6B7280]">Notes</th>
          </div>
          <div className="w-[10%] items-center flex justify-end px-2 py-2">
            <th className="text-xs font-semibold text-[#6B7280]">
              Samples and Temnplates
            </th>
          </div>
          <div className="w-[10%] items-center flex justify-end px-2 py-2">
            <th className="text-xs font-semibold text-[#6B7280]">Contract</th>
          </div>
          <div className="w-[10%] items-center flex justify-end px-2 py-2">
            <th className="text-xs font-semibold text-[#6B7280]">Complexity</th>
            <span
              className="info-icon"
              title="High - 110, Medium - 60, Low - 47"
            >
              <IoIosInformationCircleOutline size={20} />
            </span>
          </div>
          <div className="w-[10%] items-center flex justify-end px-2 py-2">
            <th className="text-xs font-semibold text-[#6B7280]">Location</th>
          </div>
          <div className="w-[10%] items-center flex justify-end px-2 py-2">
            <th className="text-xs font-semibold text-[#6B7280]">Duration</th>
          </div>
          <div className="w-[10%] items-center flex justify-end px-2 py-2">
            <th className="text-xs font-semibold text-[#6B7280]">Cost</th>
          </div>
          <div className="w-[10%] items-center flex justify-end px-2 py-2">
            <th className="text-xs font-semibold text-[#6B7280]">Date</th>
          </div>
          <div className="w-[10%] items-center flex justify-end px-2 py-2">
            <th className="text-xs font-semibold text-[#6B7280]">Category</th>
          </div>
          <div className="w-[10%] items-center flex justify-end px-2 py-2">
            <th className="text-xs font-semibold text-[#6B7280]">Project</th>
          </div>
        </div>

        {language === "english"
          ? currentData.map((item) => (
              <div
                className="w-[100%] data flex flex-row justify-between datatext font-normal text-xs"
                key={item.id}
              >
                <div className="w-[10%] items-center flex justify-center px-2 py-2 font-normal text-xs">
                  <td>{item.notes}</td>
                </div>
                <div className="w-[10%] items-center flex justify-end px-2 py-2 textcolor font-normal text-xs">
                  <td>{item.sample}</td>
                </div>
                <div className="w-[10%] items-center flex justify-end px-2 py-2 textcolor font-normal text-xs">
                  <td>{item.contract}</td>
                </div>
                <div className="w-[10%] items-center flex justify-end px-2 py-2">
                  <td
                    className="py-1 px-2 rounded-md font-normal text-xs"
                    style={{
                      background: getComplexityColor(item.complexity),
                      color: getTextColor(item.complexity),
                    }}
                  >
                    {item.complexity}
                  </td>
                </div>
                <div
                  className="w-[10%] items-center flex justify-end px-2 py-2 cursor-pointer font-normal text-xs"
                  onClick={() => openModal()}
                >
                  <td>{item.location}</td>
                </div>
                <div className="w-[10%] items-center flex justify-end px-2 py-2 font-normal text-xs">
                  <td>{item.duration}</td>
                </div>
                <div className="w-[10%] items-center flex justify-end px-2 py-2 text-black font-semibold">
                  <td>{item.cost}</td>
                </div>
                <div className="w-[10%] items-center flex justify-end px-2 py-2 font-normal text-xs">
                  <td>{item.date}</td>
                </div>
                <div className="w-[10%] items-center flex justify-end px-2 py-2 font-normal text-xs">
                  <td>{item.category}</td>
                </div>
                <div className="w-[10%] items-center flex justify-end px-2 py-2 text-black font-semibold">
                  <td>{item.name}</td>
                </div>
              </div>
            ))
          : currentData_A.map((item) => (
              <div
                className="w-[100%] data flex flex-row justify-between datatext"
                key={item.id}
              >
                <div className="w-[10%] items-center flex justify-center px-2 py-2">
                  <td>{item.notes}</td>
                </div>
                <div className="w-[10%] items-center flex justify-end px-2 py-2 textcolor">
                  <td>{item.sample}</td>
                </div>
                <div className="w-[10%] items-center flex justify-end px-2 py-2 textcolor">
                  <td>{item.contract}</td>
                </div>
                <div className="w-[10%] items-center flex justify-end px-2 py-2">
                  <td
                    className="py-1 px-2 rounded-md"
                    style={{
                      background: getComplexityColor(item.complexity),
                      color: getTextColor(item.complexity),
                    }}
                  >
                    {item.complexity}
                  </td>
                </div>
                <div
                  className="w-[10%] items-center flex justify-end px-2 py-2 cursor-pointer"
                  onClick={() => openModal()}
                >
                  <td>{item.location}</td>
                </div>
                <div className="w-[10%] items-center flex justify-end px-2 py-2">
                  <td>{item.duration}</td>
                </div>
                <div className="w-[10%] items-center flex justify-end px-2 py-2 text-black">
                  <td>{item.cost}</td>
                </div>
                <div className="w-[10%] items-center flex justify-end px-2 py-2">
                  <td>{item.date}</td>
                </div>
                <div className="w-[10%] items-center flex justify-end px-2 py-2">
                  <td>{item.category}</td>
                </div>
                <div className="w-[10%] items-center flex justify-end px-2 py-2 text-black font-semibold">
                  <td>{item.name}</td>
                </div>
              </div>
            ))}

        {modalOpen && <MapOverlay closeModal={closeModal} />}
        <div className="flex justify-between items-center my-4 px-10">
          <CustomPagination
            count={count}
            variant="outlined"
            page={currentPage}
            onChange={handleChange}
            color="primary"
          />
          <p className=" text-xs font-normal">
            Showing {firstPostIndex + 1} -{" "}
            {lastPostIndex > totalData ? totalData : lastPostIndex} of{" "}
            {totalData}{" "}
          </p>

          <button className="font-semibold bg-primary  text-white rounded-full px-4 py-1 ">
            {" "}
            Print a report
          </button>
        </div>
      </div>
    </div>
  );
}

export default Database;
