import './PlayersInfoDisplay.css'

const PlayersInfoDisplay = ({ playersInfo, activePlayer, gameState, restartGame, backToMainMenu, isRobot = false }) => {



    if (!gameState) {
        return (
            <div className='player-info-display-component'>
                <div className={`player-info-div ${activePlayer.symbol === 'X' && 'active'}`}>
                    <p> {playersInfo.player1}</p>
                    <p className='player-symbol'>{playersInfo.player1Symbol}</p>
                </div>
                <div className={`player-info-div ${activePlayer.symbol === 'O' && 'active'}`}>
                    <p>{playersInfo.player2}</p>
                    <p className='player-symbol'>{playersInfo.player2Symbol}</p>
                </div>

            </div>
        )
    }


    let message = (gameState === 'won') ? (isRobot && activePlayer.symbol === 'O') ? 'Robot won. Try again!' : `${activePlayer.player} won. Congratulations!` : 'Game drawn. No winner!';

    return (
        <div className='winner-container'>
            <p className='winner-message'>{message}</p>
            <div className='btns-wrap'>
                <button onClick={restartGame}>Restart Game</button>
                <p>or</p>
                <button onClick={backToMainMenu}>Back to menu</button>
            </div>
        </div>
    )
}

export default PlayersInfoDisplay