import Header from './components/Header'
import Footer from './components/Footer'
import { useState, useEffect } from 'react';
import Tasks from './components/Tasks'
import About from './components/About'
import AddTask from './components/AddTask'
import { BrowserRouter as Router, Route } from 'react-router-dom'


/* events are stored in the App.js */


// import React from 'react'

// lmbda 
const App = () => {
  // we wont use .push as state is immutable 
  // we instead use setTask and recreate it
  const [showAddTask, setShowAddTask] = useState(false)
  //eslint-disable-next-line
  const [tasks, setTasks] = useState([])

  // fetch data from backend
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // fetch data 
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks/')
    const data = await res.json()
    // console.log(data)
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    // console.log(data)
    return data
  }

  // delete a task
  const deleteTask = async (id) => {
    // simple request to delete 
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder 
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(updTask)
    })


    const data = await res.json()
    // to reload the page after update
    // window.location.reload(false);
    setTasks(tasks.map((task) => task.id === id
      ? { ...task, reminder: !data.reminder } : task)
    )
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])
  }


  // add task locally it's not a good example anyways
  // const addTask = (task) => {
  //   // console.log(task)
  //   // to get unique random number
  //   const id = Math.floor(Math.random() * 10000) + 1
  //   const newTask = { id, ...task }
  //   setTasks([...tasks, newTask])
  // }

  // show or hide add Task
  const toggleAddTask = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <Router>
      <div className="container">
        <Header onClick={toggleAddTask} showPropAddTask={showAddTask} />
        {/* {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : <h3>No Tasks to show</h3>} */}
        <Route path='/' exact render={(props) => (<>
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : <h3>No Tasks to show</h3>}
        </>)} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router >
  );
}


// this is just for using classes as view model

// class App extends React.Component {
//   render() {
//     return <h1>Hello From Class </h1>
//   }
// }


export default App;
