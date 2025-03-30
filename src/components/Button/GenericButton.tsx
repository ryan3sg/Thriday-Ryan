import clsx from "clsx";
import styles from "./styles.module.scss";
import { FunctionComponent, ReactNode } from "react";

export type GenericButtonProps = {
  icon?: string;
  text?: ReactNode | string;
  onClickHandLer?: React.MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
  isDisabled?: boolean;
};

export const GenericButton: FunctionComponent<GenericButtonProps> = ({
  icon,
  text,
  onClickHandLer,
  isActive,
  isDisabled,
}) => (
  <button
    className={clsx(styles.button, "rounded-box", isActive && styles.active)}
    onClick={onClickHandLer}
    disabled={isDisabled}
  >
    {icon && <img src={icon} />}
    {text}
  </button>
);
