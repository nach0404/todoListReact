import './TaskInput.scss'

function TaskInput({ value, onChange, onAdd}) {
    return (
        <div className='add-task'>
            <input 
            placeholder='Escribe una tarea...' 
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            />
            <button onClick={onAdd}>✔</button>
        </div>
    )
}

export default TaskInput