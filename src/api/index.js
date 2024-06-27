import axios from "axios";

const BASEURL =
    import.meta.env.VITE_BASE_URL;

export const jsonAxios = axios.create({
    baseURL: BASEURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const formDataAxios = axios.create({
    baseURL: BASEURL,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});


const addAuthToken = (instance) => {
    const user = JSON.parse(localStorage.getItem("userAccount")) || {};
    // intercopters request
    instance.interceptors.request.use(
        (config) => {
            const accessToken = user.accessToken;
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

};

addAuthToken(jsonAxios);
addAuthToken(formDataAxios);