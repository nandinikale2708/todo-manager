import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTasks, updateTask, createTask } from '../api';

// Async Thunks for API calls
export const getTasks = createAsyncThunk('tasks/getTasks', async () => {
  const response = await fetchTasks();
  return response.data;
});

export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
  const response = await createTask(task);
  return response.data;
});

export const modifyTask = createAsyncThunk('tasks/modifyTask', async ({ id, task }) => {
  const response = await updateTask(id, task);
  return response.data;
});

// Slice
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { tasks: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(modifyTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      });
  },
});

export default tasksSlice.reducer;
