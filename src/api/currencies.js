import axios from "axios";

const API_URL = "http://";

export const getCurrenciesForToday = async () => {
  const response = await axios.get(
    `https://www.nbrb.by/api/exrates/rates?periodicity=0`
  );
  return response.data;
};

export const getCurrency = async (id) => {
  const endDate = new Date().toISOString().slice(0, 10);
  const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const response = await axios.get(`https://www.nbrb.by/api/exrates/rates/dynamics/${id}?startdate=${startDate}&enddate=${endDate}`);
  return response.data;
};