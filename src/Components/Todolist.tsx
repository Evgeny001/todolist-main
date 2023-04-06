import React, {useState, KeyboardEvent, ChangeEvent} from "react"

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
    const [title, setTitle] = useState<string>("")
    // const inputRef = React.useRef<any>()
    // const addTaskHandler = () => {
    //     props.addTask(inputRef.current.value)
    //     inputRef.current.value= ""
    // }
    const changeLocalTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const addTaskHandler = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle)
        }
        setTitle("")
    }

    const onKeyDownAddTask = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && addTaskHandler()
    const setAllFilterValue = () => props.changeFilterValue("all")
    const setActiveFilterValue = () => props.changeFilterValue("active")
    const setCompletedFilterValue = () => props.changeFilterValue("completed")

    const tasksItems: JSX.Element[] | JSX.Element =
        props.tasks.length
            ? props.tasks.map((el) => {
                const removTaskHandler = () => props.removTask(el.id)
                return (
                    <li key={el.id}>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                        <button onClick={removTaskHandler}>X</button>
                        {/*<button onClick={() => props.removTask(el.id)}>X</button>*/}
                    </li>
                )
            })
            : <span>Your tasklist is empty</span>

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                {/*<input ref={inputRef}/>*/}
                {/*<button onClick={addTaskHandler}>+</button>*/}
                <input onChange={changeLocalTitle}
                       value={title}
                       onKeyDown={onKeyDownAddTask}/>
                <button
                    disabled={title.trim().length === 0} onClick={addTaskHandler}>+
                </button>
                {title.length > 15 && <div style={{color: "hotpink"}}>Task title is long</div>}
            </div>
            <ul>
                {tasksItems}
            </ul>
            <div>
                <button onClick={setAllFilterValue}>All</button>
                <button onClick={setActiveFilterValue}>Active</button>
                <button onClick={setCompletedFilterValue}>Completed</button>
            </div>
        </div>

    )
}
