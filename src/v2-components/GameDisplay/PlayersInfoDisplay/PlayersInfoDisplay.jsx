import SmallTextBox from '../../SmallTextBox/SmallTextBox'
import './PlayersInfoDisplay.css'

const PlayersInfoDisplay = ({ playersInfo, activePlayer, gameState, restartGame, backToMainMenu }) => {

    const nextPlayer = playersInfo.player1 == activePlayer.player
        ? playersInfo.player2
        : playersInfo.player1;


    if (gameState === 'won') {
        return (
            <div className='winner-container'>
                <p className='winner-message'>{activePlayer.player} won. Congratulations!</p>
                <div className='btns-wrap'>
                    <button onClick={restartGame}>Restart Game</button>
                    <p>or</p>
                    <button onClick={backToMainMenu}>Back to main menu</button>
                </div>
            </div>
        )

    } else if (gameState === 'draw') {
        return(
            <div className='winner-container'>
            <p className='winner-message'>DRAW. No winner!</p>
            <div className='btns-wrap'>
                <button onClick={restartGame}>Restart Game</button>
                <p>or</p>
                <button  onClick={backToMainMenu}>Back to main menu</button>
            </div>
        </div>
        )
    } else {
        return (
            <div className='player-info-display-component'>
                <div className="current-player-info-wrap">
                    <p>Current Player</p>
                    <div className='wrap'>
                        <p>{activePlayer.player}</p>
                        <p>{activePlayer.symbol}</p>
                    </div>
                </div>
                <div className="next-player-info-wrap">
                    <p>Next Player</p>
                    <div className='wrap'>
                        <SmallTextBox text={nextPlayer} />
                        <SmallTextBox text={activePlayer.symbol === 'O' ? 'X' : 'O'} />
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayersInfoDisplay