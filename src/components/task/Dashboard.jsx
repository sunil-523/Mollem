import React from "react";
import { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
function Dashboard() {
  const chartRef = useRef(null);
  const { t } = useTranslation();
  useEffect(() => {
    let chartInstance = null;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Todo", "Doing", "Done"],
          datasets: [
            {
              label: "All Projects by section",
              data: [15, 10, 3],
              borderWidth: 1,
              backgroundColor: ["red", "red", "red"],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    // Cleanup function to destroy the chart instance
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  const data = {
    labels: ["Incomplete Project", "Complete Project", "Overdue Project"],
    datasets: [
      {
        label: "My First Dataset",
        data: [15, 15, 10],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <>
      <div className="w-full  lg:px-8 md:px-5 px-3">
        <div className="py-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-col-1 md gap-3 ">
            <div className=" flex flex-col justify-center items-center bg-white rounded-3xl px-4 py-8">
              {" "}
              <span className="text-primary font-bold">
                {" "}
                {t("completedTask")}
              </span>{" "}
              <span className="text-2xl">3</span>{" "}
            </div>
            <div className=" flex flex-col justify-center items-center bg-white rounded-3xl px-4 py-8">
              {" "}
              <span className="text-primary font-bold">
                {" "}
                {t("incomTask")}
              </span>{" "}
              <span className="text-2xl">0</span>{" "}
            </div>
            <div className=" flex flex-col justify-center items-center bg-white rounded-3xl px-4 py-8">
              {" "}
              <span className="text-primary font-bold">
                {" "}
                {t("overDue")}
              </span>{" "}
              <span className="text-2xl">3</span>{" "}
            </div>
            <div className=" flex flex-col justify-center items-center bg-white rounded-3xl px-4 py-8">
              {" "}
              <span className="text-primary font-bold">
                {" "}
                {t("totTask")}
              </span>{" "}
              <span className="text-2xl">0</span>{" "}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 ">
          <div className="bg-white rounded-3xl p-4">
            <canvas ref={chartRef}></canvas>
          </div>
          <div className="bg-white rounded-3xl p-4 flex justify-center items-center">
            <div
              className=" flex flex-col justify-center items-center"
              style={{ width: "561px", height: "280px" }}
            >
              <p className="text-center">Total Project By Completion Status</p>
              <Doughnut data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
