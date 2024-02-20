import React from "react";

function Topiwala() {
  return (
    <div className="pt-14">
      <div className="bg-[#F2F6FE] px-8 w-full h-screen lg:pt-4 sm:pt-2">
        <h1 className="text-3xl font-medium text-center pt-4 pb-6">
          Topiwala Plant
        </h1>

        <div className="w-full shadow-md rounded-2xl bg-white px-8 py-12">
          <div className="  grid grid-cols-5 gap-4 ">
            <div className="flex flex-col font-medium">
              <label htmlFor="" className="font-medium ">
                Project title
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>

            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
                Department/section
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
                Project manager
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
                Project type
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
                Project location
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
                Expecting starting date
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
                Expecting budget
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
                Project duration
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
                Project serial number(given)
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
                Project reference
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
                Project goals & objectives
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
                Strategic alignment
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
          </div>

          <div className="text-center pt-5">
            <button className="font-medium text-white bg-primary py-1 px-4 rounded-3xl">
              Verfiy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topiwala;
