import axios from 'axios';

const API_URL = "http://localhost:3000/api";  // e.g., "http://localhost:3000/api"

export default {
    async fetchData() {
        try {
            const response = await axios.get(`${API_URL}/path_to_endpoint`);
            return response.data;
        } catch (error) {
            console.error("Error fetching data from backend:", error);
            throw error;
        }
    },

    // Add more API methods as needed
};
