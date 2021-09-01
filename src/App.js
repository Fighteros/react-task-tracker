import Header from './components/Header'
import Task from './components/Task'
import { useState } from 'react';

// import React from 'react'

// lmbda 
const App = () => {
  // we wont use .push as state is immutable 
  // we instead use setTask and recreate it
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 5th at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at School",
        day: "Feb 6th at 1:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Food Shopping",
        day: "Feb 5th at 2:30pm",
        reminder: false,
      },
    ]
  )
  return (
    <div className="container">
      <Header />
      <Task tasks={tasks} />
    </div>
  );
}


// this is just for using classes as view model

// class App extends React.Component {
//   render() {
//     return <h1>Hello From Class </h1>
//   }
// }


export default App;
