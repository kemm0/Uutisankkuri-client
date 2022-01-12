import authRequests from "../utils/authRequests";

const baseUrl = '/api/newsfeeds';

const get = async () => {
    const response = await authRequests.get(baseUrl);
    return response.data;
};

const getById = async (id) => {
    const response = await authRequests.get(`${baseUrl}/${id}`,);
    return response.data;
}

const post = async (feedData) => {
    const response = await authRequests.post(baseUrl, feedData);
    return response.data;
}

export default {
    get,
    getById,
    post
};
