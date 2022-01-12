import axios from "axios";

const authToken = '';

const setAuthToken = (token) => {
    authToken = token;
}

const authConfig = (config) => {
    return {
        ...config,
        headers: { Authorization: `bearer ${authToken}` }
    };
}

const get = async (url, config) => {
    const response = await axios.get(url, authConfig(config));
    return response;
};

const post = async (url, data, config) => {
    const response = await axios.post(url, data, authConfig(config));
    return response;
};

const update = async(url, data, config) => {
    const response = await axios.put(url, data, authConfig(config));

    return response;
};

const remove = async(url, config) => {
    const response = await axios.delete(url, authConfig(config));
};

export default {
    setAuthToken,
    get,
    post,
    update,
    remove
}