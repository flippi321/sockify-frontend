import axios from 'axios';

const API_URL = "http://localhost:3000/sockIdea"; // or "http://localhost:3000/"

export default {
    async getASockIdea(type, theme) {
        try {
            const sockDescription = {
                type: type,
                theme: theme,
            };
            const response = await axios.post(`${API_URL}`, sockDescription);
            return response.data;
        } catch (error) {
            console.error("Error fetching data from backend:", error);
            throw error;
        }
    },
    async getASockImage(description) {
        try {
            const sockDescription = {
                description: description,
            };
            const response = await axios.post(`${API_URL}/Image`, sockDescription);
            return response.data;
        } catch (error) {
            console.error("Error fetching sock image:", error);
            throw error;
        }
    },
};
