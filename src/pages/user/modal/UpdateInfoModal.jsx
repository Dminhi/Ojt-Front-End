import { Button, DatePicker, Form, Input, Modal } from "antd";
import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";

import React from "react";

const UpdateInfoModal = ({ title, visible, onOk, onCancel }) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
    >
      <Form layout="vertical">
        <div className="text-center">
          <img
            src="https://fptsoftware.com/wp-content/uploads/2020/07/logo.png"
            alt="Logo"
            className="mb-4 mx-auto"
          />
          <Button icon={<UploadOutlined />} className="mr-2">
            Sửa
          </Button>
          <Button icon={<DeleteOutlined />} type="danger">
            Xóa
          </Button>
        </div>
        <Form.Item
          label="Họ và tên"
          name="fullName"
          rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
        >
          <Input placeholder="ABC" />
        </Form.Item>
        <Form.Item
          label="Chức danh"
          name="title"
          rules={[{ required: true, message: "Vui lòng nhập chức danh!" }]}
        >
          <Input placeholder="Chức danh" />
        </Form.Item>
        <Form.Item
          label="Địa chỉ"
          name="address"
          rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
        >
          <Input placeholder="Địa chỉ" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Vui lòng nhập email!" }]}
        >
          <Input placeholder="email@example.com" />
        </Form.Item>
        <Form.Item
          label="SDT"
          name="phone"
          rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}
        >
          <Input placeholder="0123456789" />
        </Form.Item>
        <Form.Item
          label="DOB"
          name="dob"
          rules={[{ required: true, message: "Vui lòng nhập ngày sinh!" }]}
        >
          <DatePicker format="DD/MM/YYYY" />
        </Form.Item>
        <Form.Item
          label="Giới tính"
          name="gender"
          rules={[{ required: true, message: "Vui lòng nhập giới tính!" }]}
        >
          <Input placeholder="Nam" />
        </Form.Item>
        <Form.Item
          label="Trang cá nhân"
          name="personalPage"
          rules={[{ required: true, message: "Vui lòng nhập trang cá nhân!" }]}
        >
          <Input placeholder="Link trang cá nhân" />
        </Form.Item>
        <div className="text-center">
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            className="bg-red-500 hover:bg-red-700 border-none text-white mr-2"
          >
            Cập Nhật
          </Button>
          <Button key="back" onClick={onCancel}>
            Hủy Bỏ
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default UpdateInfoModal;
