import axios from 'axios';

const API_URL = "http://localhost:8081/cards";

export const getCards = async (idAccount) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${API_URL}?idAccount=${idAccount}`, config);
  return response.data;
};

export const getCardById = async (id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${API_URL}/${id}`, config);
  return response.data;
};

export const createCard = async (cardData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.post(`${API_URL}`, cardData, config);
  return response.data;
};

export const changeCardStatus = async (cardData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.put(`${API_URL}`, cardData, config);
  return response.data;
};

export const activateCard = async (cardData) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await axios.put(`${API_URL}/activate`, cardData, config);
    return response.data;
  };