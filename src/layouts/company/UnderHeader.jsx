import { Button, Dropdown, Input, Menu } from "antd";

import { DownOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function UnderHeader() {
  const navigate = useNavigate();

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

  const handleLoginClick = () => {
    navigate("/login-signup");
  };

  const handleCompanyLoginClick = () => {
    navigate("/company-login-signup");
  };

  return (
    <div>
      <div className="bg-white w-full flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <img src="/Logo-login.png" alt="RikkeiEdu" className="h-12" />
        </div>
        <div className="flex items-center space-x-4">
          <Input.Group compact>
            <Dropdown overlay={locationMenu} trigger={["click"]}>
              <Button>
                Hà Nội <DownOutlined />
              </Button>
            </Dropdown>
            <Input
              style={{ width: "300px" }}
              placeholder="Job title, keyword, company"
            />
          </Input.Group>
          <Button className="bg-red-600 text-white" onClick={handleLoginClick}>
            Đăng Nhập
          </Button>
          <Button className="border-red-600 text-red-600">Đăng Kí</Button>
          <Button
            className="bg-indigo-700 text-white"
            onClick={handleCompanyLoginClick}
          >
            Đăng Tuyển
          </Button>
        </div>
      </div>
    </div>
  );
}
