
import { useState } from 'react'
import './App.css'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log';
import {WINNING_COMBINATIONS} from './winning-combinations.js'
import GameOver from './components/GameOver.jsx';

function getActivePlayer(gameBoard){
  let activePlayer = "X";
  if(gameBoard.length > 0 && gameBoard[0].player === 'X'){
    activePlayer = 'O';
  }
  return activePlayer;
}
function getWinner(playerNames, game, activePlayer){
  let winner;
  for(const combination of WINNING_COMBINATIONS){
    const firstSquare = game[combination[0].row][combination[0].col];
    const secondquare = game[combination[1].row][combination[1].col];
    const thirdSquare = game[combination[2].row][combination[2].col];
    if(firstSquare && firstSquare === secondquare && secondquare === thirdSquare){
    winner= firstSquare === 'X' ? playerNames.X : playerNames.O;
    }
  }
  return winner

}
const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function getGameBoard(updateBoard){
  let game = [...initialBoard.map(array => [...array])]
  for( const turn of updateBoard){
    let {square, player} = turn;
    let {row, col} = square
    game[col][row] = player
  }
  return game;
}



function App() {
  const [updateBoard, setUpdateBoard] = useState([])
  const [playerNames, setPlayerNames] = useState({
    'X': 'Player 1',
    'O': 'Player 2'
  })

  const game = getGameBoard(updateBoard)
  let activePlayer = getActivePlayer(updateBoard)
  let winner = getWinner(playerNames, game)
  if(winner) activePlayer = null;

  
  function handleChangePlayer(row, col){
    setUpdateBoard(prev => {
      let curPlayer = getActivePlayer(prev);
      const newBoardGame = [{square: {row, col}, player: curPlayer }, ...prev];
      return newBoardGame;
    })

  }
  function handleRestart(){
    setUpdateBoard([]);
  }
  const draw = updateBoard.length === 9 && !winner;

  function handlePlayerNameChange(symbol, newName){
    setPlayerNames(prev => ({...prev, [symbol]: newName}))
    console.log(playerNames);
  }


  return (
    <main>
      <h1 className='title'>Tic-tac-toe</h1>
      <div className="game-box">
        {(winner || draw) && <GameOver winner={winner} handleRestart={handleRestart}/>}
        <div className="players-box">
          <Player name={'Player 1'} symbol={'X'} isActive={activePlayer==='X'} handlePlayerNameChange={handlePlayerNameChange}/>
          <h1>|</h1>
          <Player name={'Player 2'} symbol={'O'} isActive={activePlayer==='O'} handlePlayerNameChange={handlePlayerNameChange}/>
        </div>
        <GameBoard handleChangePlayer={handleChangePlayer} updateBoard={game}/>

      </div>
      <Log updateBoard={updateBoard} winner={winner} playerNames={playerNames}/>
    </main>
  )
}

export default App
