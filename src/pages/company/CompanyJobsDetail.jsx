import { Button, Tag } from "antd";
import {
  CalendarOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  MailOutlined,
  ShareAltOutlined,
  ToolOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";

import { CopyAllOutlined } from "@mui/icons-material";
import JobUpdateForm from "./JobUpdateForm";
import { useLocation } from "react-router-dom";

const CompanyJobDetail = () => {
  const { state } = useLocation();
  const jobData = state?.job || {
    title: "Job Title",
    company: "Company Name",
    type: "Job Type",
    description: "Job Description",
    salary: "Salary",
    location: "Location",
    jobPosted: "Posted Date",
    jobExpire: "Expire Date",
    level: "Level",
    experience: "Experience",
    education: "Education",
    benefits: [],
    requirements: [],
    desirable: [],
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleUpdate = (values) => {
    console.log("Updated values:", values);
    setIsModalVisible(false);
  };

  return (
    <div className="items-center w-full text-light-text">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/FPT_logo_2010.svg/1200px-FPT_logo_2010.svg.png"
            alt="Company Logo"
            className="h-12 mr-4"
          />
          <div>
            <h1 className="text-3xl text-black font-bold mb-0">
              {jobData.title}
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-lg text-gray-600">
                at {jobData.company}
              </span>
              <Tag color="green">{jobData.type}</Tag>
              <Tag color="red">Featured</Tag>
            </div>
          </div>
        </div>
        <Button
          size="large"
          className="bg-red-700 text-white items-center"
          onClick={showModal}
        >
          Chỉnh sửa
        </Button>
      </div>
      <div className="mt-6 flex flex-col md:flex-row">
        <div className="md:w-2/3 md:pr-4">
          <div className=" p-4 mb-6">
            <h3 className="text-xl text-black font-semibold mb-4">
              Job Description
            </h3>
            <p className="mb-4 text-slate-500">{jobData.description}</p>
          </div>
          <div className="p-4 mb-6">
            <h3 className="text-xl text-black font-semibold mb-4">
              Requirements
            </h3>
            <ul className="list-disc text-slate-500 list-inside">
              {(jobData.requirements || []).map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
          <div className=" p-4 mb-6">
            <h3 className="text-xl text-black font-semibold mb-4">Desirable</h3>
            <ul className="list-disc text-slate-500 list-inside">
              {(jobData.desirable || []).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className=" p-4 mb-6">
            <h3 className="text-xl text-black font-semibold mb-4">Benefits</h3>
            <ul className="list-disc text-slate-500 list-inside">
              {(jobData.benefits || []).map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:w-2/5 md:pl-4">
          <div className="mb-6">
            <div className="flex justify-between items-center border p-4 rounded-lg shadow-md bg-white">
              <div className="text-center">
                <p className="text-black font-semibold">Salary (USD)</p>
                <span className="text-xl text-green-500">{jobData.salary}</span>
                <p className="text-gray-500">Yearly salary</p>
              </div>
              <div className="border-l h-16 mx-4"></div> {/* Divider */}
              <div className="text-center">
                <EnvironmentOutlined className="text-3xl text-red-700 mb-2" />
                <p className="text-black font-semibold">Job Location</p>
                <span className="text-lg text-gray-500">
                  {jobData.location}
                </span>
              </div>
            </div>
            <div className="border items-center mt-4 p-4">
              <p className="text-lg text-black">Job Overview</p>
              <div className="flex gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <CalendarOutlined className="text-xl text-red-700 mr-2" />
                  </div>
                  <div className="flex items-center mb-4">
                    <span className="text-lg text-slate-500" text-black>
                      Job Posted:{" "}
                    </span>
                  </div>
                  <div className="flex text-black items-center mb-4">
                    {jobData.jobPosted}
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <CalendarOutlined className="text-xl  text-red-700 mr-2" />
                  </div>
                  <div className="flex items-center mb-4">
                    <span className="text-lg text-slate-500">Job Expire: </span>
                  </div>
                  <div className="flex text-black items-center mb-4">
                    {jobData.jobExpire}
                  </div>
                </div>
                <div>
                  <div className="flex text-black items-center mb-4">
                    <CalendarOutlined className="text-xl text-red-700 mr-2" />
                  </div>
                  <div className="flex items-center mb-4">
                    <span className="text-lg text-slate-500">Level: </span>
                  </div>
                  <div className="flex text-black items-center mb-4">
                    {jobData.level}
                  </div>
                </div>
              </div>
              <div className="flex gap-8">
                <div>
                  <div>
                    <ToolOutlined className="text-xl text-red-700 mr-2" />
                  </div>
                  <div>
                    <span className="text-lg text-slate-500">Experience:</span>
                  </div>
                  <div className="text-black">{jobData.experience}</div>
                </div>
                <div>
                  <div className="items-center mb-4">
                    <div>
                      <ToolOutlined className="text-xl text-red-700 mr-2" />
                    </div>
                    <div>
                      <span className="text-lg text-slate-500">Education:</span>
                    </div>
                    <div className="text-black">{jobData.education}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" border p-4 mb-6">
            <h3 className="text-xl text-black font-semibold mb-4">
              Share this job:
            </h3>
            <div className="flex space-x-4">
              <Button
                className="text-red-700 bg-red-200"
                icon={<CopyAllOutlined />}
                shape="circle"
              />
              <Button
                className="text-red-700 bg-red-200"
                icon={<LinkedinOutlined />}
                shape="circle"
              />
              <Button
                className="text-red-700 bg-red-200"
                icon={<FacebookOutlined />}
                shape="circle"
              />
              <Button
                className="text-red-700 bg-red-200"
                icon={<TwitterOutlined />}
                shape="circle"
              />
              <Button
                className="text-red-700 bg-red-200"
                icon={<MailOutlined />}
                shape="circle"
              />
              <Button
                className="text-red-700 bg-red-200"
                icon={<ShareAltOutlined />}
                shape="circle"
              />
            </div>
          </div>
        </div>
      </div>
      <JobUpdateForm
        visible={isModalVisible}
        onCancel={handleCancel}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default CompanyJobDetail;
