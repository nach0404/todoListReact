import './TaskList.scss'
import TaskItem from '../TaskItem/index'

function TaskList({ tasks, onDelete, onToggle }) {

    if (tasks.length === 0) {
        return (
            <div className='task-list'>
                <p>No hay tareas todavia.</p>
            </div>
        )
    }
    return(
        <div className='task-list'>
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
        </div>
    )
}

export default TaskList