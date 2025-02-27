
// export const BaseURL = "http://localhost:7000/api/"

// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: "http://localhost:7000/api/",
//   withCredentials: true,
// });


export const BaseURL = "https://krist-shopping-server.onrender.com/api"

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://krist-shopping-server.onrender.com/api",
  withCredentials: true,
});
