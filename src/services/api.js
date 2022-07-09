import axios from "axios";

const API = axios.create({
  baseURL: "https://rel-ativi.herokuapp.com/",
  timeout: 15000,
});

export default API;
