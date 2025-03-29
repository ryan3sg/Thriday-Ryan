import checkCircle from "../../assets/check-circle-fill.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import { CashflowEnums } from "../../types/CashflowEnums";

export const buttonItems = [
  {
    id: 1,
    icon: checkCircle,
    filter: CashflowEnums.All,
    content: "All",
  },
  {
    id: 2,
    icon: minus,
    filter: CashflowEnums.Outflow,
  },
  {
    id: 3,
    icon: plus,
    filter: CashflowEnums.Inflow,
  },
];
