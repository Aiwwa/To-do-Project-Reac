import { useState, useEffect } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  const [tasks, setTasks] = useState([]);
  const [showAddTaks, setShowAddTaks] = useState(false);



  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/todos?_limit=0`)
  //     .then(response => response.json())
  //     .then(data => setTasks(() => {
  //       return data.map(dataEl => ({ ...dataEl, reminder: false }));
  //     }))
  // }, []);
  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromSever = await fetchTasks()

      setTasks(tasksFromSever)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  }
// ----


  // const addTask = (task) => {
  //   const id = Math.floor(Math.random() * 1000 + 1);
  //   const newTask = {id, ...task};

  //   setTasks([...tasks, newTask]);
  // }
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: "POST",
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])
  }



// ----

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleTaskReminder = (id) => {
    setTasks(tasks.map(task =>  task.id === id ? {...task, reminder: !task.reminder} : task));
  }


  return (
    <div className="container">
      <Header toggleAddTask={()=> setShowAddTaks(!showAddTaks)} showAddTaks={showAddTaks}/>
      {showAddTaks && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? < Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTaskReminder } /> : 'Task list is empty'}
    </div>
  );
}

export default App;
