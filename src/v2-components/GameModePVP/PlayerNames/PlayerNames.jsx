import PlayerNameInput from '../../PlayerNameInput/PlayerNameInput'
import './PlayerNames.css'

const PlayerNames = ({changePlayerInfo, playersInfo}) => {

  return (
    <div className='player-names-component'>
        <PlayerNameInput order={true} defaultName={'Player 1'} defaultSymbol={'X'} property={'player1'} changePlayerInfo={changePlayerInfo} playersInfo={playersInfo.player1}/>
        <PlayerNameInput order={false} defaultName={'Player 2'} defaultSymbol={'O'} property={'player2'} changePlayerInfo={changePlayerInfo} playersInfo={playersInfo.player2}/>
    </div>
  )
}

export default PlayerNames