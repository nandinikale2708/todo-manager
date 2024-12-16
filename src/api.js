import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

// Fetch all tasks
export const fetchTasks = async () => {
  return axios.get(BASE_URL);
};

// Update a specific task
export const updateTask = async (id, data) => {
  return axios.put(`${BASE_URL}/${id}`, data);
};

// Create a new task
export const createTask = async (data) => {
  return axios.post(BASE_URL, data);
};
