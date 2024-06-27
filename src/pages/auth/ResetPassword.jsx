import "antd/dist/reset.css";

import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { SET_NEWPASSWORD } from "../../api/service/authService";

const ResetPassword = () => {
  const { token } = useParams();
  const [formValues, setFormValues] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onFinish = async () => {
    const { newPassword, confirmPassword } = formValues;
    if (newPassword !== confirmPassword) {
      message.error("The two passwords that you entered do not match!");
      return;
    }
    const response = await SET_NEWPASSWORD({ newPassword }, token);
    if (response) {
      message.success("Password reset successful!");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Please fill in the required fields.");
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-start p-8 h-20">
        <img src="/Logo-login.png" alt="RikkeiEdu" className="h-16" />
      </div>
      <div className="flex flex-grow">
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 p-8">
          <Form
            name="resetPassword"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="w-full max-w-sm"
          >
            <h2 className="text-2xl text-start font-bold mb-8 flex justify-start">
              Cùng Rikkei Education xây dựng hồ sơ nổi bật và nhận được các cơ
              hội sự nghiệp lý tưởng
            </h2>

            <Form.Item name="newPassword">
              <label className="text-lg flex justify-start text-start pb-2 pl-2">
                New Password
              </label>
              <Input.Password
                name="newPassword"
                placeholder="New Password"
                value={formValues.newPassword}
                onChange={onChange}
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={["newPassword"]}
              rules={[
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <label className="text-lg flex justify-start text-start pb-2 pl-2">
                Confirm Password
              </label>
              <Input.Password
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formValues.confirmPassword}
                onChange={onChange}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="danger"
                htmlType="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white"
              >
                Reset Password
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="hidden md:flex flex-col items-center justify-center w-1/2">
          <img src="/Login.png" alt="Auth Img" className="w-2/3" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
