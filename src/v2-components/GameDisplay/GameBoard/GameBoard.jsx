import './GameBoard.css'
import Square from './Square/Square'

const GameBoard = ({gameBoardState, handleNewMove, winningSquares}) => {

    return (
        <div className='game-board-component'>
            <div className="row">
                <Square isWinningSquare={winningSquares.includes(0)} value={gameBoardState[0]} handleNewMove={() => handleNewMove(0)}/>
                <Square isWinningSquare={winningSquares.includes(1)} value={gameBoardState[1]} handleNewMove={() => handleNewMove(1)}/>
                <Square isWinningSquare={winningSquares.includes(2)} value={gameBoardState[2]} handleNewMove={() => handleNewMove(2)}/>
            </div>
            <div className="row">
                <Square isWinningSquare={winningSquares.includes(3)} value={gameBoardState[3]} handleNewMove={() => handleNewMove(3)}/>
                <Square isWinningSquare={winningSquares.includes(4)} value={gameBoardState[4]} handleNewMove={() => handleNewMove(4)}/>
                <Square isWinningSquare={winningSquares.includes(5)} value={gameBoardState[5]} handleNewMove={() => handleNewMove(5)}/>
            </div>
            <div className="row">
                <Square isWinningSquare={winningSquares.includes(6)} value={gameBoardState[6]} handleNewMove={() => handleNewMove(6)}/>
                <Square isWinningSquare={winningSquares.includes(7)} value={gameBoardState[7]} handleNewMove={() => handleNewMove(7)}/>
                <Square isWinningSquare={winningSquares.includes(8)} value={gameBoardState[8]} handleNewMove={() => handleNewMove(8)}/>
            </div>
        </div>
    )
}

export default GameBoard