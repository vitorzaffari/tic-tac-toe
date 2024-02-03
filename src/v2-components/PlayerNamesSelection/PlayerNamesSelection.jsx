import { useRef } from 'react'
import './PlayerNamesSelection.css'

const PlayerNames = ({ changePlayerInfo, playersInfo, isRobot = false }) => {


  let p1Ref = useRef(null)
  let p2Ref = useRef(null)

  function handleFocus(ref) {
    ref.current.select()
  }

  function handleChangeInput(e) {
    if (e.target.value.length > 10) {
      return;
    }

    changePlayerInfo(e.target.name, e.target.value)
  }

  return (
    <div className='player-names-component'>


      <div className="input-wrap">
        <label className='player-name-label' htmlFor='player1'>Enter player name</label>
        <input
          className='player-name-input'
          ref={p1Ref}
          onClick={() => handleFocus(p1Ref)}
          name="player1" id="player1"
          type="text" value={playersInfo.player1}
          onChange={(e) => handleChangeInput(e)} />
      </div>


      <div className="symbol-wrap">
        <p className='player-symbol-label'>Symbol</p>
        <p className='player-symbol-p'>X</p>
      </div>


      <div className="symbol-wrap">
        <p className='player-symbol-label'>Symbol</p>
        <p className='player-symbol-p'>O</p>
      </div>


      <div className="input-wrap">
        <label className='player-name-label' htmlFor='player2' >{isRobot ? 'Robot name' : `Enter player name`}</label>
        <input
          ref={p2Ref}
          onClick={() => handleFocus(p2Ref)}
          className='player-name-input'
          name="player2" id="player2"
          type="text" value={playersInfo.player2}
          onChange={(e) => handleChangeInput(e)} />
      </div>


    </div>
  )
}

export default PlayerNames