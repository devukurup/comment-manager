import axios from "axios";

const list = () => axios.get("/comments");

const commentsApi = { list };

export default commentsApi;