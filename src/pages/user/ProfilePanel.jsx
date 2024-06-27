import { Button, Card } from "antd";

import React from "react";

const ProfilePanel = ({ title, description, actions }) => {
  return (
    <Card className="shadow-lg mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="mb-0 text-gray-500">{description}</p>
        </div>
        <div className="flex items-center">
          {actions.map((action, index) => (
            <Button
              key={index}
              type="link"
              icon={action.icon}
              onClick={action.onClick}
              className="text-red-500 hover:text-red-700"
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProfilePanel;
