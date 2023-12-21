import './Log.css'

const Log = ({updateBoard, winner, playerNames}) => {
  return (
    <div className='log-wrap'>
      {winner && <p className='log-p'><span>{winner.toUpperCase()}</span> won!</p>}
        {updateBoard.map((item, index) => {
          let name = item.player==='X'? playerNames.X : playerNames.O
          return (
            <p key={`${item.player}-${item.square.row}-${item.square.col}`} className='log-p'><span>{name.slice(0,8).toUpperCase()}</span> chose square on the row {item.square.col+1}, column {item.square.row+1}</p>
        )
}
)}
    </div>
  )
}

export default Log