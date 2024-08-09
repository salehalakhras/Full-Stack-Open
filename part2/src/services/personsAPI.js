import axios from "axios";
const baseUrl = "/api/persons";

const getAll = async () => {
    const reqeust = axios.get(baseUrl + '/');
    const response = await reqeust;
    if(response)
        return response.data;
    else
        return [];
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
    return response;
}

export default {getAll, create, update, remove};