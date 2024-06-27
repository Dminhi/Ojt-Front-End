import { jsonAxios } from "..";
import { notify } from "../../utils/notification";

export const AUTH_LOGIN = async (formLogin) => {
    try {
        console.log(formLogin);
        const response = await jsonAxios.post("/api.myservice.com/v1/auth/sign-in", formLogin)
        notify("success", response.data.message)
        return response;
    } catch (error) {
        console.log(error)
        notify("error", error.response.data.FieldsError.message)
    }
}
export const AUTH_REGISTER = async (formRegister) => {
    try {
        console.log(formRegister);
        const response = await jsonAxios.post("/api.myservice.com/v1/auth/sign-up", formRegister)
        notify("success", response.data.message)
        return response;
    } catch (error) {
        console.log(error);
        notify("error", error.response.data.message)
    }
}

export const COMPANY_REGISTER = async (formRegister) => {
    try {
        console.log(formRegister);
        const response = await jsonAxios.post("/api.myservice.com/v1/auth/sign-up/company", formRegister)
        notify("success", response.data.message)
        return response;
    } catch (error) {
        console.log(error);
        notify("error", error.response.data.message)
    }
}

export const REQUEST_FORGOTPASSWORD = async (formForgotPassword) => {
    try {
        const response = await jsonAxios.post("/api.myservice.com/v1/auth/reset-password-request", formForgotPassword)
        console.log(response);
        notify("success", response.data)
        return response;
    } catch (error) {
        notify("error", error.response.data.FieldsError.message)
    }

}

export const SET_NEWPASSWORD = async (formResetPassword, token) => {
    try {
        console.log(formResetPassword, token);
        const response = await jsonAxios.post(`/api.myservice.com/v1/auth/reset-password?token=${token}`, formResetPassword);
        return response;
    } catch (error) {
        notify("error", error.response.data)
    }
}