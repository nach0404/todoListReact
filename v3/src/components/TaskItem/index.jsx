function TaskItem({ task, index, onDelete, onToggle}) {
    return (
        <li>
            <input type="checkbox" 
            checked={task.completed}
            onChange={() => onToggle(index)}
            />
            <span className={task.completed ? 'completed' : ''}>
                {task.text}
            </span>
            <button className='delete' onClick={() => onDelete(index)}>🗑️</button>
        </li>
    )
}

export default TaskItem