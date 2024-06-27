import { Button, Form, Modal, Select } from "antd";
import React, { useState } from "react";

const SkillsModal = ({ title, visible, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const [skills, setSkills] = useState([]);

  const addSkill = () => {
    form.validateFields().then((values) => {
      setSkills([...skills, values]);
      form.resetFields();
    });
  };

  return (
    <Modal
      title={<div style={{ textAlign: "center", width: "100%" }}>{title}</div>}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
      width={800}
    >
      <Form form={form} layout="vertical">
        <div className="flex justify-between gap-8 items-center">
          <Form.Item
            name="skill"
            label="Kỹ năng"
            style={{ width: "45%" }}
            rules={[{ required: true, message: "Please select a skill!" }]}
          >
            <Select placeholder="Select a skill">
              <Select.Option value="ReactJS">ReactJS</Select.Option>
              <Select.Option value="NodeJS">NodeJS</Select.Option>
              <Select.Option value="JavaScript">JavaScript</Select.Option>
              {/* Add more options as needed */}
            </Select>
          </Form.Item>
          <Form.Item
            name="level"
            label="Mức độ"
            style={{ width: "45%" }}
            rules={[{ required: true, message: "Please select a level!" }]}
          >
            <Select placeholder="Select a level">
              <Select.Option value="Beginner">Mới bắt đầu</Select.Option>
              <Select.Option value="Intermediate">Trung bình</Select.Option>
              <Select.Option value="Senior">Thành thạo</Select.Option>
              {/* Add more options as needed */}
            </Select>
          </Form.Item>
          <Button
            type="primary"
            className="bg-red-500 hover:bg-red-700 border-none text-white"
            onClick={addSkill}
          >
            Thêm Mới
          </Button>
        </div>
      </Form>
      <div className="mt-4">
        <h3>Thành thạo</h3>
        {skills.filter((skill) => skill.level === "Senior").length === 0 ? (
          <p>Chưa thêm kỹ năng nào</p>
        ) : (
          skills
            .filter((skill) => skill.level === "Senior")
            .map((skill) => <p key={skill.skill}>{skill.skill}</p>)
        )}
        <h3>Trung bình</h3>
        {skills.filter((skill) => skill.level === "Intermediate").length ===
        0 ? (
          <p>Chưa thêm kỹ năng nào</p>
        ) : (
          skills
            .filter((skill) => skill.level === "Intermediate")
            .map((skill) => <p key={skill.skill}>{skill.skill}</p>)
        )}
        <h3>Mới bắt đầu</h3>
        {skills.filter((skill) => skill.level === "Beginner").length === 0 ? (
          <p>Chưa thêm kỹ năng nào</p>
        ) : (
          skills
            .filter((skill) => skill.level === "Beginner")
            .map((skill) => <p key={skill.skill}>{skill.skill}</p>)
        )}
      </div>
      <div className="flex justify-center gap-8 mt-4">
        <Button
          type="primary"
          className="bg-red-500 hover:bg-red-700 border-none text-white"
          onClick={onOk}
        >
          Cập Nhật
        </Button>
        <Button onClick={onCancel}>Hủy Bỏ</Button>
      </div>
    </Modal>
  );
};

export default SkillsModal;
