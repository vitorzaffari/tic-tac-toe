import './PlayersInfoDisplay.css'

const PlayersInfoDisplay = ({ playersInfo, activePlayer, gameState, restartGame, backToMainMenu }) => {

    return (
        <>
            {!gameState &&
                <div className='player-info-display-component'>
                    <div className={`player-info-div ${activePlayer.symbol === 'X' && 'active'}`}>
                        <div className='wrap'>
                            <p>{playersInfo.player1}</p>
                            <p className='player-symbol'>{playersInfo.player1Symbol}</p>
                        </div>
                    </div>
                    <div className={`player-info-div ${activePlayer.symbol === 'O' && 'active'}`}>
                        <div className='wrap'>
                            <p>{playersInfo.player2}</p>
                            <p className='player-symbol'>{playersInfo.player2Symbol}</p>
                        </div>
                    </div>

                </div>
            }
            {gameState &&
                <div className='winner-container'>

                    {gameState == 'won' && <p className='winner-message'>{activePlayer.player} won. Congratulations!</p>}

                    {gameState == 'draw' && <p className='winner-message'>Game drawn. No winner!</p>}

                    <div className='btns-wrap'>
                        <button onClick={restartGame}>Restart Game</button>
                        <p>or</p>
                        <button onClick={backToMainMenu}>Back to main menu</button>
                    </div>
                </div>
            }
        </>
    )
}

export default PlayersInfoDisplay