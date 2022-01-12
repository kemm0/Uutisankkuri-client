import axios from "axios";
import authRequests from "../utils/authRequests";
const loginUrl = '/api/login';
const usersUrl = '/api/users';

const login = async (credentials) => {
    const response = await axios.post(loginUrl, credentials);
    return response.data;
};

const get = async () => {
    const response = await authRequests.get(usersUrl);
    return response.data
};

export default { 
    login,
    get
};