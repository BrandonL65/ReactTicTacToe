import { observable, action, makeObservable } from "mobx";
import RootStore from "./RootStore";

export interface Board {
  top: string[];
  middle: string[];
  bottom: string[];
}

export class DataStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @observable whosTurn: string = "O";
  @observable board: Board = {
    top: [" ", " ", " "],
    middle: [" ", " ", " "],
    bottom: [" ", " ", " "],
  };

  @action turnMade = (row: number, column: number) => {
    let validMoveOccurred = false;
    switch (row) {
      case 0:
        if (this.board.top[column] === " ") {
          this.board.top[column] = this.whosTurn;
          validMoveOccurred = true;
        }
        break;
      case 1:
        if (this.board.middle[column] === " ") {
          this.board.middle[column] = this.whosTurn;
          validMoveOccurred = true;
        }
        break;
      case 2:
        if (this.board.bottom[column] === " ") {
          this.board.bottom[column] = this.whosTurn;
          validMoveOccurred = true;
        }
        break;
    }
    if (validMoveOccurred) {
      this.whosTurn = this.whosTurn === "O" ? "X" : "O";
    }
  };

  //check win
}
