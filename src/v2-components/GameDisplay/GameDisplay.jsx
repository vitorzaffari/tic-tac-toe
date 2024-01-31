import { useState } from 'react'
import GameBoard from '../GameBoard/GameBoard'
import './GameDisplay.css'
import GameLogDisplay from '../GameLogDisplay/GameLogDisplay'
import PlayersInfoDisplay from '../PlayersInfoDisplay/PlayersInfoDisplay'
import { WINNING_COMBINATIONS } from '../../winning-combinations'

const GameDisplay = ({ playersInfo, backToMainMenu, isRobot = false }) => {

  const [gameBoardState, setGameBoardState] = useState({ board: Array(9).fill(null), gameState: '', winningSquares: [] })
  const [gameBoardLogs, setGameBoardLogs] = useState([{ log: 'Game started!', id: Math.random() }])
  const activePlayer = (gameBoardLogs.length % 2) == 0
    ? { player: playersInfo.player2, symbol: playersInfo.player2Symbol }
    : { player: playersInfo.player1, symbol: playersInfo.player1Symbol };

  if (gameBoardLogs.length % 2 == 0 && gameBoardState.gameState == '' ** isRobot) {
    handleRobotMove()
  }

  const isDraw = gameBoardLogs.length === 10 && gameBoardState.gameState !== 'won'
  if (isDraw) {
    const drawLog = { log: `Game drawn. No winner!`, id: Math.random() }
    setGameBoardLogs(prev => [drawLog, ...prev])
    setGameBoardState(prev => ({ ...prev, gameState: 'draw' }))
  }

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
      const winLog = { log: `Game finished. ${activePlayer.player} won!`, id: Math.random() }
      setGameBoardLogs(prev => [winLog, ...prev])
      setGameBoardState(prev => ({ ...prev, gameState: 'won', winningSquares: [...hasWinner.squares] }))
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
        return { winner: symbol, squares: [firstSquare, secondSquare, thirdSquare] };
      }
    }
    return;
    //0,1,2
    //3,4,5
    //6,7,8
    //0,3,6
    //1,4,7
    //2,5,8
    //2,4,6
    //0,4,8
  }

  function restartGame() {
    setGameBoardState(() => ({
      board: Array(9).fill(null),
      gameState: '',
      winningSquares: []
    }))
    setGameBoardLogs([{ log: 'Game restarted!', id: Math.random() }])
  }

  function handleRobotMove() {

    const robotWinningSquareIndex = verifyPossibleWin(gameBoardState.board, 'O')
    if (robotWinningSquareIndex) {
      return makeRobotMove(Number(robotWinningSquareIndex))

    } else {
      const playerWinningSquareIndex = verifyPossibleWin(gameBoardState.board, 'X')
      if (playerWinningSquareIndex) {
        return makeRobotMove(Number(playerWinningSquareIndex))

      } else {
        const index = makeRobotRandomMove()
        return makeRobotMove(index)
      }
    }

  }

  function makeRobotMove(index) {
    const newBoard = [...gameBoardState.board]
    newBoard[index] = 'O'
    setGameBoardState((prev) => ({ ...prev, board: newBoard }))

    const newLog = { log: `Robot (${activePlayer.symbol}) made a move!`, id: Math.random() };
    setGameBoardLogs((prev) => [newLog, ...prev])

    const hasWinner = verifyWinCondition(newBoard, 'O')
    if (hasWinner?.winner) {
      const winLog = { log: `Game finished. Robot won!`, id: Math.random() }
      setGameBoardLogs(prev => [winLog, ...prev])
      setGameBoardState(prev => ({ ...prev, gameState: 'won', winningSquares: [...hasWinner.squares] }))
    }

    const isDraw = gameBoardLogs.length === 9
    if (isDraw) {
      const drawLog = { log: `Game drawn. No winners!`, id: Math.random() }
      setGameBoardLogs(prev => [drawLog, ...prev])
      setGameBoardState(prev => ({ ...prev, gameState: 'draw' }))
    }
  }

  function makeRobotRandomMove() {
    const possibleIndexes = gameBoardState.board.map((item, index) => {
      if (item === null) return index
      else return null
    })
    const indexes = possibleIndexes.filter(item => item !== null)
    const moveIndex = Math.floor(Math.random() * indexes.length)
    return indexes[moveIndex]
  }

  function verifyPossibleWin(boardSnapShot, symbol) {

    for (let combination of WINNING_COMBINATIONS) {
      const firstSquare = combination[0]
      const secondSquare = combination[1]
      const thirdSquare = combination[2]
      
      if (boardSnapShot[firstSquare] === symbol &&
        boardSnapShot[secondSquare] === symbol &&
        boardSnapShot[thirdSquare] === null) {
        return thirdSquare.toString();

      } else if (boardSnapShot[secondSquare] === symbol &&
        boardSnapShot[thirdSquare] === symbol &&
        boardSnapShot[firstSquare] === null) {
        return firstSquare.toString();

      } else if (boardSnapShot[thirdSquare] === symbol &&
        boardSnapShot[firstSquare] === symbol &&
        boardSnapShot[secondSquare] === null) {
        return secondSquare.toString();
      }
    }
    return;
  }


  return (
    <>
      <PlayersInfoDisplay playersInfo={playersInfo} activePlayer={activePlayer} gameState={gameBoardState.gameState} restartGame={restartGame} backToMainMenu={backToMainMenu} isRobot={isRobot}/>

      <GameBoard gameBoardState={gameBoardState} handleNewMove={handleNewMove}/>

      <GameLogDisplay gameBoardLogs={gameBoardLogs} />
    </>
  )
}

export default GameDisplay