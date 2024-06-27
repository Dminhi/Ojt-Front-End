import { Avatar, Button, Card, List } from "antd";
import {
  CalendarOutlined,
  DeleteOutlined,
  EditOutlined,
  EnvironmentOutlined,
  MailOutlined,
  ManOutlined,
  PhoneOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";

import CertificateModal from "../../pages/user/modal/CertificateModal";
import EducationModal from "../../pages/user/modal/EducationModal";
import ExperienceModal from "../../pages/user/modal/ExperienceModal";
import ProfileModal from "../../pages/user/modal/ProfileModal";
import ProfilePanel from "./ProfilePanel";
import ProjectModal from "../../pages/user/modal/ProjectModal";
import SkillsModal from "../../pages/user/modal/SkillsModal";
import UpdateInfoModal from "../../pages/user/modal/UpdateInfoModal";

const ProfileUpdate = () => {
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);
  const [isEducationModalVisible, setIsEducationModalVisible] = useState(false);
  const [isExperienceModalVisible, setIsExperienceModalVisible] =
    useState(false);
  const [isProjectModalVisible, setIsProjectModalVisible] = useState(false);
  const [isCertificateModalVisible, setIsCertificateModalVisible] =
    useState(false);
  const [isUpdateInfoModalVisible, setIsUpdateInfoModalVisible] =
    useState(false);
  const [isSkillsModalVisible, setIsSkillsModalVisible] = useState(false);

  const [modalTitle, setModalTitle] = useState("");

  const showModal = (title) => {
    setModalTitle(title);
    switch (title) {
      case "Giới Thiệu Bản Thân":
        setIsProfileModalVisible(true);
        break;
      case "Học Vấn":
        setIsEducationModalVisible(true);
        break;
      case "Kinh Nghiệm Làm Việc":
        setIsExperienceModalVisible(true);
        break;
      case "Dự Án Cá Nhân":
        setIsProjectModalVisible(true);
        break;
      case "Kỹ Năng":
        setIsSkillsModalVisible(true);
        break;
      case "Chứng Chỉ":
        setIsCertificateModalVisible(true);
        break;
      case "Cập Nhật Thông Tin Cá Nhân":
        setIsUpdateInfoModalVisible(true);
        break;
      default:
        break;
    }
  };

  const handleProfileModalOk = () => {
    setIsProfileModalVisible(false);
  };

  const handleProfileModalCancel = () => {
    setIsProfileModalVisible(false);
  };

  const handleEducationModalOk = () => {
    setIsEducationModalVisible(false);
  };

  const handleEducationModalCancel = () => {
    setIsEducationModalVisible(false);
  };

  const handleExperienceModalOk = () => {
    setIsExperienceModalVisible(false);
  };

  const handleExperienceModalCancel = () => {
    setIsExperienceModalVisible(false);
  };

  const handleProjectModalOk = () => {
    setIsProjectModalVisible(false);
  };

  const handleProjectModalCancel = () => {
    setIsProjectModalVisible(false);
  };

  const handleCertificateModalOk = () => {
    setIsCertificateModalVisible(false);
  };

  const handleCertificateModalCancel = () => {
    setIsCertificateModalVisible(false);
  };

  const handleUpdateInfoModalOk = () => {
    setIsUpdateInfoModalVisible(false);
  };

  const handleUpdateInfoModalCancel = () => {
    setIsUpdateInfoModalVisible(false);
  };
  const handleSkillsModalOk = () => {
    setIsSkillsModalVisible(false);
  };

  const handleSkillsModalCancel = () => {
    setIsSkillsModalVisible(false);
  };

  return (
    <div className=" mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Sidebar */}
        <div className="col-span-1">
          <Card className="shadow-lg mb-4">
            <h2 className="text-lg font-bold">
              Nâng cấp hồ sơ xin việc của bạn bằng việc bổ sung các trường sau
            </h2>
            <List
              className="!text-red-500"
              dataSource={[
                { title: "Thêm giới thiệu bản thân" },
                { title: "Thêm học vấn" },
                { title: "Thêm kinh nghiệm làm việc" },
                { title: "Thêm thông tin khác" },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <Button
                    type="link"
                    icon={<PlusOutlined />}
                    className="text-left text-red-500 hover:text-red-700"
                    onClick={() => showModal(item.title)}
                  >
                    {item.title}
                  </Button>
                </List.Item>
              )}
            />
          </Card>
          <Card className="shadow-lg">
            <h2 className="text-lg font-bold mb-4">
              Nâng cấp hồ sơ xin việc của bạn bằng việc bổ sung các trường sau
            </h2>
            <Button
              type="primary"
              className="bg-red-500 hover:bg-red-700 border-none text-white"
            >
              Xem Và Tải CV
            </Button>
          </Card>
        </div>

        {/* Main Content */}
        <div className="col-span-2">
          <Card className="shadow-lg mb-4">
            <div>
              <Button
                type="link"
                icon={<EditOutlined />}
                className="flex justify-end ml-auto text-red-500 hover:text-red-700"
                onClick={() => showModal("Cập Nhật Thông Tin Cá Nhân")}
              />
            </div>
            <div className="flex">
              <Avatar
                size={64}
                src="https://fptsoftware.com/wp-content/uploads/2020/07/logo.png"
                className="mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-bold">Nguyễn Minh Dương</h3>
                <p className="mb-0">Full-Stack Developer</p>
              </div>
            </div>
            <div className="flex pl-24 gap-16">
              <div className="items-center">
                <div className="flex items-center mt-2">
                  <MailOutlined className="mr-2" />
                  <p className="mb-0">Abc@Gmail.Com</p>
                </div>
                <div className="flex items-center mt-2">
                  <CalendarOutlined className="mr-2" />
                  <p className="mb-0">8/3/2023</p>
                </div>
                <div className="flex items-center mt-2">
                  <EnvironmentOutlined className="mr-2" />
                  <p className="mb-0">Địa Chỉ Hiện Tại</p>
                </div>
              </div>
              <div className="flex-grow">
                <div></div>
                <div className="flex items-center mt-2">
                  <PhoneOutlined className="mr-2" />
                  <p className="mb-0">0123456789</p>
                </div>
                <div className="flex items-center mt-2">
                  <ManOutlined className="mr-2" />
                  <p className="mb-0">Giới Tính</p>
                </div>
                <div className="flex items-center mt-2">
                  <UserOutlined className="mr-2" />
                  <p className="mb-0">Trang Cá Nhân</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="max-w-screen-lg mx-auto p-4">
            <ProfilePanel
              title="Giới Thiệu Bản Thân"
              description="Giới thiệu điểm mạnh của bản thân và kinh nghiệm của bạn"
              actions={[
                {
                  icon: <PlusOutlined />,
                  onClick: () => showModal("Giới Thiệu Bản Thân"),
                },
              ]}
            />
            <ProfilePanel
              title="Học Vấn"
              description="Giới thiệu điểm mạnh của bản thân và kinh nghiệm của bạn"
              actions={[
                { icon: <PlusOutlined />, onClick: () => showModal("Học Vấn") },
              ]}
            />
            <ProfilePanel
              title="Kinh Nghiệm Làm Việc"
              description="Giới thiệu điểm mạnh của bản thân và kinh nghiệm của bạn"
              actions={[
                {
                  icon: <PlusOutlined />,
                  onClick: () => showModal("Kinh Nghiệm Làm Việc"),
                },
              ]}
            />
            <ProfilePanel
              title="Kỹ Năng"
              description="Giới thiệu kỹ năng của bạn"
              actions={[
                {
                  icon: <PlusOutlined />,
                  onClick: () => showModal("Kỹ Năng"),
                },
              ]}
            />
            <ProfilePanel
              title="Dự Án Cá Nhân"
              description="Hiện tại"
              actions={[
                {
                  icon: <PlusOutlined />,
                  onClick: () => showModal("Dự Án Cá Nhân"),
                },
                {
                  icon: <EditOutlined />,
                  onClick: () => console.log("Edit Dự Án Cá Nhân"),
                },
                {
                  icon: <DeleteOutlined />,
                  onClick: () => console.log("Delete Dự Án Cá Nhân"),
                },
              ]}
            />
            <ProfilePanel
              title="Chứng Chỉ"
              description="Bổ sung chứng chỉ liên quan đến kỹ năng của bạn"
              actions={[
                {
                  icon: <PlusOutlined />,
                  onClick: () => showModal("Chứng Chỉ"),
                },
              ]}
            />

            <ProfileModal
              title={modalTitle}
              visible={isProfileModalVisible}
              onOk={handleProfileModalOk}
              onCancel={handleProfileModalCancel}
            />

            <EducationModal
              title={modalTitle}
              visible={isEducationModalVisible}
              onOk={handleEducationModalOk}
              onCancel={handleEducationModalCancel}
            />

            <ExperienceModal
              title={modalTitle}
              visible={isExperienceModalVisible}
              onOk={handleExperienceModalOk}
              onCancel={handleExperienceModalCancel}
            />

            <ProjectModal
              title={modalTitle}
              visible={isProjectModalVisible}
              onOk={handleProjectModalOk}
              onCancel={handleProjectModalCancel}
            />

            <CertificateModal
              title={modalTitle}
              visible={isCertificateModalVisible}
              onOk={handleCertificateModalOk}
              onCancel={handleCertificateModalCancel}
            />

            <UpdateInfoModal
              title={modalTitle}
              visible={isUpdateInfoModalVisible}
              onOk={handleUpdateInfoModalOk}
              onCancel={handleUpdateInfoModalCancel}
            />
            <SkillsModal
              title={modalTitle}
              visible={isSkillsModalVisible}
              onOk={handleSkillsModalOk}
              onCancel={handleSkillsModalCancel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
