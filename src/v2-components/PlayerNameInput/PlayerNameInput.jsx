import './PlayerNameInput.css'

const PlayerNameInput = ({ order, defaultName, defaultSymbol, property, changePlayerInfo, playersInfo }) => {


  let inputContent = 
  <div className="input-wrap">
    <label 
    className='player-name-label' 
    htmlFor={defaultName}
    >Enter {defaultName.toLowerCase()} name</label>

    <input 
    className='player-name-input' 
    name={defaultName} id={defaultName} 
    type="text" value={playersInfo} 
    onChange={(e) => changePlayerInfo(property, e.target.value)}/>
  </div>

  let symbolContent =
    <div className="symbol-wrap">
      <p className='player-symbol-label'>Symbol</p>
      <p className='player-symbol-p'>{defaultSymbol}</p>
    </div>



  return (
    <div className='player-name-input-component'>
      {order
        ? <>
          {inputContent}
          {symbolContent}
        </>
        : <>
          {symbolContent}
          {inputContent}
        </>
      }

    </div>
  )
}

export default PlayerNameInput