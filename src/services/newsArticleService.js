import authRequests from "../utils/authRequests";

const baseUrl = '/api/newsfeeds';

const get = async (searchParams) => {
    const response = await authRequests.get(baseUrl, { 
        params: searchParams
    });
    return response.data;
};

const getById = async (id) => {
    const response = await authRequests.get(`${baseUrl}/${id}`);
    return response.data;
}

export default { 
    get,
    getById
 };