import { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CashflowEnums } from "../../types/CashflowEnums";
import { buttonItems } from "./buttonItems";
import { setPage, filterByCashflow } from "../../store/transactionFilterSlice";
import { GenericButton } from "../Button/GenericButton";
import { fetchTransaction } from "../../services/transactionApi";

/**
 * Toolbar UI component for filtering transactions.
 * It displays buttons for different filter options and updates the filter state in the Redux store.
 */
const Toolbar: FunctionComponent = () => {
  const { value: cashflow, page } = useAppSelector(
    (state) => state.transactionFilter
  );
  const dispatch = useAppDispatch();
  const isActive = (value: CashflowEnums) => {
    return cashflow === value;
  };
  const handleFilter = (value: CashflowEnums, isActive: boolean) => {
    if (!isActive) {
      dispatch(setPage(1));
    }
    dispatch(filterByCashflow(value));
    dispatch(fetchTransaction({ page, cashflow: value }));
  };

  return (
    <div className={styles.toolbar}>
      {buttonItems.map(({ id, filter, icon, content }) => (
        <GenericButton
          key={id}
          isActive={isActive(filter)}
          onClickHandLer={() => handleFilter(filter, isActive(filter))}
          icon={icon}
          text={content && <span className={styles.span}>{content}</span>}
        />
      ))}
    </div>
  );
};

export default Toolbar;
