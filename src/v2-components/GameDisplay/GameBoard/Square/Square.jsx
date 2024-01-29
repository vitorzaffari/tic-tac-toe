import './Square.css'

const Square = ({ value, handleNewMove, isWinningSquare }) => {
  return (
    <button className={`square ${isWinningSquare && 'winning-square'}`} onClick={handleNewMove}><span>{value}</span></button>
  )
}

export default Square