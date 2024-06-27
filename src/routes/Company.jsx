import React, { useState } from "react";

import Banner from "../layouts/public/Banner";
import CompanyBreadcrumb from "../layouts/company/CompanyBreadcrumb";
import CompanyJobDetail from "../pages/company/CompanyJobsDetail";
import CustomFooter from "../layouts/public/Footer";
import CustomHeader from "../layouts/company/Header";
import FeatureCandidateCard from "../pages/company/FeatureCandidateCard";
import { Outlet } from "react-router-dom";
import UnderHeader from "../layouts/company/UnderHeader";

export default function Company() {
  const [breadcrumb, setBreadcrumb] = useState(["Trang chủ"]);

  const updateBreadcrumb = (crumbs) => {
    setBreadcrumb(crumbs);
  };

  return (
    <div>
      <CustomHeader updateBreadcrumb={updateBreadcrumb} />
      <Banner></Banner>
      <CompanyBreadcrumb breadcrumb={breadcrumb} />
      <FeatureCandidateCard></FeatureCandidateCard>
      <Outlet />
      <CustomFooter />
    </div>
  );
}
