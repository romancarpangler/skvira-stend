import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://643e5d106c30feced82663d6.mockapi.io';

export const fetchTask = createAsyncThunk('fetchTask', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/stend');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addTask = createAsyncThunk('addTask', async (data, thunkAPI) => {
  try {
    const response = await axios.post('/stend', data);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteTask = createAsyncThunk(
  'deleteTask',
  async (Id, thunkAPI) => {
    try {
      const response = await axios.delete(`/stend/${Id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
