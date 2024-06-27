import { ArrowRightOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Tag } from "antd";

import React from "react";
import { useNavigate } from "react-router-dom";

const candidates = [
  {
    id: 1, // Add unique ID for each candidate
    name: "Nguyen Van A",
    role: "Front-end",
    level: "Fresher",
    technical: ["REACTJS", "NODEJS"],
    language: "N2",
    location: "Ha Noi, Viet Nam",
  },
  // Add more candidates as needed
];

const FeatureCandidateCard = () => {
  const navigate = useNavigate();

  const handleViewDetail = (id) => {
    navigate(`/company/candidate-detail`);
  };

  return (
    <div className="w-full p-8">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-6">Ứng viên nổi bật</h2>
        <a className="text-red-500" href="/company/candidate-feature">
          Xem thêm {"-->"}
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {candidates.map((candidate) => (
          <Card key={candidate.id} className="shadow-lg">
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
            <div className="flex items-center mb-4">
              <EnvironmentOutlined className="mr-2" />
              <span>{candidate.location}</span>
            </div>
            <Button
              type="primary"
              onClick={() => handleViewDetail(candidate.id)}
            >
              View Details
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeatureCandidateCard;
