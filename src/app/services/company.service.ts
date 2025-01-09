import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_APP_BASE_API_URL as string;

export const getCompanies = async () => {
  const result = await axios.get(`${API_BASE_URL}/company`);
  return result.data;
};
