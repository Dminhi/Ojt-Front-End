import "antd/dist/reset.css";

import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  REQUEST_FORGOTPASSWORD,
} from "../../api/service/authService";
import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";

const LoginAdminForm = () => {
  const [formType, setFormType] = useState("login");
  const [formValues, setFormValues] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleForm = (type) => {
    setFormType(type);
  };

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (
      formType === "register" &&
      formValues.password !== formValues.confirmPassword
    ) {
      message.error("The two passwords do not match!");
      return false;
    }
    return true;
  };

  const onFinish = async () => {
    if (!validateForm()) return;

    if (formType === "register") {
      await handleRegister(formValues);
    } else if (formType === "login") {
      await handleLogin(formValues);
    } else if (formType === "forgotPassword") {
      await handleForgotPassword(formValues);
    }
  };

  const handleRegister = async (values) => {
    try {
      const formRegister = {
        fullname: values.fullname,
        email: values.email,
        password: values.password,
      };
      await AUTH_REGISTER(formRegister);
      message.success("Registration successful!");
    } catch (error) {
      message.error("Registration failed. Please try again.");
    }
  };

  const handleLogin = async (values) => {
    const formLogin = {
      email: values.email,
      password: values.password,
    };
    const response = await AUTH_LOGIN(formLogin);
  };

  const handleForgotPassword = async (values) => {
    try {
      const formForgotPassword = {
        email: values.email,
      };
      await REQUEST_FORGOTPASSWORD(formForgotPassword);
    } catch (error) {}
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-start p-8 h-20">
        <img src="/Logo-login.png" alt="RikkeiEdu" className="h-16" />
      </div>
      <div className="flex flex-grow">
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 p-8">
          <Form
            name={formType}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            className="w-full max-w-sm"
          >
            <h2 className="text-2xl text-start font-bold mb-8 flex justify-start">
              {formType === "register" && "Admin CV Management"}
              {formType === "login" && "Admin CV Management"}
              {formType === "forgotPassword" && "Quên mật khẩu"}
            </h2>

            {formType === "register" && (
              <Form.Item name="fullname">
                <label className="text-lg flex justify-start text-start pb-2 pl-2">
                  Họ tên
                </label>
                <Input
                  name="fullname"
                  placeholder="Họ tên"
                  value={formValues.fullname}
                  onChange={onChange}
                />
              </Form.Item>
            )}

            <Form.Item name="email">
              <label className="text-lg flex justify-start text-start pb-2 pl-2">
                Email
              </label>
              <Input
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={onChange}
              />
            </Form.Item>

            {formType !== "forgotPassword" && (
              <Form.Item name="password">
                <label className="text-lg flex justify-start text-start pb-2 pl-2">
                  Password
                </label>
                <Input.Password
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={onChange}
                />
              </Form.Item>
            )}

            {formType === "register" && (
              <Form.Item
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The two passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <label className="text-lg flex justify-start text-start pb-2 pl-2">
                  Xác nhận mật khẩu
                </label>
                <Input.Password
                  name="confirmPassword"
                  placeholder="Xác nhận mật khẩu"
                  value={formValues.confirmPassword}
                  onChange={onChange}
                />
              </Form.Item>
            )}

            <Form.Item>
              <Button
                type="danger"
                htmlType="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white"
              >
                {formType === "register" && "Tạo tài khoản"}
                {formType === "login" && "Đăng nhập"}
                {formType === "forgotPassword" && "Gửi yêu cầu"}
              </Button>
            </Form.Item>
          </Form>
          <div className="mt-4 text-center w-full max-w-sm">
            {formType === "login" && (
              <>
                <a
                  href="#"
                  className="hover:underline"
                  onClick={() => toggleForm("forgotPassword")}
                >
                  Quên mật khẩu?
                </a>
                <br />
                <span>
                  Bạn không có tài khoản?{" "}
                  <a
                    href="#"
                    className="text-red-700 hover:underline"
                    onClick={() => toggleForm("register")}
                  >
                    Đăng ký ngay
                  </a>
                </span>
              </>
            )}
            {formType === "register" && (
              <span>
                Đã có tài khoản?{" "}
                <a
                  href="#"
                  className="text-red-700 hover:underline"
                  onClick={() => toggleForm("login")}
                >
                  Đăng nhập
                </a>
              </span>
            )}
            {formType === "forgotPassword" && (
              <span>
                Nhớ lại mật khẩu?{" "}
                <a
                  href="#"
                  className="text-red-700 hover:underline"
                  onClick={() => toggleForm("login")}
                >
                  Đăng nhập ngay
                </a>
              </span>
            )}
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center justify-center w-1/2">
          <img src="/Admin.png" alt="Admin Img" className="w-2/3" />
        </div>
      </div>
    </div>
  );
};

export default LoginAdminForm;
