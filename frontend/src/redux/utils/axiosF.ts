import axios from "axios";

const axiosInstance: import("axios").AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/"
});

console.log(axiosInstance.request)
axiosInstance.interceptors.response.use(
  response => {return response.data},
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
