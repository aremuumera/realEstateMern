import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://realestatemern-f43d.onrender.com/api",
  // baseURL: "http://localhost:8000",

  withCredentials: true,
});

export default apiRequest;