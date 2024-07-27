import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://house-zjit.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
