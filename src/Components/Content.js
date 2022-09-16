import React from "react";
import { Alert } from "antd";
import cloudeImg from "../Assests/images/Rainy.png";
import TotalSalesChart from "./TotalSalesChart";
import ProductSaleWeather from "./ProductSaleWeather";
const Content = () => {
  return (
    <div>
      <div className=" w-[98%]">
        <h2 className=" mb-6 text-[18px]">Redgreen Sales</h2>
        <div className=" flex bg-[#FFFAE1]  border-l-4 border-[#9D8506] ">
            <img className="w-[80px]  ml-4 p-3" src={cloudeImg} alt="" />
          <Alert 
            message="Notification"
            description="You dont have enough stock for the next campaign."
            type="warning"
            closable
            style={{
                border:"none",
                width:"90%", 

              }}
          />
        </div>
      </div>
      <div>
        <TotalSalesChart/>
      </div>
      <div>
        <ProductSaleWeather/>
      </div>
    </div>
  );
};

export default Content;
