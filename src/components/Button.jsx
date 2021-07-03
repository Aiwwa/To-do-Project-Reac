const Button = ({ color = 'steelblue', text, toggleAddTask }) => {



  return <button style={{ backgroundColor: color}} className='btn' onClick={toggleAddTask}>{text}</button>
}

export default Button
