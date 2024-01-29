import Square from '../Square/Square'
import './GameBoard.css'

const GameBoard = ({ gameBoardState, handleNewMove }) => {
    const { board, gameState: hasGameEnded, winningSquares } = gameBoardState;
    
    return (
        <div className='game-board-component'>
            <div className="row">
                <Square isWinningSquare={winningSquares.includes(0)} value={board[0]} handleNewMove={() => handleNewMove(0)} hasGameEnded={hasGameEnded}/>
                <Square isWinningSquare={winningSquares.includes(1)} value={board[1]} handleNewMove={() => handleNewMove(1)} hasGameEnded={hasGameEnded}/>
                <Square isWinningSquare={winningSquares.includes(2)} value={board[2]} handleNewMove={() => handleNewMove(2)} hasGameEnded={hasGameEnded}/>
            </div>
            <div className="row">
                <Square isWinningSquare={winningSquares.includes(3)} value={board[3]} handleNewMove={() => handleNewMove(3)} hasGameEnded={hasGameEnded}/>
                <Square isWinningSquare={winningSquares.includes(4)} value={board[4]} handleNewMove={() => handleNewMove(4)} hasGameEnded={hasGameEnded}/>
                <Square isWinningSquare={winningSquares.includes(5)} value={board[5]} handleNewMove={() => handleNewMove(5)} hasGameEnded={hasGameEnded}/>
            </div>
            <div className="row">
                <Square isWinningSquare={winningSquares.includes(6)} value={board[6]} handleNewMove={() => handleNewMove(6)} hasGameEnded={hasGameEnded}/>
                <Square isWinningSquare={winningSquares.includes(7)} value={board[7]} handleNewMove={() => handleNewMove(7)} hasGameEnded={hasGameEnded}/>
                <Square isWinningSquare={winningSquares.includes(8)} value={board[8]} handleNewMove={() => handleNewMove(8)} hasGameEnded={hasGameEnded}/>
            </div>
        </div>
    )
}

export default GameBoard