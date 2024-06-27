import React, { useState } from "react";

import CustomFooter from "../layouts/public/Footer";
import CustomHeader from "../layouts/user/Header";
import { Outlet } from "react-router-dom";
import UnderHeader from "../layouts/user/UnderHeader";
import YourCvBreadcrumb from "../layouts/public/YourCvBreadcrumb";

export default function User() {
  const [breadcrumb, setBreadcrumb] = useState(["Trang chủ"]);

  const updateBreadcrumb = (crumbs) => {
    setBreadcrumb(crumbs);
  };

  return (
    <div>
      <CustomHeader updateBreadcrumb={updateBreadcrumb} />
      <UnderHeader />
      <YourCvBreadcrumb breadcrumb={breadcrumb} />
      <Outlet />
      <CustomFooter />
    </div>
  );
}
