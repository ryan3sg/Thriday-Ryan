import { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CashflowEnums } from "../../types/CashflowEnums";
import { buttonItems } from "./buttonItems";
import { filterByCashflow, setPage } from "../../store/transactionFilterSlice";
import { GenericButton } from "../Button/GenericButton";

/**
 * Toolbar UI component for filtering transactions.
 * It displays buttons for different filter options and updates the filter state in the Redux store.
 */
const Toolbar: FunctionComponent = () => {
  const filter = useAppSelector((state) => state.transactionFilter.value);
  const dispatch = useAppDispatch();
  const isActive = (value: CashflowEnums) => {
    return filter === value;
  };
  const handleFilter = (value: CashflowEnums, isActive: boolean) => {
    if (!isActive) {
      dispatch(setPage(1));
    }
    dispatch(filterByCashflow(value));
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
