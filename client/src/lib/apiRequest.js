import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://housing-n9hy.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
