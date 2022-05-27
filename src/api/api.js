import axios from "axios";

const instance = axios.create({
    baseURL : "https://628cca310432524c58e5e052.endapi.io",
    timeout : 5000
})

export default instance;