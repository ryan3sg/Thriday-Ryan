import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TransactionType } from "./TransactionType";

export const transactionsApi = createApi({
  reducerPath: "transactionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.REACT_APP_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllTransactions: builder.query<TransactionType[], string>({
      query: (params: string) => `/transactions?${params}`,
    }),
    createTransaction: builder.mutation<TransactionType, Partial<TransactionType>>({
      query: (newItem: Partial<TransactionType>) => ({
        url: "/transactions",
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    removeTransaction: builder.mutation<TransactionType, string>({
      query: (id: string) => ({
        url: `/transactions/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllTransactionsQuery,
  useCreateTransactionMutation,
  useRemoveTransactionMutation,
} = transactionsApi;
