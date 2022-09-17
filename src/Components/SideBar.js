import {
  BarChartOutlined,
  MessageOutlined,
  ProjectOutlined,
  EnvironmentOutlined,
  SettingOutlined,
  ExclamationCircleFilled,
  UserOutlined,
} from "@ant-design/icons";

import { Menu } from "antd";
import React from "react";

function getItem(label, key, icon, type) {
  return {
    key,
    icon,
    label,
    type,
  };
}

const items = [
  getItem(
    "Dashboard",
    "sub1",
    <BarChartOutlined style={{ fontSize: "18px", color: "#959292" }} />
  ),
  getItem(
    "Maps",
    "sub2",
    <EnvironmentOutlined style={{ fontSize: "18px", color: "#959292" }} />
  ),
  getItem(
    "Menu",
    "sub4",
    <ProjectOutlined
      rotate="270"
      style={{ fontSize: "18px", color: "#959292" }}
    />
  ),
  getItem(
    "Menu",
    "sub5",
    <MessageOutlined style={{ fontSize: "18px", color: "#959292" }} />
  ),
];
const item = [
  getItem(
    "Settings",
    "sub6",
    <SettingOutlined style={{ fontSize: "18px", color: "#959292" }} />,
    []
  ),
  getItem(
    "Accounts",
    "sub7",
    <UserOutlined style={{ fontSize: "18px", color: "#959292" }} />,
    []
  ),
  getItem(
    "Helps",
    "sub8",
    <ExclamationCircleFilled style={{ fontSize: "18px", color: "#959292" }} />,
    []
  ),
];
const SideBar = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <>
      <div>
        <h1 className=" ml-8 mt-6">MENU</h1>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          onClick={onClick}
          style={{
            marginLeft: "20px",
            background: "transparent",
            fontSize: "14px",
          }}
          // mode="inline"
          items={items}
        />
      </div>
      <div>
        <h1 className=" ml-8 mt-8">OTHERS</h1>
        <Menu
          onClick={onClick}
          style={{
            marginLeft: "20px",
            background: "transparent",
          }}
          // mode="inline"
          items={item}
        />
      </div>
    </>
  );
};

export default SideBar;
