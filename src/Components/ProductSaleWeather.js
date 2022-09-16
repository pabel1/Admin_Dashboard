import React from "react";
import { MoreOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
// import { SiHackthebox } from "react-icons/si";
import { DatePicker } from "antd";
import moment from "moment";
import carImg from "../Assests/images/twocar.svg";
import sunImg from "../Assests/images/Light.svg";

const ProductSaleWeather = () => {
  const dateFormat = "YYYY/MM";
  const customFormat = (value) => `${value.format(dateFormat)}`;
  return (
    <div className=" mt-5 mb-8 w-[98%]">
      <div className=" grid grid-cols-2  gap-5 ">
        {/* popular product section start  */}
        <div
          className=" border border-[#E3E8EF] rounded-md 
         shadow-md p-5"
        >
          <div className=" flex items-center justify-between">
            <h1>Most Popular Product</h1>
            <MoreOutlined className=" text-2xl mb-3" />
          </div>
          <div className=" flex items-center justify-between border-b border-[#E1E1E1]">
            <div className=" flex  items-center gap-3">
              <div
                className=" p-4 px-[18px] border border-[#E3E8EF] rounded-lg font-semibold
               text-[#5C5C5C]"
              >
                TV
              </div>
              <div>
                <h2 className=" text-base text-[#181818] font-medium">
                  OnePlus TV 44 Inch
                </h2>
                <p className="text-[#747474] text-sm">10% increase</p>
              </div>
            </div>
            <p className="text-[#FF3030] text-sm">5K</p>
          </div>
          <div className=" flex items-center justify-between border-b border-[#E1E1E1]">
            <div className=" flex  items-center gap-3">
              <div
                className=" p-4 px-[18px] border border-[#E3E8EF] rounded-lg font-semibold
               text-[#5C5C5C]"
              >
                Mb
              </div>
              <div>
                <h2 className=" text-base text-[#181818] font-medium">
                UMI Smartphone
                </h2>
                <p className="text-[#747474] text-sm">17% increase</p>
              </div>
            </div>
            <p className="text-[#FF3030] text-sm">4.5K</p>
          </div>
          <div className=" flex items-center justify-between border-b border-[#E1E1E1]">
            <div className=" flex  items-center gap-3">
              <div
                className=" p-4 px-[18px] border border-[#E3E8EF] rounded-lg font-semibold
               text-[#5C5C5C]"
              >
                JP
              </div>
              <div>
                <h2 className=" text-base text-[#181818] font-medium">
                Chuwi Laptop
                </h2>
                <p className="text-[#747474] text-sm">20% Increase</p>
              </div>
            </div>
            <p className="text-[#FF3030] text-sm">2K</p>
          </div>
          <div className=" flex items-center justify-between border-b border-[#E1E1E1]">
            <div className=" flex  items-center gap-3">
              <div
                className=" p-4 px-[18px] border border-[#E3E8EF] rounded-lg font-semibold
               text-[#5C5C5C]"
              >
                JP
              </div>
              <div>
                <h2 className=" text-base text-[#181818] font-medium">
                Oneplut TV Y1G
                </h2>
                <p className="text-[#747474] text-sm">1% Increase</p>
              </div>
            </div>
            <p className="text-[#FF3030] text-sm">1.5K</p>
          </div>
          <div className=" flex items-center justify-between border-b border-[#E1E1E1]">
            <div className=" flex  items-center gap-3">
              <div
                className=" p-4 px-[18px] border border-[#E3E8EF] rounded-lg font-semibold
               text-[#5C5C5C]"
              >
                JP
              </div>
              <div>
                <h2 className=" text-base text-[#181818] font-medium">
                Earphone
                </h2>
                <p className="text-[#FF3030] text-sm">-1% Increase</p>
              </div>
            </div>
            <p className="text-[#FF3030] text-sm">1.4K</p>
          </div>
          <div className=" flex items-center justify-between border-b border-[#E1E1E1]">
            <div className=" flex  items-center gap-3">
              <div
                className=" p-4 px-[18px] border border-[#E3E8EF] rounded-lg font-semibold
               text-[#5C5C5C]"
              >
                JP
              </div>
              <div>
                <h2 className=" text-base text-[#181818] font-medium">
                Charger
                </h2>
                <p className="text-[#FF3030] text-sm">-5% increase</p>
              </div>
            </div>
            <p className="text-[#FF3030] text-sm">1.3K</p>
          </div>
          <div className=" flex items-center justify-between border-b border-[#E1E1E1]">
            <div className=" flex  items-center gap-3">
              <div
                className=" p-4 px-[18px] border border-[#E3E8EF] rounded-lg font-semibold
               text-[#5C5C5C]"
              >
                JP
              </div>
              <div>
                <h2 className=" text-base text-[#181818] font-medium">
                Cable
                </h2>
                <p className="text-[#FF3030] text-sm">-50% increase</p>
              </div>
            </div>
            <p className="text-[#FF3030] text-sm">1.2K</p>
          </div>
          <div className=" flex items-center justify-between border-b border-[#E1E1E1]">
            <div className=" flex  items-center gap-3">
              <div
                className=" p-4 px-[18px] border border-[#E3E8EF] rounded-lg font-semibold
               text-[#5C5C5C]"
              >
                JP
              </div>
              <div>
                <h2 className=" text-base text-[#181818] font-medium">
                Electric Car
                </h2>
                <p className="text-[#FF3030] text-sm">-5% increase</p>
              </div>
            </div>
            <p className="text-[#FF3030] text-sm">900</p>
          </div>
          <div className=" flex items-center justify-between border-b border-[#E1E1E1]">
            <div className=" flex  items-center gap-3">
              <div
                className=" p-4 px-[18px] border border-[#E3E8EF] rounded-lg font-semibold
               text-[#5C5C5C]"
              >
                JP
              </div>
              <div>
                <h2 className=" text-base text-[#181818] font-medium">
                ERP Software
                </h2>
                <p className="text-[#747474] text-sm">5% increase</p>
              </div>
            </div>
            <p className="text-[#FF3030] text-sm">870</p>
          </div>
          <div className=" flex items-center justify-between border-b border-[#E1E1E1] mb-5">
            <div className=" flex  items-center gap-3">
              <div
                className=" p-4 px-[18px] border border-[#E3E8EF] rounded-lg font-semibold
               text-[#5C5C5C]"
              >
                JP
              </div>
              <div>
                <h2 className=" text-base text-[#181818] font-medium">
                Attendance System
                </h2>
                <p className="text-[#747474] text-sm">6% increase</p>
              </div>
            </div>
            <p className="text-[#FF3030] text-sm">720</p>
          </div>
          <a className=" mt-5 mb-6" href="/">
            Show More
          </a>
        </div>
        {/* popular product section end */}

        {/* sale and weather section start grid grid-rows-2 */}
        <div className=" flex flex-col gap-5">
          {/* sale section start */}
          <div
            className=" border border-[#E3E8EF] rounded-md 
          shadow-md p-5"
          >
            <div className=" flex items-center justify-between">
              <h1 className=" font-semibold text-2xl"> Sale</h1>
              <MoreOutlined className=" text-2xl mb-2" />
            </div>
            <div className=" flex items-center justify-between">
              <p className=" text-base text-[#5C5C5C]">Monthly Sales</p>

              <DatePicker
                defaultValue={moment("2015/01/01", dateFormat)}
                format={customFormat}
              />
            </div>
            <h1 className=" text-base text-[#181818]">918</h1>
            <div className=" flex items-center justify-between border-b border-[#E1E1E1]">
              <div className=" flex  items-center gap-3">
                <div
                  className=" border border-[#E3E8EF] rounded-lg
               text-[#5C5C5C]"
                >
                  <img className=" w-14" src={carImg} alt="" />
                </div>
                <div>
                  <h2 className=" text-base text-[#181818] font-medium">
                    Chuwi Laptop
                  </h2>
                  <p className="text-[#747474] text-sm">
                    21/09/2022 - Israfil Arif
                  </p>
                </div>
              </div>
              <a href="/" className=" text-lg">
                Details
              </a>
            </div>
            <div className=" flex items-center justify-between border-b border-[#E1E1E1]">
              <div className=" flex  items-center gap-3">
                <div
                  className=" border border-[#E3E8EF] rounded-lg
               text-[#5C5C5C]"
                >
                  <img className=" w-14" src={carImg} alt="" />
                </div>
                <div>
                  <h2 className=" text-base text-[#181818] font-medium">
                    OnePlus TV
                  </h2>
                  <p className="text-[#747474] text-sm">
                    20/09/2022 - Debashish D. Dev
                  </p>
                </div>
              </div>
              <a href="/" className=" text-lg">
                Details
              </a>
            </div>
            <div className=" flex items-center justify-between border-b border-[#E1E1E1] mb-3">
              <div className=" flex  items-center gap-3">
                <div
                  className=" border border-[#E3E8EF] rounded-lg
               text-[#5C5C5C]"
                >
                  <img className=" w-14" src={carImg} alt="" />
                </div>
                <div>
                  <h2 className=" text-base text-[#181818] font-medium">
                    UMI Phone
                  </h2>
                  <p className="text-[#747474] text-sm">
                    16/09/2022 - JSajib Hossain
                  </p>
                </div>
              </div>
              <a href="/" className=" text-lg">
                Details
              </a>
            </div>
            <a className=" mt-5 mb-6" href="/">
              Show More
            </a>
          </div>
          {/* sale section end */}


        {/* Weather section start  */}
          <div
            className=" border border-[#E3E8EF] rounded-md 
          shadow-md p-5"
          >
            <div className=" flex items-center justify-between">
              <h1 className=" font-semibold"> Weather</h1>
              <MoreOutlined className=" text-2xl mb-1" />
            </div>
            <div className=" flex items-center justify-between">
              <h1 className=" font-semibold mt-1 ml-12"> 08:21 AM</h1>
              <p className="text-[#747474] text-sm">
                Wed, 21 September 2022
                <span className=" ml-3">
                  <LeftOutlined className=" text-[#9DACBE] text-sm" />
                  <RightOutlined className=" text-[#9DACBE] text-sm " />
                </span>
              </p>
            </div>
            <div className=" flex items-center justify-between">
              <div>
                <img className=" ml-5" src={sunImg} alt="" />
                <h2 className=" ml-2 text-lg">Cloudy Sunny, 24°C</h2>
              </div>
              <div className="flex items-center gap-5">
                <ul className=" list-disc space-y-2 text-[#5C5C5C]">
                    <li>10:00 AM</li>
                    <li>01:00 PM</li>
                    <li>04:00 PM</li>
                    <li>05:00 PM</li>
                    <li>08:00 PM</li>
                </ul>
                <ul className=" text-right space-y-2 text-[#5C5C5C]">
                    <li>Light Rain, 27°C</li>
                    <li>Cloudy Sunny, 27°C</li>
                    <li>Cloudy, 27°C</li>
                    <li>Cloudy, 25°C</li>
                    <li>Cloudy, 25°C</li>
                </ul>

              </div>
            </div>
          </div>


          {/* Weather section start  */}
        </div>
         

        {/* sale and weather section end */}
      </div>
    </div>
  );
};

export default ProductSaleWeather;
