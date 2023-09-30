import axios from 'axios';

const API_URL = "http://192.168.10.149:3000/"; // or "http://localhost:3000/"

export default {
    async getASockIdea() {
        try {
            const response = await axios.get(`${API_URL}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching data from backend:", error);
            throw error;
        }
    },
};
