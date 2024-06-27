import { DownOutlined, PhoneOutlined } from "@ant-design/icons";
import { Dropdown, Layout, Menu } from "antd";
import React, { useState } from "react";

import { Link } from "react-router-dom";

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
  const [current, setCurrent] = useState("1");

  const handleClick = (key) => {
    setCurrent(key);
    if (key === "1") {
      updateBreadcrumb(["Trang chủ"]);
    } else if (key === "2") {
      updateBreadcrumb(["Trang chủ", "Danh sách bài đăng"]);
    } else if (key === "3") {
      updateBreadcrumb(["Trang chủ", "Đăng tin"]);
    } else if (key === "4") {
      updateBreadcrumb(["Trang chủ", "Thông tin doanh nghiệp"]);
    }
  };

  return (
    <>
      <Header className="!p-0 h-10 leading-10">
        <div className="bg-slate-200 flex h-10 leading-10 items-center justify-between w-full p-4">
          <div className="flex items-center">
            <nav className="flex gap-8">
              <Link
                to="/company"
                className={`nav-link ${current === "1" ? "active" : ""} ml-4`}
                onClick={() => handleClick("1")}
              >
                Trang chủ
              </Link>
              <Link
                to="/company/company-job"
                className={`nav-link ${current === "2" ? "active" : ""}`}
                onClick={() => handleClick("2")}
              >
                Danh sách bài đăng
              </Link>
              <Link
                to="/company/add-newjob"
                className={`nav-link ${current === "3" ? "active" : ""}`}
                onClick={() => handleClick("3")}
              >
                Đăng tin
              </Link>
              <Link
                to="/company/company-detail"
                className={`nav-link ${current === "4" ? "active" : ""}`}
                onClick={() => handleClick("4")}
              >
                Thông tin doanh nghiệp
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
    </>
  );
};

export default CustomHeader;
