import authRequests from '../utils/authRequests'

const baseUrl = '/api/feedboards'

const get = async (token) => {
    const response = await authRequests.get(baseUrl, token);
    return response;
};

const getById = async (id, token) => {
    const response = await authRequests.get(`${baseUrl}/${id}`, token);
    return response;
}

const post = async (boardData, token) => {
    const response = await authRequests.post(baseUrl, token, boardData);
    return response;
}

const update = async(id, token, boardData) => {
    const response = await authRequests.put(`${baseUrl}/${id}`, token, boardData);
    return response;
}

const remove = async(id, token) => {
    const response = await authRequests.remove(`${baseUrl}/${id}`, token);
    return response;
}

export default {
    get,
    getById,
    post,
    update,
    remove
}
