import { createContext } from "react";
import RootStore from "./stores/RootStore";
import { DataStore } from "./stores/DataStore";

export const rootStoreContext = createContext<RootStore>(new RootStore());
