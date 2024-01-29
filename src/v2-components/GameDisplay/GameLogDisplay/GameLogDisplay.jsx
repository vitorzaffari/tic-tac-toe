import './GameLogDisplay.css'

const GameLogDisplay = ({ gameBoardLogs }) => {
  return (
    <div className='game-log-display-component'>
      {gameBoardLogs.map(item => (
        <p className='single-log' key={item.id}>{item.log}</p>
      ))}
    </div>
  )
}

export default GameLogDisplay