import { TaskProps } from "./ListProps"

export function Task(props: TaskProps) {
    return (
        <div key={props.name}>{props.name}</div>
    )
}
