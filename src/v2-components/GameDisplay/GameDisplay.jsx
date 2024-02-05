import './GameDisplay.css'
import { useState } from 'react'
import GameBoard from '../GameBoard/GameBoard'
import GameLogDisplay from '../GameLogDisplay/GameLogDisplay'
import PlayersInfoDisplay from '../PlayersInfoDisplay/PlayersInfoDisplay'
import {
  getActivePlayer,
  getLogMessage,
  getRandomFreeIndex,
  verifyPossibleWin,
  verifyWinCondition
} from '../../utils/game-logic'

const initialGameBoardState = { board: Array(9).fill(null), gameState: '', winningSquares: [] }
const initialGameLogsState = [{ log: 'Game started!', id: Math.random() }]


const GameDisplay = ({ playersInfo, backToMainMenu, isRobot = false }) => {

  const [gameBoardState, setGameBoardState] = useState(initialGameBoardState)
  const [gameBoardLogs, setGameBoardLogs] = useState(initialGameLogsState)
  const activePlayer = getActivePlayer(gameBoardLogs.length, playersInfo)
  const isDraw = gameBoardLogs.length === 10 && gameBoardState.gameState !== 'won'

  if (gameBoardLogs.length % 2 == 0 && gameBoardState.gameState == '' && isRobot) {
    handleRobotMove()
  }

  if (isDraw) {
    const drawLog = { log: `Game drawn. No winner!`, id: Math.random() }
    setGameBoardState(prev => ({ ...prev, gameState: 'draw' }))
    setGameBoardLogs(prev => [drawLog, ...prev])
  }

  function handleNewMove(index) {
    if (gameBoardState.board[index]) return;
    if (gameBoardState.gameState === 'won') return;

    const newBoard = [...gameBoardState.board]
    newBoard[index] = activePlayer.symbol
    setGameBoardState((prev) => ({ ...prev, board: newBoard }))

    const message = getLogMessage(index)
    const newLog = { log: `${activePlayer.player} (${activePlayer.symbol}) chose ${message}!`, id: Math.random() };
    setGameBoardLogs((prev) => [newLog, ...prev])

    const hasWinner = verifyWinCondition(newBoard, activePlayer.symbol)
    if (hasWinner?.winner) {
      const winLog = { log: `Game finished. ${activePlayer.player} won!`, id: Math.random() }
      setGameBoardLogs(prev => [winLog, ...prev])
      setGameBoardState(prev => ({ ...prev, gameState: 'won', winningSquares: [...hasWinner.squares] }))
    }
  }

  function restartGame() {
    setGameBoardState(initialGameBoardState)
    setGameBoardLogs([{ log: 'Game restarted!', id: Math.random() }])
  }

  function handleRobotMove() {

    const robotWinningSquareIndex = verifyPossibleWin(gameBoardState.board, 'O')
    if (robotWinningSquareIndex) {
      return makeRobotMove(Number(robotWinningSquareIndex))
    }

    const playerWinningSquareIndex = verifyPossibleWin(gameBoardState.board, 'X')
    if (playerWinningSquareIndex) {
      return makeRobotMove(Number(playerWinningSquareIndex))
    }

    const index = getRandomFreeIndex(gameBoardState.board)
    return makeRobotMove(index)
  }

  function makeRobotMove(index) {
    const newBoard = [...gameBoardState.board]
    newBoard[index] = 'O'
    setGameBoardState((prev) => ({ ...prev, board: newBoard }))

    const message = getLogMessage(index)
    const newLog = { log: `Robot (O) chose ${message}!`, id: Math.random() };
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

  return (
    <section className='game-display'>
      <PlayersInfoDisplay playersInfo={playersInfo} activePlayer={activePlayer} gameState={gameBoardState.gameState} restartGame={restartGame} backToMainMenu={backToMainMenu} isRobot={isRobot} />

      <GameBoard gameBoardState={gameBoardState} handleNewMove={handleNewMove} />

      <GameLogDisplay gameBoardLogs={gameBoardLogs} />
    </section>
  )
}

export default GameDisplay