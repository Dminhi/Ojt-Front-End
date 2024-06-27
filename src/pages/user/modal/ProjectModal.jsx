import { Button, DatePicker, Form, Input, Modal, Space } from "antd";

import React from "react";

const { RangePicker } = DatePicker;

const ProjectModal = ({ title, visible, onOk, onCancel }) => {
  return (
    <Modal
      title={<div style={{ textAlign: "center", width: "100%" }}>{title}</div>}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      footer={[
        <Button
          key="submit"
          type="primary"
          onClick={onOk}
          className="bg-red-500 hover:bg-red-700 border-none text-white"
        >
          Cập Nhật
        </Button>,
        <Button key="back" onClick={onCancel}>
          Hủy Bỏ
        </Button>,
      ]}
    >
      <Form layout="vertical">
        <Form.Item
          label="Tên dự án"
          name="school"
          rules={[{ required: true, message: "Vui lòng nhập trường!" }]}
        >
          <Input placeholder="ABC Corp" />
        </Form.Item>
        <Form.Item
          label="Link Demo"
          name="fieldOfStudy"
          rules={[{ required: true, message: "Vui lòng nhập ngành học!" }]}
        >
          <Input placeholder="ABCCorp.com" />
        </Form.Item>
        <Form.Item
          label="Thời gian thực hiện"
          name="studyPeriod"
          rules={[
            { required: true, message: "Vui lòng chọn thời gian học tập!" },
          ]}
        >
          <RangePicker />
        </Form.Item>
        <Form.Item label="Mô tả chi tiết dự án" name="additionalInfo">
          <Input.TextArea placeholder="Hint text" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProjectModal;