import axios from "axios";
import authRequests from "../utils/authRequests";
const loginUrl = '/api/login';
const usersUrl = '/api/users';

const login = async (credentials) => {
    const response = await axios.post(loginUrl, credentials);
    return response;
};

const get = async (token) => {
    const response = await authRequests.get(usersUrl,token);
    return response;
};

const post = async (data) => {
    const response = await axios.post(usersUrl, data);
    return response;
}

const verify = async(token) => {
    let response = null;
    try{
        response = await authRequests.get(`${usersUrl}/verify`, token);
    }catch(error){
        console.log(error);
    }
    return response;
}

export default { 
    login,
    get,
    post,
    verify
};