import SmallTextBox from '../../SmallTextBox/SmallTextBox'
import './PlayersInfoDisplay.css'

const PlayersInfoDisplay = ({playersInfo, activePlayer}) => {

    const nextPlayer = playersInfo.player1 == activePlayer.player
    ? playersInfo.player2 
    : playersInfo.player1; 


  return (
    <div className='player-info-display-component'>
        <div className="current-player-info-wrap">
            <p>Current Player</p>
            <div className='wrap'>
                <SmallTextBox text={activePlayer.player}/>
                <SmallTextBox text={activePlayer.symbol}/>
            </div>
        </div>
        <div className="current-player-info-wrap">
            <p>Next Player</p>
            <div className='wrap'>
                <SmallTextBox text={nextPlayer}/>
                <SmallTextBox text={activePlayer.symbol === 'O' ? 'X' : 'O'}/>
            </div>
        </div>
    </div>
  )
}

export default PlayersInfoDisplay