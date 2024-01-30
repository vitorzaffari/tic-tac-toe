import PlayerNameInput from '../PlayerNameInput/PlayerNameInput'
import './PlayerNames.css'

const PlayerNames = ({changePlayerInfo, playersInfo, isRobot=false}) => {

  return (
    <div className='player-names-component'>

        <PlayerNameInput order={true} defaultName={'Player 1'} defaultSymbol={'X'} property={'player1'} changePlayerInfo={changePlayerInfo} playersInfo={playersInfo.player1}/>
        
        <PlayerNameInput order={false} defaultName={isRobot ? 'Robot' :'Player 2'} defaultSymbol={'O'} property={'player2'} changePlayerInfo={changePlayerInfo} playersInfo={playersInfo.player2} isRobot={isRobot}/>
    </div>
  )
}

export default PlayerNames