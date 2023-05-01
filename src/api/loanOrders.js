import axios from 'axios';

const API_URL = "http://localhost:8081/loanOrders";

export const getLoanOrders = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${API_URL}`, config);
  return response.data;
};

export const getLoanOrderById = async (id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${API_URL}/${id}`, config);
  return response.data;
};

export const getLoanOrderPending = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await axios.get(`${API_URL}/pending`, config);
    return response.data;
  };

export const createLoanOrder = async (orderData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.post(`${API_URL}`, orderData, config);
  return response.data;
};

export const changeLoanOrderStatus = async (orderData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.put(`${API_URL}`, orderData, config);
  return response.data;
};

export const changeLoanOrderSum = async (orderData) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await axios.patch(`${API_URL}/sum`, orderData, config);
    return response.data;
  };