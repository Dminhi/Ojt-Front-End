import { Card, Tag } from "antd";

import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const getTypeColor = (type) => {
    switch (type) {
      case "FULL-TIME":
        return "green";
      case "PART-TIME":
        return "yellow";
      case "INTERNSHIP":
        return "blue";
      default:
        return "gray";
    }
  };

  const handleCardClick = () => {
    navigate("/user/job-detail", { state: { job } });
  };

  return (
    <Card className="mb-4 cursor-pointer" onClick={handleCardClick}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{job.title}</h3>
      </div>
      <div className="flex">
        <Tag color={getTypeColor(job.type)}>{job.type}</Tag>
        <p className="text-sm text-gray-500 mb-1">Salary: {job.salary}</p>
      </div>
      <div className="flex gap-4 mt-4">
        <div>
          <img
            className="h-[40px] w-[40px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6WwgH7Nl5_AW9nDCnR2Ozb_AU3rkIbSJdAg&s"
            alt=""
          />
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">{job.company}</p>
          <p className="text-sm text-gray-500">{job.location}</p>
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
