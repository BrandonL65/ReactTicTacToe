import { observable } from "mobx";

interface Board {
  top: string[];
  middle: string[];
  bottom: string[];
}

export class DataStore {
  @observable name = "Brandon";
  @observable board: Board = {
    top: ["N", "N", "N"],
    middle: ["N", "N", "N"],
    bottom: ["N", "N", "N"],
  };
}
