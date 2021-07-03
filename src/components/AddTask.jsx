import React, { useState } from 'react'

const AddTask = ({onAdd}) => {


const [title, setTitle] = useState('');
const [date, setDate] = useState('');
const [reminder, setReminder] = useState(false);

const [titleValidation, setTitleValidation] = useState(true);


const onSubmit = (e)=> {
  e.preventDefault();

  if(!title) {
    setTitleValidation(false);
    return
  }
  setTitleValidation(true);

  onAdd({title, date, reminder});

  setTitle('');
  setDate('');
  setReminder(false);
}

  return (
    <form className='add-form' onSubmit={onSubmit}>

      <div className='form-control'>
        <label htmlFor="task">Task</label>
        <input type="text" placeholder='Add task' value={title}
           onChange={(e)=> setTitle(e.target.value)} 
           style={{border:`1px solid ${titleValidation ? '': 'red'}`}}/>
      </div>

      <div className='form-control'>
        <label htmlFor="day $ time">{'Day & Time '}</label>
        <input type="date" placeholder='Add day $ time' value={date} onChange={(e)=> setDate(e.target.value)} />
      </div>

      <div className='form-control form-control-check'>
        <label htmlFor="reminder">Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}/>
      </div>

      <button className='btn btn-block' type='submit' value='save task'>Save Task</button>
    </form>
  )
}

export default AddTask
