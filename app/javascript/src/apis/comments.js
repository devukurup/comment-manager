import axios from "axios";

const list = () => axios.get("/comments");

const create = payload => axios.post("/comments/", payload);

const update = ({ id, payload }) => axios.put(`/comments/${id}`, payload);

const commentsApi = { list, create, update };

export default commentsApi;