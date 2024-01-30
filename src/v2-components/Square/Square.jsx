import './Square.css'

const Square = ({ value, handleNewMove, isWinningSquare, hasGameEnded}) => {

  let squareClass = isWinningSquare ? 'winning-square' : ''
  squareClass += (hasGameEnded && !isWinningSquare) ? "fade " : ' ';
  squareClass += hasGameEnded && 'ended';

  return (
    <button className={`square ${squareClass}`} onClick={handleNewMove} disabled={hasGameEnded}>
      <span>{value}</span>
    </button>
  )
}

export default Square