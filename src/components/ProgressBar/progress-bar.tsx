import { useEffect, useState } from "react";
import styles from "./progress-bar.module.css";
export const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      setScrollProgress(
        (window.scrollY /
          (window.document.body.scrollHeight - window.innerHeight)) *
          100
      );
    };
    
    addEventListener("resize", scrollHandler);
    addEventListener("scroll", scrollHandler);

    return () => {
      removeEventListener("resize", scrollHandler);
      removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div
      className={styles.progressBar}
      style={{ width: `${scrollProgress}%` }}
    ></div>
  );
};
