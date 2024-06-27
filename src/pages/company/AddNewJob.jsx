import { Button, DatePicker, Input, Select } from "antd";

import React from "react";

const { TextArea } = Input;
const { Option } = Select;

const AddNewJob = () => {
  return (
    <div className="p-8 bg-white shadow-md rounded-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Thêm việc làm mới</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
        <div>
          <label className="block text-gray-700">Tên công việc</label>
          <Input placeholder="ABC" />
        </div>
        <div>
          <label className="block text-gray-700">Thời gian làm việc</label>
          <Select defaultValue="Full-time" className="w-full">
            <Option value="Full-time">Full-time</Option>
            <Option value="Part-time">Part-time</Option>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
        <div>
          <label className="block text-gray-700">Địa điểm</label>
          <Select defaultValue="Hà Nội" className="w-full">
            <Option value="Hà Nội">Hà Nội</Option>
            <Option value="TP HCM">TP HCM</Option>
            <Option value="Đà Nẵng">Đà Nẵng</Option>
          </Select>
        </div>
        <div>
          <label className="block text-gray-700">Cấp độ</label>
          <Select defaultValue="Senior" className="w-full">
            <Option value="Junior">Junior</Option>
            <Option value="Mid">Mid</Option>
            <Option value="Senior">Senior</Option>
          </Select>
        </div>
      </div>
      <div className="bg-gray-100 p-6 mb-6 rounded-md">
        <h3 className="text-lg font-semibold mb-4">Thông tin nâng cao</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <label className="block text-gray-700">Mức lương</label>
            <Input placeholder="$200 - $1500" />
          </div>
          <div>
            <label className="block text-gray-700">Thời hạn ứng tuyển</label>
            <DatePicker.RangePicker className="w-full" />
          </div>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700">Mô tả công việc</label>
        <TextArea rows={4} placeholder="Hint text" />
      </div>
      <Button type="primary" className="bg-red-600">
        Thêm Mới
      </Button>
    </div>
  );
};

export default AddNewJob;
