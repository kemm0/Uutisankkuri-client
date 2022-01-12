import authRequests from '../utils/authRequests'

const baseUrl = '/api/feedboards'

const get = async () => {
    const response = await authRequests.get(baseUrl);
    return response.data;
};

const getById = async (id) => {
    const response = await authRequests.get(`${baseUrl}/${id}`);
    return response.data;
}

const post = async (boardData) => {
    const response = await authRequests.post(baseUrl, boardData);
    return response.data;
}

const update = async(id, boardData) => {
    const response = await authRequests.put(`${baseUrl}/${id}`, boardData);
    return response.data;
}

const remove = async(id) => {
    const response = await authRequests.remove(`${baseUrl}/${id}`);
    return response.data;
}

export default {
    get,
    getById,
    post,
    update,
    remove
}
