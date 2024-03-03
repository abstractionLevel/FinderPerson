import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const getUsers = () => 
    axios.get(BASE_URL+'/users')
        .then((resp:any)=>resp.data)
        .catch(error=>error);

export const getUserByName = (name:string) =>
    axios.get(BASE_URL + '/users?name='+name)
        .then((resp:any)=>resp.data)
        .catch(error=>error);