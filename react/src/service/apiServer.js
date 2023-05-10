import axios from "axios";

const apiUrl = "http://localhost:8000/api";
export let token = "";
export const login = async (email, password) => {
  const response = await axios.post(`${apiUrl}/users/login`, {
    email,
    password,
  });
  return response.data;
};

export const qrlogin = async (qr) => {
  const response = await axios.post(`${apiUrl}/qr-login`, {
    qrcode: qr,
  });
  // console.log("header req ", response.data.token);
  token = response.data.token;
  return response.data.token;
};

export const getFoods = async (token) => {
  const response = await axios.get(`${apiUrl}/foods`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
export const createFood = async (food, token) => {
  const response = await axios.post(`${apiUrl}/foods`, food, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateFood = async (id, updates, token) => {
  const response = await axios.put(`${apiUrl}/foods/${id}`, updates, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteFood = async (id, token) => {
  const response = await axios.delete(`${apiUrl}/foods/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getCategory = async (token) => {
  const response = await axios.get(`${apiUrl}/menu/categories`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
