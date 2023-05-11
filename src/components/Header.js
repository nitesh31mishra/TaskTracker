import Button  from "./Button"
const Header = ({ title, onAdd }) => {

  //Acting as an event for our button
  // const onClick = () => {
  //   console.log('onClick')
  // }

  // the onAdd function shows and hind the form on click.
  return (
    <header className='header'>
        <h1 > Task Tracker {title}</h1>

        <Button color='steelblue' text='Add' onClick={onAdd}/> 
    </header>
  )
}

export default Header