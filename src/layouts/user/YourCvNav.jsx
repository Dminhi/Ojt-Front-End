import ProfileUpdate from "../../pages/user/ProfileUpdate";
import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const YourCvNav = () => {
  return (
    <div className="p-4 bg-white">
      <Tabs defaultActiveKey="1" tabBarGutter={16}>
        <TabPane tab="Hồ sơ" key="1">
          <ProfileUpdate></ProfileUpdate>
        </TabPane>
        <TabPane tab="Quản lý CV" key="2"></TabPane>
        <TabPane tab="Tiêu chí tìm việc" key="3"></TabPane>
      </Tabs>
    </div>
  );
};

export default YourCvNav;
