import './TaskItem.scss'

function TaskItem({ task, index, onDelete, onToggle}) {
    return (
        <li className='task'>

            <input 
            type="checkbox" 
            checked={task.completed}
            onChange={() => onToggle(index)}
            />

            <span className={task.completed ? 'completed' : ''}>
                {task.text}
            </span>

            <div className='buttons'>

                <button>✎</button>
                <button>➦</button>
                <button className='delete' onClick={() => onDelete(index)}>🗑</button>

            </div>
        </li>
    )
}

export default TaskItem