import React, { useContext } from "react";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import styles from "./TitleContainer.module.css";
import { rootStoreContext } from "../../contexts";

export default function TitleContainer() {
  const { dataStore } = useContext(rootStoreContext);

  return (
    <div className={styles.container}>
      <TitleComponent />
    </div>
  );
}
