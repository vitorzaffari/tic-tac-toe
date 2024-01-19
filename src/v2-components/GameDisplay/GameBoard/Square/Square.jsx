import './Square.css'

const Square = ({value, handleNewMove}) => {
  return (
    <div className='square' onClick={handleNewMove}><span>{value}</span></div>
  )
}

export default Square