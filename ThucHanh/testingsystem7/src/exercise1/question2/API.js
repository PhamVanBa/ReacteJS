import axios from "axios";

const axiosClient = axios.create({
  baseURL: `https://6256a008e07d2c9a6709d7a1.mockapi.io`,
  timeout: 5000, // default is `0` (no timeout)
});

export default axiosClient;
