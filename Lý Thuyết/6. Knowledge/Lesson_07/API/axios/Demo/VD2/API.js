import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `https://5f47b29395646700168d9bd1.mockapi.io`,
    timeout: 5000 // default is `0` (no timeout)
});

export default axiosClient;

