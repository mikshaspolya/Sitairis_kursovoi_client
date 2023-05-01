import axios from "axios";

const API_URL = "http://localhost:8081/users";

export const getUser = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${API_URL}/me`, config);
  return response.data;
};

export const getUsers = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${API_URL}`, config);
  return response.data;
};

export const getUserById = async (id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${API_URL}/${id}`, config);
  return response.data;
};

export const getUserAccounts = async (uid) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${API_URL}/${uid}/accounts`, config);
  return response.data;
};

export const getUserOperations = async (uid) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${API_URL}/${uid}/operations`, config);
  return response.data;
};

export const getUserLoanOrders = async (uid) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${API_URL}/${uid}/loanOrders`, config);
  return response.data;
};

export const getUserDepositOrders = async (uid) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${API_URL}/${uid}/depositOrders`, config);
  return response.data;
};

export const updateUser = async (id, userData) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await axios.put(`${API_URL}/${id}`, userData, config);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUserStatus = async (uid, status) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.put(
    `${API_URL}/${uid}/status?newStatus=${status}`,
    status,
    config
  );
  return response.data;
};

export const createUser = async (userData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.post(`${API_URL}`, userData, config);
  return response.data;
};

export const deleteUser = async (id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.delete(`${API_URL}/${id}`, config);
  return response.data;
};
