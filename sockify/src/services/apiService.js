import axios from 'axios';

const API_URL = "http://localhost:3000/";

export default {
    async getASockIdea() {
        try {
            const response = await axios.get(`${API_URL}/path_to_endpoint`);
            return response.data;
        } catch (error) {
            console.error("Error fetching data from backend:", error);
            throw error;
        }
    },
};
