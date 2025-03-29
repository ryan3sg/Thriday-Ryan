import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CashflowEnums } from "../types/CashflowEnums";
import { RootState } from ".";

export interface TransactionFilterState {
  value: CashflowEnums;
}

const initialState: TransactionFilterState = {
  value: CashflowEnums.All,
};

export const transactionFilterSlice = createSlice({
  name: "transactionFilter",
  initialState,
  reducers: {
    filterByCashflow: (state, action: PayloadAction<CashflowEnums>) => {
      state.value = action.payload;
    },
  },
});

export const { filterByCashflow } = transactionFilterSlice.actions;

export const transactionFilter = (state: RootState) => state.transactionFilter.value;

export default transactionFilterSlice.reducer;
