import axios from "axios"

export const fetchMixLearningFormation = async (categoryId) => {
    const response = await axios.get(`http://127.0.0.1:8000/api/foration/by/category/${categoryId}`);
    return response.data;
}