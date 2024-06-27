import "antd/dist/reset.css";

import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  REQUEST_FORGOTPASSWORD,
} from "../../api/service/authService";
import { Button, Form, Input } from "antd";
import React, { useState } from "react";

const Login = ({ onChange, formValues, onFinish }) => (
  <Form
    name="login"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    className="w-full max-w-sm"
  >
    <h2 className="text-2xl text-start font-bold mb-8 flex justify-start">
      Đăng nhập
    </h2>
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
      {formValues.emailError && (
        <div className="text-red-600">{formValues.emailError}</div>
      )}
    </Form.Item>
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
      {formValues.passwordError && (
        <div className="text-red-600">{formValues.passwordError}</div>
      )}
    </Form.Item>
    <Form.Item>
      <Button
        type="danger"
        htmlType="submit"
        className="w-full bg-red-700 hover:bg-red-800 text-white"
      >
        Đăng nhập
      </Button>
    </Form.Item>
  </Form>
);

const Register = ({ onChange, formValues, onFinish }) => (
  <Form
    name="register"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    className="w-full max-w-sm"
  >
    <h2 className="text-2xl text-start font-bold mb-8 flex justify-start">
      Đăng ký
    </h2>
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
      {formValues.emailError && (
        <div className="text-red-600">{formValues.emailError}</div>
      )}
    </Form.Item>
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
      {formValues.passwordError && (
        <div className="text-red-600">{formValues.passwordError}</div>
      )}
    </Form.Item>
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
      {formValues.confirmPasswordError && (
        <div className="text-red-600">{formValues.confirmPasswordError}</div>
      )}
    </Form.Item>
    <Form.Item>
      <Button
        type="danger"
        htmlType="submit"
        className="w-full bg-red-700 hover:bg-red-800 text-white"
      >
        Tạo tài khoản
      </Button>
    </Form.Item>
  </Form>
);

const ForgotPassword = ({ onChange, formValues, onFinish }) => (
  <Form
    name="forgotPassword"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    className="w-full max-w-sm"
  >
    <h2 className="text-2xl text-start font-bold mb-8 flex justify-start">
      Quên mật khẩu
    </h2>
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
      {formValues.emailError && (
        <div className="text-red-600">{formValues.emailError}</div>
      )}
    </Form.Item>
    <Form.Item>
      <Button
        type="danger"
        htmlType="submit"
        className="w-full bg-red-700 hover:bg-red-800 text-white"
      >
        Gửi yêu cầu
      </Button>
    </Form.Item>
  </Form>
);

const AuthForm = () => {
  const [formType, setFormType] = useState("login");
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const toggleForm = (type) => {
    setFormType(type);
    setFormValues({
      email: "",
      password: "",
      confirmPassword: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    });
  };

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    };

    if (!formValues.email) {
      errors.emailError = "Vui lòng nhập email!";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.emailError = "Email không hợp lệ!";
      isValid = false;
    }

    if (formType !== "forgotPassword" && !formValues.password) {
      errors.passwordError = "Vui lòng nhập mật khẩu!";
      isValid = false;
    } else if (
      formType !== "forgotPassword" &&
      formValues.password.length < 6
    ) {
      errors.passwordError = "Mật khẩu phải có ít nhất 6 ký tự!";
      isValid = false;
    }

    if (
      formType === "register" &&
      formValues.password !== formValues.confirmPassword
    ) {
      errors.confirmPasswordError = "The two passwords do not match!";
      isValid = false;
    }

    setFormValues({ ...formValues, ...errors });
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
        confirmPassword: values.confirmPassword,
      };
      await AUTH_REGISTER(formRegister);
      setFormType("login");
    } catch (error) {
      setFormValues({
        ...formValues,
        emailError: "Registration failed. Please try again.",
      });
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
      setFormValues({
        ...formValues,
        emailError: "Login failed. Please try again.",
      });
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
      setFormValues({
        ...formValues,
        emailError: "Yêu cầu đặt lại mật khẩu thất bại. Vui lòng thử lại.",
      });
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-start p-8 h-20">
        <img src="/Logo-login.png" alt="RikkeiEdu" className="h-16" />
      </div>
      <div className="flex flex-grow">
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 p-8">
          <h2 className="text-2xl text-start font-bold mb-8 flex justify-start">
            Cùng Rikkei Education xây dựng hồ sơ nổi bật và nhận được các cơ hội
            sự nghiệp lý tưởng
          </h2>
          {formType === "login" && (
            <Login
              onChange={onChange}
              formValues={formValues}
              onFinish={onFinish}
            />
          )}
          {formType === "register" && (
            <Register
              onChange={onChange}
              formValues={formValues}
              onFinish={onFinish}
            />
          )}
          {formType === "forgotPassword" && (
            <ForgotPassword
              onChange={onChange}
              formValues={formValues}
              onFinish={onFinish}
            />
          )}
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
          <img src="/Login.png" alt="Auth Img" className="w-2/3" />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
