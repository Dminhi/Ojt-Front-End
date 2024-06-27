import { DownOutlined, PhoneOutlined } from "@ant-design/icons";
import { Dropdown, Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

const { Header } = Layout;

const locationMenu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">Hà Nội</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">TP HCM</a>
    </Menu.Item>
  </Menu>
);

const languageMenu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">English</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">Vietnamese</a>
    </Menu.Item>
  </Menu>
);

const CustomHeader = ({ updateBreadcrumb }) => {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  const handleClick = (key, breadcrumb) => {
    setCurrent(key);
    updateBreadcrumb(breadcrumb);
  };

  return (
    <Header className="!p-0 h-10 leading-10">
      <div className="bg-slate-200 flex h-10 leading-10 items-center justify-between w-full p-4">
        <div className="flex items-center">
          <nav className="flex gap-8">
            <Link
              to="/"
              className={`nav-link ${current === "/" ? "active" : ""} ml-4`}
              onClick={() => handleClick("/", ["Trang chủ"])}
            >
              Trang chủ
            </Link>
            <Link
              to="/job-feature"
              className={`nav-link ${
                current === "/job-feature" ? "active" : ""
              }`}
              onClick={() =>
                handleClick("/job-feature", ["Trang chủ", "Việc làm"])
              }
            >
              Việc làm
            </Link>
            <Link
              to="/company-feature"
              className={`nav-link ${
                current === "/company-feature" ? "active" : ""
              }`}
              onClick={() =>
                handleClick("/company-feature", ["Trang chủ", "Công ty"])
              }
            >
              Công ty
            </Link>
            <Link
              to="/candidate-feature"
              className={`nav-link ${
                current === "/candidate-feature" ? "active" : ""
              }`}
              onClick={() =>
                handleClick("/candidate-feature", ["Trang chủ", "Ứng viên"])
              }
            >
              Ứng viên
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="border-none !bg-gray !px-0 flex items-center space-x-2">
            <PhoneOutlined />
            <span>+1-202-555-0178</span>
          </div>
          <div className="border-none !bg-gray !px-0">
            <Dropdown overlay={languageMenu} trigger={["click"]}>
              <a
                href="#"
                className="ant-dropdown-link flex items-center space-x-2 pr-8"
              >
                <img src="/UKFlag.png" alt="flag" className="h-4" />
                <span>English</span>
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default CustomHeader;
