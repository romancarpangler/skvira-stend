import { configureStore } from '@reduxjs/toolkit';
import { tasksSlice } from './slise';

export const store = configureStore({
  reducer: {
    store: tasksSlice,
  },
});
