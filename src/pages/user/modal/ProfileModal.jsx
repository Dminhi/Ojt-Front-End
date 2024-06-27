import { Button, Form, Input, Modal } from "antd";

import React from "react";

const ProfileModal = ({ title, visible, onOk, onCancel }) => {
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
      <Form>
        <Form.Item
          name="description"
          rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
        >
          <label>Mô tả về bản thân, các kĩ năng của mình...</label>
          <Input.TextArea placeholder="Hint text" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProfileModal;
