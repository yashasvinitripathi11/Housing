import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://housing-4.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
