import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Components/Todolist";

const title1: string = "What to learn"
const title2: string = "What to buy"

const tasks: Array<TaskType> = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false }
]


function App() {
    return (
        <div className="App">
           <Todolist title={title1} tasks={tasks}/>
           <Todolist  tasks={tasks}/>
        </div>
    );
}

export default App;
