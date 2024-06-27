import "antd/dist/reset.css";

import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  COMPANY_REGISTER,
  REQUEST_FORGOTPASSWORD,
} from "../../api/service/authService";
import { Button, Form, Input } from "antd";
import React, { useState } from "react";

const LoginCompanyForm = () => {
  const [formType, setFormType] = useState("login");
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    contactNumber: "",
    companyEmail: "",
    errors: {},
  });

  const toggleForm = (type) => {
    setFormType(type);
    setFormValues({
      email: "",
      password: "",
      confirmPassword: "",
      companyName: "",
      contactNumber: "",
      companyEmail: "",
      errors: {},
    });
  };

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!formValues.email) {
      errors.email = "Vui lòng nhập email!";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email không hợp lệ!";
      isValid = false;
    }

    if (formType !== "forgotPassword" && !formValues.password) {
      errors.password = "Vui lòng nhập mật khẩu!";
      isValid = false;
    } else if (
      formType !== "forgotPassword" &&
      formValues.password.length < 6
    ) {
      errors.password = "Mật khẩu phải có ít nhất 6 ký tự!";
      isValid = false;
    }

    if (formType === "register") {
      if (formValues.password !== formValues.confirmPassword) {
        errors.confirmPassword = "Mật khẩu không khớp!";
        isValid = false;
      }
      if (!formValues.companyName) {
        errors.companyName = "Vui lòng nhập tên công ty!";
        isValid = false;
      }
      if (!formValues.contactNumber) {
        errors.contactNumber = "Vui lòng nhập số điện thoại!";
        isValid = false;
      }
      if (!formValues.companyEmail) {
        errors.companyEmail = "Vui lòng nhập email công ty!";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formValues.companyEmail)) {
        errors.companyEmail = "Email công ty không hợp lệ!";
        isValid = false;
      }
    }

    setFormValues({ ...formValues, errors });
    return isValid;
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
        email: values.email,
        password: values.password,
        nameCompany: values.companyName,
        phone: values.contactNumber,
        emailCompany: values.companyEmail,
      };
      const response = await COMPANY_REGISTER(formRegister);
      console.log(response);
      if (response.status === 201) {
        setFormType("login");
      }
    } catch (error) {
      const errors = {
        ...formValues.errors,
        email: "Email Registration failed. Please try again.",
      };
      setFormValues({ ...formValues, errors });
    }
  };

  const handleLogin = async (values) => {
    const formLogin = {
      email: values.email,
      password: values.password,
    };
    try {
      const response = await AUTH_LOGIN(formLogin);
    } catch (error) {
      const errors = {
        ...formValues.errors,
        email: "Login failed. Please try again.",
      };
      setFormValues({ ...formValues, errors });
    }
  };

  const handleForgotPassword = async (values) => {
    try {
      const formForgotPassword = {
        email: values.email,
      };
      await REQUEST_FORGOTPASSWORD(formForgotPassword);
      setFormType("login");
    } catch (error) {
      const errors = {
        ...formValues.errors,
        email: "Yêu cầu đặt lại mật khẩu thất bại. Vui lòng thử lại.",
      };
      setFormValues({ ...formValues, errors });
    }
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
              Đăng ký để có thể tiếp cận nguồn nhân lực chất lượng cao
            </h2>
            <h2 className="text-2xl text-start font-bold mb-8 flex justify-start">
              {formType === "register" && "Đăng ký"}
              {formType === "login" && "Đăng nhập"}
              {formType === "forgotPassword" && "Quên mật khẩu"}
            </h2>

            {formType === "register" && (
              <>
                <Form.Item name="companyName">
                  <label className="text-lg flex justify-start text-start pb-2 pl-2">
                    Công ty
                  </label>
                  <Input
                    name="companyName"
                    placeholder="Tên công ty"
                    value={formValues.companyName}
                    onChange={onChange}
                  />
                  {formValues.errors.companyName && (
                    <div className="text-red-600">
                      {formValues.errors.companyName}
                    </div>
                  )}
                </Form.Item>

                <Form.Item name="contactNumber">
                  <label className="text-lg flex justify-start text-start pb-2 pl-2">
                    Số điện thoại liên hệ
                  </label>
                  <Input
                    name="contactNumber"
                    placeholder="012345678"
                    value={formValues.contactNumber}
                    onChange={onChange}
                  />
                  {formValues.errors.contactNumber && (
                    <div className="text-red-600">
                      {formValues.errors.contactNumber}
                    </div>
                  )}
                </Form.Item>
                <Form.Item name="companyEmail">
                  <label className="text-lg flex justify-start text-start pb-2 pl-2">
                    Email công ty
                  </label>
                  <Input
                    name="companyEmail"
                    placeholder="abc@company.com"
                    value={formValues.companyEmail}
                    onChange={onChange}
                  />
                  {formValues.errors.companyEmail && (
                    <div className="text-red-600">
                      {formValues.errors.companyEmail}
                    </div>
                  )}
                </Form.Item>
              </>
            )}
            <Form.Item name="email">
              <label className="text-lg flex justify-start text-start pb-2 pl-2">
                Email Đăng nhập
              </label>
              <Input
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={onChange}
              />
              {formValues.errors.email && (
                <div className="text-red-600">{formValues.errors.email}</div>
              )}
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
                {formValues.errors.password && (
                  <div className="text-red-600">
                    {formValues.errors.password}
                  </div>
                )}
              </Form.Item>
            )}

            {formType === "register" && (
              <Form.Item name="confirmPassword">
                <label className="text-lg flex justify-start text-start pb-2 pl-2">
                  Xác nhận mật khẩu
                </label>
                <Input.Password
                  name="confirmPassword"
                  placeholder="Xác nhận mật khẩu"
                  value={formValues.confirmPassword}
                  onChange={onChange}
                />
                {formValues.errors.confirmPassword && (
                  <div className="text-red-600">
                    {formValues.errors.confirmPassword}
                  </div>
                )}
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
          <img src="/Company-Image.png" alt="Auth Img" className="w-2/3" />
        </div>
      </div>
    </div>
  );
};

export default LoginCompanyForm;
