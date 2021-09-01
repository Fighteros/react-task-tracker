import Header from './components/Header'
import Task from './components/Task'
// import React from 'react'

// lmbda 
const App = () => {
  return (
    <div className="container">
      <Header />
      <Task />
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
