import React from "react";
import records from "./db.json";
import styles from "./append.module.css";

export const Append = () => {
  return (
    <div className={styles.grid}>
      
      {records.map((item) => {
        return <div >


        <img src={item.image} className={styles.img} alt="" />
        <p>{item.title}</p>
        <p>{item.price}</p>
        <p>{item.brand}</p>
        <p>{item.id}</p>
        </div>;
      })}
    </div>
  );
};
