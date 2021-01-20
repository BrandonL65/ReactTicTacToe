import styles from "./BoardComponent.module.css";
import { observer } from "mobx-react";

interface BoardComponentProps {
  topRow: string[];
  middleRow: string[];
  bottomRow: string[];
  turnMade: (row: number, column: number) => void;
  x: string;
}

const BoardComponent = observer((props: BoardComponentProps) => {
  const { turnMade } = props;

  return (
    <div className={styles["container"]}>
      <div className={` ${styles["row"]} ${styles["row1"]}`}>
        <div className={styles["board-square"]} onClick={() => turnMade(0, 0)}>
          <h1 className={styles["board-text"]}>{props.topRow[0]}</h1>
        </div>
        <div className={styles["board-square"]} onClick={() => turnMade(0, 1)}>
          <h1 className={styles["board-text"]}>{props.topRow[1]}</h1>
        </div>
        <div className={styles["board-square"]} onClick={() => turnMade(0, 2)}>
          <h1 className={styles["board-text"]}>{props.topRow[2]}</h1>
        </div>
      </div>
      <div className={`${styles["row"]} ${styles["row2"]}`}>
        <div className={styles["board-square"]} onClick={() => turnMade(1, 0)}>
          <h1 className={styles["board-text"]}>{props.middleRow[0]}</h1>
        </div>
        <div className={styles["board-square"]} onClick={() => turnMade(1, 1)}>
          <h1 className={styles["board-text"]}>{props.middleRow[1]}</h1>
        </div>
        <div className={styles["board-square"]} onClick={() => turnMade(1, 2)}>
          <h1 className={styles["board-text"]}>{props.middleRow[2]}</h1>
        </div>
      </div>
      <div className={`${styles["row"]} ${styles["row3"]}`}>
        <div className={styles["board-square"]} onClick={() => turnMade(2, 0)}>
          <h1 className={styles["board-text"]}>{props.bottomRow[0]}</h1>
        </div>
        <div className={styles["board-square"]} onClick={() => turnMade(2, 1)}>
          <h1 className={styles["board-text"]}>{props.bottomRow[1]}</h1>
        </div>
        <div className={styles["board-square"]} onClick={() => turnMade(2, 2)}>
          <h1 className={styles["board-text"]}>{props.bottomRow[2]}</h1>
        </div>
      </div>
    </div>
  );
});

export default BoardComponent;
