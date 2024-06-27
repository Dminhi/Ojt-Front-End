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
        <Breadcrumb.Item>Thông tin doanh nghiệp</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComponent;
