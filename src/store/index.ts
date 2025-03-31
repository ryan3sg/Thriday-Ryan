import { configureStore } from "@reduxjs/toolkit";
import transactionFilterReducer from "./transactionFilterSlice";
import transactionReducer from "../services/transactionApi";

export const store = configureStore({
  reducer: {
    transactionFilter: transactionFilterReducer,
    transactionApi: transactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
