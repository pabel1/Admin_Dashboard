import React from "react";
import { MoreOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import moment from "moment";
import saleImg from "../Assests/images/Chart visitors.svg";
import progressImg from "../Assests/images/Group 351.svg";
import { GiPlainCircle } from "react-icons/gi";

const TotalSalesChart = () => {
  const dateFormat = "YYYY/MM";
  const customFormat = (value) => `${value.format(dateFormat)}`;
  return (
    <div className=" mt-5 w-[98%]">
      <div className=" grid grid-cols-3 gap-5">
        {/* Total sales section start */}
        <div
          className=" border border-[#E3E8EF] rounded-md 
         shadow-md p-5 col-span-2"
        >
          <div className=" flex items-center justify-between">
            <h1 className=" text-2xl font-semibold">Total Sale</h1>
            <div>
              <DatePicker
                defaultValue={moment("2015/01/01", dateFormat)}
                format={customFormat}
              />
              <MoreOutlined className=" text-2xl mb-2" />
            </div>
          </div>
          <div className=" flex items-center justify-around">
            <div>
              <div className=" mb-5">
                <p className=" text-sm text-[#5C5C5C]">TV</p>
                <h2 className=" text-base text-[#181818] font-semibold">600,000</h2>
              </div>
              <div className=" mb-5">
                <p className=" text-sm text-[#5C5C5C]">Laptop</p>
                <p className=" text-base text-[#181818] font-semibold">1,200,000</p>
              </div>
              <div className=" ">
                <p className=" text-sm text-[#5C5C5C]">Others</p>
                <p className=" text-base text-[#181818] font-semibold">210.287</p>
              </div>
            </div>
            <div>
              <img src={saleImg} alt="" />
            </div>
          </div>
        </div>
        {/* Total sales section end */}

        {/*  sales chart  section start */}
        <div
          className=" border border-[#E3E8EF] rounded-md 
          shadow-md p-5 col-span-1"
        >
          <div className=" flex items-center justify-between">
            <h1 className=" text-2xl font-semibold"> Sales Chart</h1>
            <MoreOutlined className=" text-2xl mb-2" />
          </div>
          <div className=" flex items-center justify-between">
            <p className=" text-base text-[#5C5C5C]">Todays Sale</p>

            <DatePicker
              defaultValue={moment("2015/01/01", dateFormat)}
              format={customFormat}
            />
          </div>
          <h1 className=" text-base text-[#181818]">156</h1>
          <div className=" flex  justify-around items-center">
            <img src={progressImg} alt="" />
            <ul className=" mt-10 space-y-3">
              <li className=" flex items-center gap-1">
                <span className=" text-[#2D5BFF]">
                  <GiPlainCircle />
                </span>{" "}
                50% TV
              </li>
              <li className=" flex items-center gap-1">
                <span className=" text-[#6284FD]">
                  <GiPlainCircle />
                </span>{" "}
                25% Laptop
              </li>
              <li className=" flex items-center gap-1 ">
                <span className=" text-[#96ADFF]">
                  <GiPlainCircle />
                </span>{" "}
                25% Other
              </li>

              <a className="" href="/">
                See Details
              </a>
            </ul>
          </div>
        </div>

        {/*  sales chart  section end */}
      </div>
    </div>
  );
};

export default TotalSalesChart;
