import React from 'react'
import { FaTimes } from 'react-icons/fa'

  /*
  Task is single object form taks Array.
  Taks comes from map function mapping Tasks Array in Takas.jsx
  */
 
 const Task = ({ task, onDelete, onToggle }) => {

  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.title}
        <FaTimes
          style={{ color: 'red', cursor: 'ponter' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.date}</p>

    </div>
  )
}

export default Task
