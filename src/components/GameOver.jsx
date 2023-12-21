import './GameOver.css'

const GameOver = ({winner, handleRestart}) => {



  return (
    <div className='game-over'>
        <h1>Game Over</h1>
        {winner && <h2>Congratulations  {winner}!</h2>}
        {!winner && <h2>Draw! No winner</h2>}
        <button onClick={handleRestart}>Restart Game</button>
    </div>
  )
}

export default GameOver