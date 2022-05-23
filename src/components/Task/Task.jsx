import React from "react";
import styles from "./task.module.css";

const Task = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" className={styles.check}/>
      <div data-cy="task-text">

        <span className={styles.push}>Push Up</span>

      </div>
      {/* Counter here */}
    </li>
  );
};

export default Task;
