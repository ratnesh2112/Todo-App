import React from "react";
import styles from "./taskHeader.module.css";

import Counter from "../Counter/Counter";

const TaskHeader = (props) => {
  // sample values to be replaced
  let unCompletedTask = 0;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <b data-cy="header-remaining-task">Uncompleted Task={unCompletedTask}</b>
      <br />
      <b data-cy="header-total-task"> Total task = {1}</b>
    </div>
  );
};

export default TaskHeader;
