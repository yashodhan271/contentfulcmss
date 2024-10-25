import styles from "./styles.module.scss";

export const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <svg className={styles.circlesvg} height="200" width="200">
        <circle cx="100" cy="100" r="50"></circle>
      </svg>
      <p>{"Loading..."}</p>
    </div>
  );
};
