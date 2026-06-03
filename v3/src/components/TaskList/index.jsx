import TaskItem from '../TaskItem/index'

function TaskList({ tasks, onDelete, onToggle }) {

    if (tasks.length === 0) {
        return <p>No hay tareas todavia.</p>
    }
    return(
        <ul>
            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    task={task}
                    index={index}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </ul>
    )
}

export default TaskList