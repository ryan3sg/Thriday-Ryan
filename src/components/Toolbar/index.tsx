import { FunctionComponent } from "react";
import "./styles.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CashflowEnums } from "../../types/CashflowEnums";
import { buttonItems } from "./buttonItems";
import { filterByCashflow } from "../../store/transactionFilterSlice";

const Toolbar: FunctionComponent = () => {
  const filter = useAppSelector((state) => state.transactionFilter.value);
  const dispatch = useAppDispatch();
  const isActive = (value: CashflowEnums) => {
    return filter === value ? "active" : "";
  };

  return (
    <div className="component-toolbar">
      {buttonItems.map(({ id, filter, icon, content }) => (
        <button
          key={id}
          className={`toolbar-button rounded-box ${isActive(filter)}`}
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
