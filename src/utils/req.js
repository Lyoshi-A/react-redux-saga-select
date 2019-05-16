import axios from "axios";

const service = () => {
  axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
  // if (localStorage.passport) {
  //   // Apply authorization token to every request if logged in
  //   axios.defaults.headers.common["Authorization"] = 'Bearer '+localStorage.passport;
  //   axios.defaults.headers.common["Content-Type"] = 'application/x-www-form-urlencoded';
  //   axios.defaults.headers.common["Accept"] = 'application/json';
  // } else {
  //   // Delete auth header
  //   delete axios.defaults.headers.common["Authorization"];
  //   delete axios.defaults.headers.common["Accept"];
  //   delete axios.defaults.headers.common["Content-Type"];
  // }
  return axios;
}

export default service;