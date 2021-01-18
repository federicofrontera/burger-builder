import axios from "axios";

const instance = axios.create({
   baseURL: 'https://react-burger-builder-71d68-default-rtdb.firebaseio.com/'
});

export default instance;