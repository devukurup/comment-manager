import axios from "axios";

const list = () => axios.get("/comments");

const create = payload => axios.post("/comments/", payload)

const commentsApi = { list, create };

export default commentsApi;