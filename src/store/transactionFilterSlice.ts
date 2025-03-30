import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CashflowEnums } from "../types/CashflowEnums";
import { RootState } from ".";

export interface TransactionFilterState {
  value: CashflowEnums;
  page: number
}

const initialState: TransactionFilterState = {
  value: CashflowEnums.All,
  page: 1,
};

export const transactionFilterSlice = createSlice({
  name: "transactionFilter",
  initialState,
  reducers: {
    filterByCashflow: (state, action: PayloadAction<CashflowEnums>) => {
      state.value = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { filterByCashflow, setPage } = transactionFilterSlice.actions;

export const transactionFilter = (state: RootState) => state.transactionFilter.value;
export const setTransactionPage = (state: RootState) => state.transactionFilter.page;

export default transactionFilterSlice.reducer;
