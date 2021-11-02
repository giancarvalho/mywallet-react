import axios from "axios";

const axiosBase = axios.create({
    baseURL: "https://mywallet-app-me.herokuapp.com",
});

export default axiosBase;
