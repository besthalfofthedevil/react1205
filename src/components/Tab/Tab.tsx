import classNames from "classnames";
import styles from "./Tab.module.css";

export const Tab = ({
  label,
  isActive,
  setActive = () => {},
}: {
  label: string;
  isActive: boolean;
  setActive?: () => void;
}) => (
  <button
    className={classNames({
      [styles.tab]: true,
      [styles.active]: isActive,
    })}
    onClick={setActive}
  >
    {label}
  </button>
);
