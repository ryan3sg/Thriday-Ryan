import { configureStore } from "@reduxjs/toolkit";
import { transactionsApi } from "../services/transactions";
import transactionFilterReducer from "./transactionFilterSlice";

export const store = configureStore({
  reducer: {
    transactionFilter: transactionFilterReducer,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(transactionsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
