import { Button, Input } from "antd";

import React from "react";
import { SearchOutlined } from "@ant-design/icons";

const Banner = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex">
          <div>
            <h1 className="text-4xl font-bold text-center mb-4">
              Tìm kiếm công việc phù hợp với năng lực của bạn cùng chúng tôi
            </h1>
            <p className="text-center mb-8">
              Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
              in scelerisque leo, eget sollicitudin velit bestibulum.
            </p>
            <div className="flex w-full max-w-2xl space-x-4 mb-4">
              <Input
                size="large"
                placeholder="Job title, Keyword..."
                prefix={<SearchOutlined />}
                className="flex-1"
              />
              <Input
                size="large"
                placeholder="Your Location"
                className="flex-1"
              />
              <Button type="primary" size="large" className="bg-red-600">
                Find Job
              </Button>
            </div>
            <p className="text-center">
              Suggestion: <span className="text-red-500">Designer</span>,{" "}
              <span className="text-red-500">Programming</span>, Digital
              Marketing, Video, Animation.
            </p>
          </div>
          <div>
            <img src="./Banner.png" alt="" />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-4 gap-4 w-full max-w-4xl">
          <div className="bg-white p-4 shadow-md rounded text-center">
            <div className="text-2xl font-bold">1,75,324</div>
            <div className="text-gray-500">Live Job</div>
          </div>
          <div className="bg-white p-4 shadow-md rounded text-center">
            <div className="text-2xl font-bold">97,354</div>
            <div className="text-gray-500">Companies</div>
          </div>
          <div className="bg-white p-4 shadow-md rounded text-center">
            <div className="text-2xl font-bold">38,47,154</div>
            <div className="text-gray-500">Candidates</div>
          </div>
          <div className="bg-white p-4 shadow-md rounded text-center">
            <div className="text-2xl font-bold">7,532</div>
            <div className="text-gray-500">New Jobs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
