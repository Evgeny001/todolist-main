import React from "react"

type TodolistPropsType = {
    title?: string
    tasks: Array<TaskType>
    changeFilterValue:(filter: FilterValuesType)=> void
    removTask : (taskId: number) => void
}
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export type FilterValuesType = "all" | "active" | "completed"

export const Todolist: React.FC<TodolistPropsType> = (props) => {
    const tasksItems: JSX.Element[] | JSX.Element =
        props.tasks.length
            ? props.tasks.map((el) => {
                return (
                    <li key={el.id}>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                        <button onClick={()=>props.removTask(el.id)}>X</button>
                    </li>
                )
            })
            : <span>Your tasklist is empty</span>
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksItems}
            </ul>
            <div>
                <button onClick={()=>props.changeFilterValue("all")}>All</button>
                <button onClick={()=>props.changeFilterValue("active")}>Active</button>
                <button onClick={()=>props.changeFilterValue("completed")}>Completed</button>
            </div>
        </div>

    )
}
