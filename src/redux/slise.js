import { createSlice } from '@reduxjs/toolkit';
import { fetchTask, addTask, deleteTask } from 'asuncOperations';

const tasksSlices = createSlice({
  name: 'slise',
  initialState: {
    task: [],
    isLogin: false,
    norm: false,
    error: false,
    addTaskModalIsOpen: false,
  },
  reducers: {
    openModalAdd(state) {
      state.addTaskModalIsOpen = true;
      state.norm = false;
    },
    closeModalAdd(state) {
      state.addTaskModalIsOpen = false;
      state.norm = false;
    },
    isLogin(state) {
      state.isLogin = true;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.task = action.payload;
      })
      .addCase(fetchTask.rejected, state => {
        state.error = true;
      })
      .addCase(addTask.pending, state => {
        state.addTaskModalIsOpen = false;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.norm = false;
        state.task.push(action.payload);
        state.norm = true;
      })
      .addCase(addTask.rejected, state => {
        state.error = true;
        state.norm = false;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.norm = false;
        state.task = state.task.filter(task => task.id !== action.payload.id);
        state.deleteTaskModalIsOpen = false;
        state.norm = true;
      })
      .addCase(deleteTask.rejected, state => {
        state.error = true;
        state.norm = false;
      }),
});

export const tasksSlice = tasksSlices.reducer;
export const { isLogin, openModalAdd, closeModalAdd, openModalDeleteTask } =
  tasksSlices.actions;
