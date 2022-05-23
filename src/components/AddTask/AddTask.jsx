import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair

  const [todo , setTodo] = useState("")

  
  return (

    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add task..." className={styles.input}/>
      <button data-cy="add-task-button" className={styles.btn1}  > + </button>
    </div>
  );
};

export default AddTask;
