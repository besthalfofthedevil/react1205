import styles from "./Banner.module.css";

export const Banner = (props: {title:string; subtitle:string}) => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.subtitle}>{props.subtitle}</p>
    </div>
  );
};
