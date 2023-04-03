import React, {useState} from 'react';
import './App.css';
import { FilterValuesType, TaskType, Todolist} from "./Components/Todolist";




function App() {
    const title1: string = "What to learn"
    const title2: string = "What to buy"

    // const tasks: Array<TaskType> = [
    //     { id: 1, title: "HTML&CSS", isDone: true },
    //     { id: 2, title: "JS", isDone: true },
    //     { id: 3, title: "ReactJS", isDone: false }
    // ]

    const [tasks, setTasks] = useState<Array<TaskType>>( [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ])

     const removTask  = (taskId: number)=> {
              const updatedTasks = tasks.filter((el)=>el.id !==taskId)
         setTasks(updatedTasks)
     }

    const [filter, setFilter] = useState<FilterValuesType>("all")

    const changeFilterValue = (filter: FilterValuesType) => {
        setFilter(filter)
    }
    let filteredTasks: Array<TaskType> = tasks
    if(filter === "all"){
        filteredTasks = tasks
    }
    if (filter ==="active"){
        filteredTasks = tasks.filter(el => el.isDone===false)
    }
    if (filter ==="completed"){
        filteredTasks = tasks.filter(el => el.isDone===true)
    }

    return (
        <div className="App">
           <Todolist title={title1}
                     tasks={filteredTasks}
                     changeFilterValue={changeFilterValue} removTask ={removTask }
           />
        </div>
    );
}

export default App;
