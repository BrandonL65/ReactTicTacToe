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
    switch (row) {
      case 0:
        this.board.top[column] = this.whosTurn;
        break;
      case 1:
        this.board.middle[column] = this.whosTurn;
        break;
      case 2:
        this.board.bottom[column] = this.whosTurn;
        break;
    }
    this.whosTurn = this.whosTurn === "O" ? "X" : "O";
  };

  //check win
}
