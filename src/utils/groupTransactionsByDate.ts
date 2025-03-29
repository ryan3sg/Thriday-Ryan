import _ from "lodash";
import { TransactionType } from "../types/TransactionType";

export const groupTransactionsByDate = (
  data: TransactionType[] | undefined
) => {
  if (!data) return null;
  return _.groupBy(data, (item: TransactionType) => item.date);
};
