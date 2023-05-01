import axios from 'axios';

const API_URL = "http://localhost:8081/depositOrders";

export const getDepositOrders = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${API_URL}`, config);
  return response.data;
};

export const getDepositOrderById = async (id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${API_URL}/${id}`, config);
  return response.data;
};

export const getDepositOrderPending = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await axios.get(`${API_URL}/pending`, config);
    return response.data;
  };

export const createDepositOrder = async (orderData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.post(`${API_URL}`, orderData, config);
  return response.data;
};

export const changeDepositOrderStatus = async (orderData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.put(`${API_URL}`, orderData, config);
  return response.data;
};

export const changeDepositOrderSum = async (orderData) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await axios.patch(`${API_URL}/sum`, orderData, config);
    return response.data;
  };