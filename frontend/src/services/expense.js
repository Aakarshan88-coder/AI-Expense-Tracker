import api from "../api/axios";

const getHeaders = () => {

    const token = localStorage.getItem("token");

    return {

        headers: {

            Authorization: `Bearer ${token}`

        }

    };

};

export const getExpenses = async () => {

    const response = await api.get(

        "/expenses",

        getHeaders()

    );

    return response.data;

};

export const addExpense = async (expense) => {

    const response = await api.post(

        "/expenses",

        expense,

        getHeaders()

    );

    return response.data;

};

export const getExpenseById = async (id) => {

    const response = await api.get(

        `/expenses/${id}`,

        getHeaders()

    );

    return response.data;

};

export const updateExpense = async (id, expense) => {

    const response = await api.put(

        `/expenses/${id}`,

        expense,

        getHeaders()

    );

    return response.data;

};


export const deleteExpense = async (id) => {

    const response = await api.delete(

        `/expenses/${id}`,

        getHeaders()

    );

    return response.data;

};