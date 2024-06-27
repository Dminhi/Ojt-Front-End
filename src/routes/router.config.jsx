import AddNewJob from "../pages/company/AddNewJob";
import AuthForm from "../pages/auth/AuthForm";
import CandidateDetail from "../pages/company/CandidateDetail";
import Company from "./Company";
import CompanyDetail from "../pages/user/CompanyDetail";
import CompanyJobs from "../pages/company/CompanyJobs";
import FeatureCandidateCard from "../pages/public/FeatureCandidateCard";
import FeaturedCompanies from "../pages/public/FeaturedCompanies";
import FeaturedJobs from "../pages/public/FeaturedJobs";
import HomePage from "../pages/public/HomePage";
import JobDetail from "../pages/user/JobsDetail";
import LoginAdminForm from "../pages/auth/LoginAdminForm";
import LoginCompanyForm from "../pages/auth/LoginCompanyForm";
import MyCompanyDetail from "../pages/company/CompanyDetail";
import Public from "./Public";
import ResetPassword from "../pages/auth/ResetPassword";
import User from "./User";
import YourCvNav from "../layouts/user/YourCvNav";

const routerConfig = [
  {
    path: "/",
    element: <Public />,
    children: [
      {
        path: "",
        element: <HomePage></HomePage>,
      },
      {
        path: "job-feature",
        element: <FeaturedJobs />,
      },
      {
        path: "company-feature",
        element: <FeaturedCompanies />,
      },
      {
        path: "candidate-feature",
        element: <FeatureCandidateCard />,
      },
    ],
  },
  {
    path: "/login-signup",
    element: <AuthForm></AuthForm>,
  },
  {
    path: "/reset-password/:token",
    element: <ResetPassword />,
  },
  {
    path: "/company-login-signup",
    element: <LoginCompanyForm></LoginCompanyForm>,
  },
  {
    path: "/admin-login-signup",
    element: <LoginAdminForm></LoginAdminForm>,
  },
  {
    path: "/user",
    element: <User />,
    children: [
      {
        path: "job-detail",
        element: <JobDetail />,
      },
      {
        path: "your-cv",
        element: <YourCvNav />,
      },
      {
        path: "company-detail",
        element: <CompanyDetail />,
      },
      {
        path: "job-feature",
        element: <FeaturedJobs />,
      },
    ],
  },
  {
    path: "/company",
    element: <Company />,
    children: [
      {
        path: "add-newjob",
        element: <AddNewJob />,
      },
      {
        path: "company-detail",
        element: <MyCompanyDetail />,
      },
      {
        path: "company-job",
        element: <CompanyJobs />,
      },
      {
        path: "candidate-feature",
        element: <FeatureCandidateCard></FeatureCandidateCard>,
      },
      {
        path: "candidate-detail",
        element: <CandidateDetail></CandidateDetail>,
      },
    ],
  },
];

export default routerConfig;
