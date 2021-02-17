import axios from "axios";
const API_URL = "http://localhost:3000/iecho?text=";

const getPalindromeContent = (word) => {
  return axios.get(API_URL + word)  
};

export default {
  getPalindromeContent
};