import './Square.css'

const Square = ({ value, handleNewMove, isWinningSquare, hasGameEnded}) => {


  return (
    <button className={`square ${isWinningSquare && 'winning-square'} ${(hasGameEnded && !isWinningSquare) ? 'fade' : ''}`} onClick={handleNewMove}>
      <span>{value}</span>
    </button>
  )
}

export default Square