import { useSelector } from "react-redux";
import { StarsBar } from "../StarsBar/stars-bar";
import styles from "./ReviewListItem.module.css";
import type { RootState } from "../../redux/store";
import { selectReviewById } from "../../slices/reviewsSlice";
import { selectUserById } from "../../slices/usersSlice";

export const ReviewListItem = (props: { id: string }) => {
  const reviewItem =
    useSelector((state: RootState) => selectReviewById(state, props?.id)) || {};
  const { userId, text, rating } = reviewItem;
  const user =
    useSelector((state: RootState) => selectUserById(state, userId)) || {};
  return (
    <li>
      <div className={styles.reviewCard}>
        <div className={styles.reviewHeader}>
          <h3 className={styles.reviewerName}>{user.name}</h3>
          <StarsBar rating={rating} totalStars={5} />
        </div>
        <p className={styles.reviewText}>{text}</p>
      </div>
    </li>
  );
};
