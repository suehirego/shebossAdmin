// import axios from 'axios'

// export const axiosInstance = axios.create({
//       baseURL: "https://shebossapi.herokuapp.com/api/",
      
// });

import axios from 'axios'

const BASE_URL = "https://shebossapi.herokuapp.com/api/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;


export const axiosInstance = axios.create({
      baseURL: BASE_URL,
      header: { token: `Bearer ${TOKEN}` },
});



