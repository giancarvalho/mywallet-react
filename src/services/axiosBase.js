import axios from "axios";

const axiosBase = axios.create({
    baseURL: "http://localhost:4000",
});

//https://mywallet-app-me.herokuapp.com

export default axiosBase;
