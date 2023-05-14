import Button  from "./Button"
import { useLocation } from "react-router-dom"
const Header = ({ title, onAdd, showAddTask }) => {

  //Acting as an event for our button
  // const onClick = () => {
  //   console.log('onClick')
  // }
  const location = useLocation()

  // the onAdd function shows and hind the form on click.
  return (
    <header className='header'>
        <h1 > Task Tracker {title}</h1>

        {location.pathname === '/' && (
        <Button 
        color={showAddTask ? 'red':'steelblue'} 
        text={showAddTask ? 'Close': "Add"} 
        onClick={onAdd}/> 
        )}
    </header>
  )
}

export default Header