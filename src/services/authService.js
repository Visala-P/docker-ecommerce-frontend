import axios from "axios";

<<<<<<< HEAD
// Use relative path; nginx will proxy /auth to backend
const API_URL = "/auth";
=======
const API_URL = "http://localhost:8081/auth";
>>>>>>> ac41b796bdb220c43cf9e6592c63299e02ba9c1d

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  localStorage.setItem("token", response.data);
  return response.data;
};

export const signup = async (username, email, password) => {
  return axios.post(`${API_URL}/signup`, { username, email, password });
};

export const logout = () => {
  localStorage.removeItem("token");
};
