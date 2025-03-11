const Button = ({textContent, styles,callback}) => {
    return (
      <button 
        className={'button '+styles}
        onClick = {callback}
        >
            {textContent}
    </button>
    )
  }
  
  export default Button