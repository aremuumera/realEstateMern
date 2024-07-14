import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://realestatemern-1-qgpr.onrender.com",
  // baseURL: "http://localhost:8000",

  withCredentials: true,
});

export default apiRequest;