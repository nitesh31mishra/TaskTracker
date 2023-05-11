import Button  from "./Button"
const Header = ({ title, onAdd, showAddTask }) => {

  //Acting as an event for our button
  // const onClick = () => {
  //   console.log('onClick')
  // }

  // the onAdd function shows and hind the form on click.
  return (
    <header className='header'>
        <h1 > Task Tracker {title}</h1>

        <Button color={showAddTask ? 'red':'steelblue'} text={showAddTask ? 'Close': "Add"} onClick={onAdd}/> 
    </header>
  )
}

export default Header