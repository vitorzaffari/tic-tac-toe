import './GameBoard.css'
import Square from './Square/Square'

const GameBoard = ({gameBoardState, handleNewMove}) => {

    return (
        <div className='game-board-component'>
            <div className="row">
                <Square value={gameBoardState[0]} handleNewMove={() => handleNewMove(0)}/>
                <Square value={gameBoardState[1]} handleNewMove={() => handleNewMove(1)}/>
                <Square value={gameBoardState[2]} handleNewMove={() => handleNewMove(2)}/>
            </div>
            <div className="row">
                <Square value={gameBoardState[3]} handleNewMove={() => handleNewMove(3)}/>
                <Square value={gameBoardState[4]} handleNewMove={() => handleNewMove(4)}/>
                <Square value={gameBoardState[5]} handleNewMove={() => handleNewMove(5)}/>
            </div>
            <div className="row">
                <Square value={gameBoardState[6]} handleNewMove={() => handleNewMove(6)}/>
                <Square value={gameBoardState[7]} handleNewMove={() => handleNewMove(7)}/>
                <Square value={gameBoardState[8]} handleNewMove={() => handleNewMove(8)}/>
            </div>
        </div>
    )
}

export default GameBoard