import { FunctionComponent, useMemo } from "react";
import styles from "./styles.module.scss";
import { useGetAllTransactionsQuery } from "../../services/transactions";
import { priceFormatter } from "../../utils/priceFormatter";
import { groupTransactionsByDate } from "../../utils/groupTransactionsByDate";
import { useAppSelector } from "../../store/hooks";
import clsx from "clsx";

/**
 * Transaction Lists UI.
 * This component displays transactions transactions dynamically based on the selected `CashflowEnums`.
 * Transaction Types: "All", "Inflow", and "Outflow"
 */
const TransactionList: FunctionComponent = () => {
  const transactionFilter = useAppSelector(
    (state) => state.transactionFilter.value
  );
  const { data, error, isLoading } =
    useGetAllTransactionsQuery(transactionFilter);

  const groupedTransactions = useMemo(
    () => groupTransactionsByDate(data) ?? {},
    [data]
  );

  const getCashflow = (cashflow: string) => {
    switch (cashflow) {
      case "inflow":
        return <span className="color-success">+</span>;
      case "outflow":
        return <span className="color-error">-</span>;
      default:
        return "";
    }
  };

  return (
    <div className="component-transaction">
      {error ? (
        <h2 className="color-error">An error has occured.</h2>
      ) : isLoading && !groupedTransactions ? (
        <h2>Loading...</h2>
      ) : (
        Object.entries(groupedTransactions).map(([date, items]) => (
          <div className="group" key={date}>
            <h2>{date}</h2>
            {items?.map((item) => {
              const {
                transactionId,
                logoUrl,
                transactionTitle,
                suburb,
                shortCategory,
                cashflow,
                amount,
              } = item;
              return (
                <div
                  className={clsx(styles.items, "rounded-box")}
                  key={transactionId}
                >
                  <figure className={clsx(styles.logo, "rounded-box")}>
                    <img src={logoUrl} />
                  </figure>
                  <div className={styles.details}>
                    <h3 className={styles.title}>{transactionTitle}</h3>
                    <p className={styles.location}>
                      <span>{suburb}</span>
                      {!suburb || !shortCategory ? "" : " | "}
                      <span>{shortCategory}</span>
                    </p>
                  </div>
                  <div className={styles.amount}>
                    <h3>
                      {getCashflow(cashflow)}&nbsp;{priceFormatter(amount)}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        ))
      )}
    </div>
  );
};

export default TransactionList;
