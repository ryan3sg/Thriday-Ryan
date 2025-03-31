import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TransactionType } from "../types/TransactionType";
import { CashflowEnums } from "../types/CashflowEnums";

export interface TransactionDataState {
  transactions?: {
    data?: TransactionType[];
    next?: number | null;
    pages?: number;
    totalPages?: number;
  };
  isLoading: boolean;
  error?: any;
}

export const fetchTransaction = createAsyncThunk(
  "transactions/api",
  async ({
    page,
    cashflow,
  }: {
    page: number;
    cashflow: CashflowEnums;
  }): Promise<TransactionDataState["transactions"]> => {
    const response = await fetch(
      `${
        import.meta.env.REACT_APP_API_BASE_URL
      }/transactions?_page=${page}&_per_page=10&${cashflow}`
    );
    return response.json();
  }
);

const initialState: TransactionDataState = {
  transactions: {},
  isLoading: false,
  error: null,
};

const transactionApiSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransaction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.transactions = {};
        state.error = action.error.message;
      });
  },
});

export default transactionApiSlice.reducer;
