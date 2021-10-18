import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://eb60-122-170-43-248.ngrok.io',
  timeout: 3000,
  timeoutErrorMessage: 'Server down.. Please try after sometime.',
});

export default axiosInstance;
