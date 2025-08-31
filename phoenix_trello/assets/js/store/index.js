import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from '../reducers/session';

export default function makeStore() {
  return configureStore({
    reducer: {
      session: sessionReducer,
    },
  });
}