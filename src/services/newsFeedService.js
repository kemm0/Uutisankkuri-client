import authRequests from "../utils/authRequests";

const baseUrl = '/api/newsfeeds';

const get = async (token) => {
    const response = await authRequests.get(baseUrl);
    return response;
};

const getById = async (token, id) => {
    const response = await authRequests.get(`${baseUrl}/${id}`, token);
    return response;
}

const post = async (token, feedData) => {
    const response = await authRequests.post(baseUrl, token, feedData);
    return response;
}

export default {
    get,
    getById,
    post
};
