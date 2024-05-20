import axios from "axios";
const HOST_URL = "http://localhost:4000";

const getRequest = async (endpoint, success) => {
  await axios
    .get(`${HOST_URL}/${endpoint}`)
    .then((res) => res.data)
    .then(success)
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
};

const postRequest = async (endpoint, params, success) => {
  await axios
    .post(`${HOST_URL}/${endpoint}`, params)
    .then((res) => res.data)
    .then(success)
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
};

const updateRequest = async (endpoint, params, success) => {
  await axios
    .put(`${HOST_URL}/${endpoint}`, params)
    .then((res) => res.data)
    .then(success)
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
};

export { getRequest, postRequest, updateRequest };
