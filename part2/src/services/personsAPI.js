import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = async () => {
    const reqeust = axios.get(baseUrl + '/');

    const response = await reqeust;
    return response.data;
}

const create = async newObject => {
    const request = axios.post(baseUrl + '/', newObject);

    const response = await request;
    return response.data;
}

const update = async (id, updatedObject) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedObject);

    const response = await request;
    return response.data;
}

const remove = async id => {
    const request = axios.delete(`${baseUrl}/${id}`, id);

    const response = await request;
    return response.data;
}

export default {getAll, create, update, remove};