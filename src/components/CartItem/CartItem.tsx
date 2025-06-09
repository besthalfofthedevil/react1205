
import { Counter } from '../Counter/counter';
import styles from './CartItem.module.css';
export const CartItem = () => {
    return (
           <div className={styles.basketItem}>
          <span className={styles.basketItemName}>Chicken tikka masala</span>
          <Counter count={10} add={() => {}} substract={() => {}} />
          <span className={styles.basketItemPrice}>12.00 $</span>
        </div>
    );
}