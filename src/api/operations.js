import axios from 'axios';

const API_URL = "http://localhost:8081/operations";

export const getOperations = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${API_URL}`, config);
  return response.data;
};

export const getOperationsById = async (id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${API_URL}/${id}`, config);
  return response.data;
};

export const createOperation = async (operationData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.post(`${API_URL}`, operationData, config);
  return response.data;
};
