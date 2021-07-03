import PropTypes from 'prop-types'
import Button from './Button'


//Default prop
const Header = ({ title = 'Todo app' , toggleAddTask, showAddTaks}) => {


  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAddTaks ? 'red': 'green'} text={showAddTaks ? 'Close': 'Add'} toggleAddTask={toggleAddTask}/>
    </header>
  )
}


Header.propTypes = {
  title: PropTypes.string
}


export default Header
