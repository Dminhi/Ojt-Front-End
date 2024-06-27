import { Button, Card, Tag } from "antd";

import { MapOutlined } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CompanyCard = ({ company }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/user/company-detail`, { state: { company } });
  };

  return (
    <Card className="mb-4" onClick={handleCardClick}>
      <div className="flex items-center mb-2">
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          className="w-20 h-20 mr-4"
        />
        <div>
          <div className="flex gap-4">
            <h3 className="text-lg font-semibold">{company.name}</h3>
            <Tag className="h-6" color="red">
              Featured
            </Tag>
          </div>
          <div className="flex gap-4">
            <MapOutlined></MapOutlined>
            <p className="text-sm text-gray-500">{company.location}</p>
          </div>
        </div>
      </div>
      <Button type="primary" className="bg-blue-100 w-full text-blue-500">
        Open Position ({company.openPositions})
      </Button>
    </Card>
  );
};

export default CompanyCard;
