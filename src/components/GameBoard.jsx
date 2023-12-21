import './GameBoard.css'

const GameBoard = ({handleChangePlayer, updateBoard}) => {




  return (
    <div className='game-board'>
      
      {updateBoard.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {
            row.map((square, colIndex) => (
              <button className="square" key={colIndex} onClick={() => handleChangePlayer(rowIndex, colIndex)} disabled={updateBoard[colIndex][rowIndex] !== null}><p className='square-symbol'>{updateBoard[colIndex][rowIndex]}</p></button>
            ))
          }
        </div>
      ))}


    </div>
  )
}

export default GameBoard