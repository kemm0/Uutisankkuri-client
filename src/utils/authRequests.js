import axios from "axios";

const authConfig = (token, config) => {
    return {
        ...config,
        headers: { Authorization: `bearer ${token}` }
    };
}

const get = async (url, token, config) => {
    const response = await axios.get(url, authConfig(token, config));
    return response;
};

const post = async (url, token, data, config) => {
    const response = await axios.post(url, data, authConfig(token, config));
    return response;
};

const update = async(url, token, data, config) => {
    const response = await axios.put(url, data, authConfig(token, config));

    return response;
};

const remove = async(url, token, config) => {
    const response = await axios.delete(url, authConfig(token, config));
};

export default {
    get,
    post,
    update,
    remove
}