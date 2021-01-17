import { observable } from "mobx";
import RootStore from "./RootStore";

interface Board {
  top: string[];
  middle: string[];
  bottom: string[];
}

export class DataStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable name = "Brandon";
  @observable board: Board = {
    top: ["N", "N", "N"],
    middle: ["N", "N", "N"],
    bottom: ["N", "N", "N"],
  };
}
