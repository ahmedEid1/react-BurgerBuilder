import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-burger-3c985-default-rtdb.firebaseio.com/",
});

export default instance;