import authRequests from "../utils/authRequests";

const baseUrl = '/api/newsfeeds';

const get = async (token, searchParams) => {
    const response = await authRequests.get(baseUrl, token, { 
        params: searchParams
    });
    return response;
};

const getById = async (token, id) => {
    const response = await authRequests.get(`${baseUrl}/${id}`, token);
    return response;
}

export default { 
    get,
    getById
 };