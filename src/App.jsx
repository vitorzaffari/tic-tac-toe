
import { useState } from 'react'
import './App.css'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log';
import GameOver from './components/GameOver.jsx';
import getActivePlayer from './utils/getActivePlayer.js';
import getWinner from './utils/getWinner.js'
import getGameBoard from './utils/getBoardGame.js';




function App() {
  const [updateBoard, setUpdateBoard] = useState([])


  const playerNames = {
    'X': 'Player 1',
    'O': 'Player 2'
  }

  const game = getGameBoard(updateBoard)

  let activePlayer = getActivePlayer(updateBoard)

  let winner = getWinner(playerNames, game)
  
  if (winner) activePlayer = null;


  function handleChangePlayer(row, col) {
    setUpdateBoard(prev => {
      let curPlayer = getActivePlayer(prev);
      const newBoardGame = [{ square: { row, col }, player: curPlayer }, ...prev];
      return newBoardGame;
    })

  }
  function handleRestart() {
    setUpdateBoard([]);
  }
  const draw = updateBoard.length === 9 && !winner;


  return (
    <main>
      <h1 className='title'>Tic-tac-toe</h1>
      <div className="game-box">
        {(winner || draw) && <GameOver winner={winner} handleRestart={handleRestart} />}
        <div className="players-box">
          <Player name={'Player 1'} symbol={'X'} isActive={activePlayer === 'X'} />
          <h1>|</h1>
          <Player name={'Player 2'} symbol={'O'} isActive={activePlayer === 'O'} />
        </div>
        <GameBoard handleChangePlayer={handleChangePlayer} updateBoard={game} />

      </div>
      <Log updateBoard={updateBoard} winner={winner} playerNames={playerNames} />
    </main>
  )
}

export default App
