import React, {useState} from "react"

type TodolistPropsType = {
    title?: string
    tasks: Array<TaskType>
    changeFilterValue: (filter: FilterValuesType) => void
    removTask: (taskId: string) => void
    addTask: (title: string) => void
}
export type TaskType = {
    id: string
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
                        <button onClick={() => props.removTask(el.id)}>X</button>
                    </li>
                )
            })
            : <span>Your tasklist is empty</span>
    // const inputRef = React.useRef<any>()
    // const addTaskHandler = () => {
    //     props.addTask(inputRef.current.value)
    //     inputRef.current.value= ""
    // }
    const [title, setTitle] = useState<string>("")
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                {/*<input ref={inputRef}/>*/}
                {/*<button onClick={addTaskHandler}>+</button>*/}
                <input onChange={(event) => {
                    setTitle(event.currentTarget.value)
                }}
                       value={title}
                       onKeyDown={(event) => {
                           if (event.key === "Enter") {
                               props.addTask(title)
                               setTitle("")
                           }
                       }}/>
                <button
                    onClick={() => {
                        props.addTask(title)
                        setTitle("")
                    }}
                >+
                </button>
            </div>
            <ul>
                {tasksItems}
            </ul>
            <div>
                <button onClick={() => props.changeFilterValue("all")}>All</button>
                <button onClick={() => props.changeFilterValue("active")}>Active</button>
                <button onClick={() => props.changeFilterValue("completed")}>Completed</button>
            </div>
        </div>

    )
}
