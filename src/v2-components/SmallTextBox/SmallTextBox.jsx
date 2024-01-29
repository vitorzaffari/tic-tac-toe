import './SmallTextBox.css'


const SmallTextBox = ({text, fontSize = 16}) => {
  return (
    <p className='small-text-box-component' style={{fontSize: fontSize}}>{text}</p>
  )
}

export default SmallTextBox

