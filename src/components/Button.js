import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {


  return (
        <button onClick={onClick} style = {{ backgroundColor : color}} className='btn'> {text} </button>
  )
}

//Setting default value if no props are passed in function call
Button.defaultProps = {
    color: 'green',
    text: 'Add',
}

//Setting up the props value type (string, int, etc)
// Incase of wrong value type passed - the error will be displayed on inspect console but application will be running
Button.propTypes={
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}


export default Button