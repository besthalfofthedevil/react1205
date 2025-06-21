import { useSelector } from "react-redux";
import { StarsBar } from "../StarsBar/stars-bar";
import styles from "./ReviewListItem.module.css";
import type { RootState } from "../../redux/store";
import { selectUserById } from "../../redux/entities/users/usersSlice";
import type { Review } from "../../redux/entities/types";

export const ReviewListItem = (props: { review: Review }) => {
  const { userId, text, rating } = props.review;
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
