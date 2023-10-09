import axios from 'axios';

const API_URL = "http://localhost:3000/sockIdea"; // or "http://localhost:3000/"

export default {
    async getASockIdea(size, type) {
        try {
            const sockDescription = {
                size: size,
                type: type,
            };
            const response = await axios.post(`${API_URL}`, sockDescription);
            return response.data;
        } catch (error) {
            console.error("Error fetching data from backend:", error);
            throw error;
        }
    },
};
