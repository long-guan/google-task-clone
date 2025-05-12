import "./List.css";
import { ListProps } from "./ListProps";
import { Task } from "./Task";

export function List(props: ListProps) {
    return (
        <>
            <h3>{props.name}</h3>
            {props.tasks.map((task) => (
                <Task key={task.name} name={task.name}/>
            )
            )}
        </>
    )
}
