import { Button, DatePicker, Form, Input, Modal } from "antd";

import React from "react";

const { RangePicker } = DatePicker;

const ExperienceModal = ({ title, visible, onOk, onCancel }) => {
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
          label="Công ty"
          name="company"
          rules={[{ required: true, message: "Vui lòng nhập công ty!" }]}
        >
          <Input placeholder="ABC Corp" />
        </Form.Item>
        <Form.Item
          label="Vị trí"
          name="position"
          rules={[{ required: true, message: "Vui lòng nhập vị trí!" }]}
        >
          <Input placeholder="Developer" />
        </Form.Item>
        <Form.Item
          label="Thời gian làm việc"
          name="workPeriod"
          rules={[
            { required: true, message: "Vui lòng chọn thời gian làm việc!" },
          ]}
        >
          <RangePicker />
        </Form.Item>
        <Form.Item label="Thông tin thêm" name="additionalInfo">
          <Input.TextArea placeholder="Hint text" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ExperienceModal;
