import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {

  const [tasks, setTasks] = useState([
    {
      id:1,
    text: 'Doctor Appointment',
    day: 'Feb 5',
    reminder: true},
    {
      id:2,
    text: 'Univ Assignment ',
    day: 'Feb 10',
    reminder: true},
    {
      id:3,
    text: 'Meeting Appointment',
    day: 'Feb 25',
    reminder: false}
  ])

  //Delete Task 
  const deleteTask = (id) => {
    console.log('Deleted Task:', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
