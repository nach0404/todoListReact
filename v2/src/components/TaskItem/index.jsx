function TaskItem() {
    return (
        <li>
            <input type="checkbox" />
            <span>Task 1</span>
            <button className='delete'>🗑️</button>
        </li>
    )
}

export default TaskItem