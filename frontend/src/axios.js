import axios from "axios";

const instance = axios.create({
    baseURL: `http://35.193.52.116:8000`,
});

export default instance;