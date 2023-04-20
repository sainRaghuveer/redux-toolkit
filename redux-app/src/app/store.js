import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from "../features/Auth/AuthSlice";
import todoReducer from "../features/Todo/TodoSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    todo: todoReducer,
  },
});
