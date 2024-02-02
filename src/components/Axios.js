import axios from 'axios'
import Cookies from 'js-cookie';

const baseUrl = 'http://127.0.0.1:8000/'
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const csrftoken = Cookies.get('csrftoken');

const AxiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    withXSRFToken: true,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        'X-CSRFToken': csrftoken,
    },


})

export default AxiosInstance
