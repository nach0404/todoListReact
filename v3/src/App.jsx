import { useState } from 'react'
import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const addTask = () => {
    if (inputValue.trim() === '') return
    setTasks([{ text: inputValue }, ...tasks]);
    setInputValue('');
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  const toggleTask = (index) => {
    setTasks(tasks.map((task, i) =>
     i === index ? { ...task, completed: !task.completed } : task
  ))
  }
  return (

    <div className='container'>

      <h1>LISTA DE TAREAS DE NACHO</h1>

      <TaskInput 
      value={inputValue}
      onChange={setInputValue}
      onAdd={addTask}
      />

      <TaskList 
      tasks={tasks}
      onDelete={deleteTask}
      onToggle={toggleTask}
      />
    </div>
  )
}

export default App
