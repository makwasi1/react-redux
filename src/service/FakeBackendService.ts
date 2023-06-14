import api from "../api";


export const FakeBackendService = {
    getPosts: async () => {
        try {
            const response = await api.get('http://localhost:3000/posts');
            console.log(response.data);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
}