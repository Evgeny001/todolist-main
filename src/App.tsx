import React, {useState} from 'react';
import './App.css';
import {FilterValuesType, TaskType, Todolist} from "./Components/Todolist";
import {v1} from "uuid";


function App() {
    const title1: string = "What to learn"
  

    // const tasks: Array<TaskType> = [
    //     { id: 1, title: "HTML&CSS", isDone: true },
    //     { id: 2, title: "JS", isDone: true },
    //     { id: 3, title: "ReactJS", isDone: false }
    // ]

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ])

    const removTask = (taskId: string) => {
        const updatedTasks = tasks.filter((el) => el.id !== taskId)
        setTasks(updatedTasks)
    }

    const [filter, setFilter] = useState<FilterValuesType>("all")

    const changeFilterValue = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    // const getfilteredTasks = (tasks: Array<TaskType>, filter:FilterValuesType): Array<TaskType> => {
    //     let filteredTasks: Array<TaskType> = tasks
    //     if(filter === "all"){
    //         filteredTasks = tasks
    //     }
    //     if (filter ==="active"){
    //         filteredTasks = tasks.filter(el => el.isDone===false)
    //     }
    //     if (filter ==="completed"){
    //         filteredTasks = tasks.filter(el => el.isDone===true)
    //     }
    //     return   filteredTasks
    // }
    // const filteredTasks: Array<TaskType> = getfilteredTasks(tasks,filter)

    const getfilteredTasks = (tasks: Array<TaskType>, filter: FilterValuesType): Array<TaskType> => {
        switch (filter) {
            case "active" :
                return tasks.filter(el => el.isDone === false)
            case "completed" :
                return tasks.filter(el => el.isDone === true)
            default:
                return tasks
        }
    }
        const filteredTasks: Array<TaskType> = getfilteredTasks(tasks,filter)

        const addTask = (title: string) => {
            const newTask = {
                id: v1(),
                title: title,
                isDone: true
            }
            const apdatedTask = [newTask, ...tasks]
            setTasks(apdatedTask)
        }
        return (
            <div className="App">
                <Todolist title={title1}
                          tasks={filteredTasks}
                          changeFilterValue={changeFilterValue}
                          removTask={removTask}
                          addTask={addTask}
                />
            </div>
        );
    }

    export default App;
