import Button  from "./Button"
const Header = ({ title }) => {

  //Acting as an event for our button
  const onClick = () => {
    console.log('onClick')
  }
  return (
    <header className='header'>
        <h1 > Task Tracker {title}</h1>

        <Button color='steelblue' text='Add' onClick={onClick}/> 
    </header>
  )
}

export default Header