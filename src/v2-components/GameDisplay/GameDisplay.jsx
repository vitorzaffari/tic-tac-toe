import { useState } from 'react'
import GameBoard from './GameBoard/GameBoard'
import './GameDisplay.css'
import GameLogDisplay from './GameLogDisplay/GameLogDisplay'
import PlayersInfoDisplay from './PlayersInfoDisplay/PlayersInfoDisplay'

const GameDisplay = ({ playersInfo }) => {

  const [gameBoardState, setGameBoardState] = useState(Array(9).fill(null))
  const [gameBoardLogs, setGameBoardLogs] = useState(['Game started!'])
console.log(gameBoardLogs)
  const activePlayer = gameBoardLogs.length % 2 == 0 ? { player: playersInfo.player2, symbol: playersInfo.player2Symbol } : { player: playersInfo.player1, symbol: playersInfo.player1Symbol };

  function handleNewMove(index) {
    const newBoard = [...gameBoardState]
    newBoard[index] = activePlayer.symbol
    setGameBoardState(() => newBoard)

    const newLog = `${activePlayer.player} (${activePlayer.symbol}) made a move!`
    setGameBoardLogs((prev) => [newLog, ...prev])
  }

  return (
    <div>
      <PlayersInfoDisplay playersInfo={playersInfo} activePlayer={activePlayer.player} />
      <GameBoard gameBoardState={gameBoardState} handleNewMove={handleNewMove} />
      <GameLogDisplay />
    </div>
  )
}

export default GameDisplay