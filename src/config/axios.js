import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:8085",
});

export default Api;
