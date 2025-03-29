import { FunctionComponent, useMemo } from "react";
import "./styles.css";
import { useGetAllTransactionsQuery } from "../../services/transactions";
import { TransactionType } from "../../services/TransactionType";
import _ from "lodash";

/**
 * Transaction List UI.
 */
const TransactionList: FunctionComponent = () => {
  const { data, error, isLoading } = useGetAllTransactionsQuery("");

  const groupByDate = (data: TransactionType[] | undefined) => {
    if (!data) return null;
    return _.groupBy(data, (item: TransactionType) => item.date);
  };
  const groupedTransactions = useMemo(() => groupByDate(data) ?? {}, [data]);

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
                <div className="items rounded-box" key={transactionId}>
                  <figure className="logo rounded-box">
                    <img src={logoUrl} />
                  </figure>
                  <div className="details">
                    <h3 className="title">{transactionTitle}</h3>
                    <p className="location">
                      <span>{suburb}</span>
                      {!suburb || !shortCategory ? "" : " | "}
                      <span>{shortCategory}</span>
                    </p>
                  </div>
                  <div className="amount">
                    <h3>
                      {getCashflow(cashflow)}&nbsp;${amount}
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
