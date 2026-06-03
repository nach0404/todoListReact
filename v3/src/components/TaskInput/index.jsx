function TaskInput({ value, onChange, onAdd}) {
    return (
        <div>
            <input 
            className='input' 
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            />
            <button className='add' onClick={onAdd}>ADD</button>
        </div>
    )
}

export default TaskInput