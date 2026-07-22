import api from "../api/axios";

export const registerUser = async (user) => {

    const response = await api.post(
        "/user/register",
        user
    );

    return response.data;

};

export const loginUser = async (email, password) => {

    const response = await api.post(
        "/user/login",
        {
            email,
            password
        }
    );

    return response.data;

};