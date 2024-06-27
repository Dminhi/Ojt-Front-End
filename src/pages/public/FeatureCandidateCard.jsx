import { ArrowRightOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Avatar, Card, Tag } from "antd";

import React from "react";

const candidates = [
  {
    name: "Nguyen Van A",
    role: "Front-end",
    level: "Fresher",
    technical: ["REACTJS", "NODEJS"],
    language: "N2",
    location: "Ha Noi, Viet Nam",
  },
];

const FeatureCandidateCard = () => {
  return (
    <div className="max-w-screen-lg p-8">
      <h2 className="text-2xl font-bold mb-6">Ứng viên nổi bật</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {candidates.map((candidate, index) => (
          <Card key={index} className="shadow-lg">
            <div className="flex items-center mb-4">
              <Avatar size="large" className="mr-4" />
              <div>
                <h3 className="text-lg font-semibold">{candidate.name}</h3>
                <div className="flex space-x-2">
                  <Tag color="green">{candidate.role}</Tag>
                  <Tag color="blue">{candidate.level}</Tag>
                </div>
              </div>
              <ArrowRightOutlined className="ml-auto text-primary-red text-lg" />
            </div>
            <div className=" flex">
              <p className="text-sm font-medium">Technical in use: </p>
              <div className="flex space-x-2">
                {candidate.technical.map((tech, idx) => (
                  <Tag className="item-center p-0" key={idx} color="green">
                    {tech}
                  </Tag>
                ))}
              </div>
            </div>
            <div className="mb-2 flex">
              <p className="text-sm font-medium">Foreign Language:</p>
              <Tag color="orange">{candidate.language}</Tag>
            </div>
            <div className="flex items-center">
              <EnvironmentOutlined className="mr-2" />
              <span>{candidate.location}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeatureCandidateCard;
