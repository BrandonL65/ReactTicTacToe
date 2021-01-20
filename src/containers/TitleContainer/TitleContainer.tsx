import React, { useContext } from "react";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import styles from "./TitleContainer.module.css";

export default function TitleContainer() {
  return (
    <div className={styles.container}>
      <TitleComponent />
    </div>
  );
}
