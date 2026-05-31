import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <div className= 'container'>
      <h1>LISTA DE TAREAS DE NACHO</h1>
      <input className= 'input'type="text" />
      <button className='add'>ADD</button>
      <ul>
        <li>
          <input type="checkbox"/>
          <span>Task 1</span>
          <button className='delete'>🗑️</button>
        </li>
        <li>
          <input type="checkbox"/>
          <span className='completed'>Task 2</span>
          <button className='delete'>🗑️</button>
        </li>
        <li>
          <input type="checkbox"/>
          <span>Task 3</span>
          <button className='delete'>🗑️</button>
        </li>
        <li>
          <input type="checkbox"/>
          <span>Task 4</span>
          <button className='delete'>🗑️</button>
        </li>
        <li>
          <input type="checkbox"/>
          <span>Task 5</span>
          <button className='delete'>🗑️</button>
        </li>
        <li>
          <input type="checkbox"/>
          <span>Task 6</span>
          <button className='delete'>🗑️</button>
        </li>
      </ul>
    </div>
  )
}

export default App
