import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://housing-8ogg.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
