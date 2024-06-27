import { Breadcrumb } from "antd";
import React from "react";

const BreadcrumbComponent = () => {
  return (
    <div className="p-4">
      <Breadcrumb separator="/">
        <Breadcrumb.Item>
          <a href="#">Trang chủ</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item></Breadcrumb.Item>
        <Breadcrumb.Item>Graphics & Design</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#">A Job Details</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComponent;
