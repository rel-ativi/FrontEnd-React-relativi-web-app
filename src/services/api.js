import axios from "axios";

const api = axios.create({
  baseURL: "https://ballet-class-planner.herokuapp.com"
});

export default api;
