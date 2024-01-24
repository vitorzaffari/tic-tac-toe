import { useState } from 'react'
import GameBoard from './GameBoard/GameBoard'
import './GameDisplay.css'
import GameLogDisplay from './GameLogDisplay/GameLogDisplay'
import PlayersInfoDisplay from './PlayersInfoDisplay/PlayersInfoDisplay'
import { WINNING_COMBINATIONS } from '../../winning-combinations'

const GameDisplay = ({ playersInfo }) => {

  const [gameBoardState, setGameBoardState] = useState({ board: Array(9).fill(null), gameState: '', winningSquares: [] })
  const [gameBoardLogs, setGameBoardLogs] = useState([{ log: 'Game started!', id: Math.random() }])
  const activePlayer = (gameBoardLogs.length % 2) == 0
    ? { player: playersInfo.player2, symbol: playersInfo.player2Symbol }
    : { player: playersInfo.player1, symbol: playersInfo.player1Symbol };


  function handleNewMove(index) {
    if (gameBoardState.board[index]) return;
    if (gameBoardState.gameState == 'won') {
      return;
    }


    const newBoard = [...gameBoardState.board]
    newBoard[index] = activePlayer.symbol
    setGameBoardState((prev) => ({ ...prev, board: newBoard }))


    const newLog = { log: `${activePlayer.player} (${activePlayer.symbol}) made a move!`, id: Math.random() };
    setGameBoardLogs((prev) => [newLog, ...prev])


    const hasWinner = verifyWinCondition(newBoard, activePlayer.symbol)
    if (hasWinner?.winner) {
      const winLog = {log: `Game finished. ${activePlayer.player} won!`, id: Math.random()}
      setGameBoardLogs(prev => [winLog, ...prev])
      setGameBoardState(prev => ({ ...prev, gameState: 'won', winningSquares: [...hasWinner.squares] }))
    }



    const isDraw = gameBoardLogs.length === 9

    if (isDraw) {
      const drawLog = {log: `Game drawn. No winners!`, id: Math.random()}
      setGameBoardLogs(prev => [drawLog, ...prev])
      setGameBoardState(prev => ({ ...prev, gameState: 'draw' }))
    }
  }


  function verifyWinCondition(boardSnapShot, symbol) {
    for (let combination of WINNING_COMBINATIONS) {
      const firstSquare = combination[0]
      const secondSquare = combination[1]
      const thirdSquare = combination[2]
      if (boardSnapShot[firstSquare] === symbol &&
        boardSnapShot[firstSquare] === boardSnapShot[secondSquare] &&
        boardSnapShot[firstSquare] === boardSnapShot[thirdSquare]) {
        return {winner:symbol, squares: [firstSquare, secondSquare, thirdSquare]};
      }
    }
    return ;
    //0,1,2
    //3,4,5
    //6,7,8
    //0,3,6
    //1,4,7
    //2,5,8
    //2,4,6
    //0,4,8
  }















  return (
    <div>
      <PlayersInfoDisplay playersInfo={playersInfo} activePlayer={activePlayer} />
      <GameBoard gameBoardState={gameBoardState.board} handleNewMove={handleNewMove} winningSquares={gameBoardState.winningSquares}/>
      <GameLogDisplay gameBoardLogs={gameBoardLogs} />
    </div>
  )
}

export default GameDisplay