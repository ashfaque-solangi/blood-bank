import axios from "axios";
const HOST_URL = "http://localhost:4000";

const postRequest = async (endpoint, params, success, error) => {
  await axios
    .post(`${HOST_URL}/${endpoint}`, params)
    .then((res) => res.data)
    .then(success)
    .catch(error);
};

const getRequest = async (endpoint, success, error) => {
  await axios
    .get(`${HOST_URL}/${endpoint}`)
    .then((res) => res.data)
    .then(success)
    .catch(error);
};

export { postRequest, getRequest };
