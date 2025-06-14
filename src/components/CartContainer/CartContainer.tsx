import { useUserContext } from "../../hooks/useUserContext";
import { Cart } from "../Cart/Cart";
import styles from "./CartContainer.module.css";
export const CartContainer = () => {
  const [user] = useUserContext();
  return <section className={styles.content}>{user.isAutenticated && <Cart />}</section>;
};
