import { Breadcrumb } from "antd";
import React from "react";

const CompanyBreadcrumb = ({ breadcrumb }) => {
  return (
    <div className="p-4 bg-slate-200">
      <Breadcrumb separator="/">
        {breadcrumb.map((item, index) => (
          <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default CompanyBreadcrumb;
