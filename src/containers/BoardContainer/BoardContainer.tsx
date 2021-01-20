import { useContext } from "react";
import BoardComponent from "../../components/BoardComponent/BoardComponent";
import { rootStoreContext } from "../../contexts";
import { observer } from "mobx-react";

const BoardContainer = observer(() => {
  const { dataStore } = useContext(rootStoreContext);
  const { board, turnMade } = dataStore;

  return (
    <div>
      <BoardComponent
        topRow={board.top}
        middleRow={board.middle}
        bottomRow={board.bottom}
        turnMade={(row: number, column: number) => turnMade(row, column)}
        x={board.top[0]}
      />
    </div>
  );
});

export default BoardContainer;
