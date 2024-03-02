import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const getUsers = () => 
    axios.get(BASE_URL+'/users')
        .then((resp:any)=>resp.data)
        .catch(error=>error);