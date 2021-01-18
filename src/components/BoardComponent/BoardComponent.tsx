import styles from "./BoardComponent.module.css";

const BoardComponent = () => {
  return (
    <div className={styles["container"]}>
      <div className={` ${styles["row"]} ${styles["row1"]}`}>
        <div className={styles["board-square"]}> </div>
        <div className={styles["board-square"]}> </div>
        <div className={styles["board-square"]}> </div>
      </div>
      <div className={`${styles["row"]} ${styles["row2"]}`}>
        <div className={styles["board-square"]}> </div>
        <div className={styles["board-square"]}> </div>
        <div className={styles["board-square"]}> </div>
      </div>
      <div className={`${styles["row"]} ${styles["row3"]}`}>
        <div className={styles["board-square"]}> </div>
        <div className={styles["board-square"]}> </div>
        <div className={styles["board-square"]}> </div>
      </div>
    </div>
  );
};

export default BoardComponent;
