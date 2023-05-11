import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)

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
    reminder: false},
    {
      id:3,
    text: 'Meeting Appointment',
    day: 'Feb 25',
    reminder: false}
  ])

  // Add Task
  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random() * 10000)+1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])

  }

  //Delete Task 
  const deleteTask = (id) => {
    console.log('Deleted Task:', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle remainder
  // Changing the reminder value to its opposite (true-false) on double click
  const toggleReminder = (id) => {
    console.log('Reminder Task:', id)
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      
      {showAddTask && <AddTask onAdd={addTask} /> }
      
      {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle = {toggleReminder} /> : ('No tasks')}
    </div>
  );
}

export default App;
