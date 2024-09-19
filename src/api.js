// src/api.js or similar
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

export const fetchData = async () => {
  const response = await fetch(`${API_BASE_URL}/api/`);

  const data = await response.json();
  console.log('response', response);
  return data;
};
