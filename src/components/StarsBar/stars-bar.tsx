import styles from "./stars-bar.module.css";
export const StarsBar = ({ rating = 0, totalStars = 5 }) => {
  const stars = [...Array(totalStars)].map((_, index) =>
    index < rating - 1 ? "★" : "☆"
  );

  return (
    <div className={styles.rating}>
      {stars.map((star, index) => (
        <span key={index} className={styles.star}>
          {star}
        </span>
      ))}
    </div>
  );
};
