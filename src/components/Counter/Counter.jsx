import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {

  
  // sample value to be replaced
  
   let [count , setCount] = useState("1")
  // NOTE: do not delete `data-cy` key value pair


  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={setCount = () =>{
       return count + 1;
      }} className={styles.btn2}> + </button>
      <span data-cy="task-counter-value" className={styles.btn3}>{count}</span>
      <button data-cy="task-counter-decrement-button" className={styles.btn2}> - </button>
    </div>
  );
};

export default Counter;
