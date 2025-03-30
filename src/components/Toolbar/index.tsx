import { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CashflowEnums } from "../../types/CashflowEnums";
import { buttonItems } from "./buttonItems";
import { filterByCashflow } from "../../store/transactionFilterSlice";
import clsx from "clsx";

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

  return (
    <div className={styles.toolbar}>
      {buttonItems.map(({ id, filter, icon, content }) => (
        <button
          key={id}
          className={clsx(styles.button, "rounded-box", isActive(filter) && styles.active)}
          onClick={() => dispatch(filterByCashflow(filter))}
        >
          <img src={icon} />
          {content && <span>{content}</span>}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
