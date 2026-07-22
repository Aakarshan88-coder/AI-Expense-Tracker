import axios from "axios";

const API = "http://127.0.0.1:8000";

export const getAIInsights = async () => {

    const token = localStorage.getItem("token");

    const response = await axios.get(
        `${API}/ai/insights`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;

};