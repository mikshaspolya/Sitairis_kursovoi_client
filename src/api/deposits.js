import axios from 'axios';

const API_URL = "http://localhost:8081/deposits";

export const getDeposits = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${API_URL}`, config);
  return response.data;
};

export const getDepositById = async (id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${API_URL}/${id}`, config);
  return response.data;
};

export const createDeposit = async (depositData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.post(`${API_URL}`, depositData, config);
  return response.data;
};

export const deleteDeposit = async (id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.delete(`${API_URL}/${id}`, config);
  return response.data;
};