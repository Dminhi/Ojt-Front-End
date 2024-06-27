import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";

const { TextArea } = Input;
const { Option } = Select;

const JobUpdateForm = ({ visible, onCancel, onUpdate }) => {
  const [form] = Form.useForm();

  const handleUpdate = () => {
    form.validateFields().then((values) => {
      onUpdate(values);
      form.resetFields();
    });
  };

  return (
    <Modal
      title="Cập nhật thông tin công việc"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form form={form} layout="vertical">
        <Form.Item name="jobTitle" label="Tên công việc">
          <Input placeholder="Technical Support" />
        </Form.Item>
        <Form.Item name="jobType" label="Thời gian làm việc">
          <Select placeholder="Full-time">
            <Option value="full-time">Full-time</Option>
            <Option value="part-time">Part-time</Option>
          </Select>
        </Form.Item>
        <Form.Item name="salary" label="Mức lương">
          <Input placeholder="$200 - $1500" />
        </Form.Item>
        <Form.Item name="level" label="Cấp độ chuyên môn">
          <Select placeholder="Senior">
            <Option value="junior">Junior</Option>
            <Option value="mid">Mid</Option>
            <Option value="senior">Senior</Option>
          </Select>
        </Form.Item>
        <Form.Item name="jobDescription" label="Mô tả công việc">
          <TextArea rows={4} placeholder="Hint text" />
        </Form.Item>
        <Form.Item name="jobRequirements" label="Yêu cầu của công việc">
          <TextArea rows={4} placeholder="Hint text" />
        </Form.Item>
        <Form.Item label="Thời gian ứng tuyển">
          <div className="flex justify-between">
            <Form.Item name="startDate" className="w-1/2">
              <DatePicker placeholder="Start Date" />
            </Form.Item>
            <Form.Item name="endDate" className="w-1/2">
              <DatePicker placeholder="End Date" />
            </Form.Item>
          </div>
        </Form.Item>
        <div className="flex justify-end gap-4">
          <Button onClick={onCancel}>Hủy Bỏ</Button>
          <Button
            type="primary"
            className="bg-red-600 hover:bg-red-700 border-none text-white"
            onClick={handleUpdate}
          >
            Cập Nhật
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default JobUpdateForm;
