import { createSlice } from '@reduxjs/toolkit';
import { fetchTask, addTask, deleteTask } from 'asuncOperations';

const tasksSlices = createSlice({
  name: 'slise',
  initialState: {
    task: [],
    isLogin: false,
    isLoading: false,
    addTaskModalIsOpen: false,
    deleteTaskModalIsOpen: false,
  },
  reducers: {
    openModalAdd(state) {
      state.addTaskModalIsOpen = true;
    },
    closeModalAdd(state) {
      state.addTaskModalIsOpen = false;
    },
    openModalDeleteTask(state) {
      state.deleteTaskModalIsOpen = true;
    },
    closeModalDeleteTask(state) {
      state.deleteTaskModalIsOpen = false;
    },
    isLogin(state) {
      state.isLogin = true;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTask.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.task = action.payload;
      })
      .addCase(addTask.pending, state => {
        state.addTaskModalIsOpen = false;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.task.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.task = state.task.filter(task => task.id !== action.payload.id);
        state.deleteTaskModalIsOpen = false;
      }),
});

export const tasksSlice = tasksSlices.reducer;
export const {
  isLogin,
  openModalAdd,
  closeModalAdd,
  openModalDeleteTask,
  closeModalDeleteTask,
} = tasksSlices.actions;
