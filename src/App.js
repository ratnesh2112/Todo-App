import React from "react";
import "./App.css"

import AddTask from "./components/AddTask/AddTask";
import Counter from "./components/Counter/Counter";
import Task from "./components/Task/Task";
import TaskHeader from "./components/TaskHeader/TaskHeader";
import Tasks from "./components/Tasks/Tasks";

import task from "./data/tasks.json";


function App() {
  return (
  <div className="Topbar">
    
    {/* Code Here */}
    <div className="head">
    <span className="todo"> Todo List</span>
    </div>
  
    <AddTask />
    <Counter />
    <Task  />
    <TaskHeader />
    <Tasks />
  
  
  </div>
  ) ;
}

export default App;
