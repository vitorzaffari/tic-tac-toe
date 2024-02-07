import './GameModeSelected.css'
import { useState } from 'react'
import PvRobotIMG from '../../assets/man-vs-robot2.png'
import PVPimage2 from '../../assets/man-vs-woman-2.png'
import GameDisplay from '../GameDisplay/GameDisplay'
import PlayerNamesSelection from '../PlayerNamesSelection/PlayerNamesSelection'

const GameModeSelected = ({ backToMainMenu, isAgainstRobot = false }) => {

    const initialPlayersInfo = {
        player1: 'Player 1',
        player1Symbol: 'X',
        player2: isAgainstRobot ? 'Robot' : 'Player 2',
        player2Symbol: 'O',
    }

    const [playersInfo, setPlayersInfo] = useState(initialPlayersInfo);
    const [isGameActive, setIsGameActive] = useState(false);

    function changePlayerInfo(property, value) {
        setPlayersInfo(prev => ({
            ...prev, [property]: value
        }))
    }
    function handleStartGame() {
        setIsGameActive(true)
        if (playersInfo.player1.trim() === '') {
            setPlayersInfo(prev => ({ ...prev, player1: 'Player 1' }))
        }
        if (playersInfo.player2.trim() === '') {
            const playerName = isAgainstRobot ? 'Robot' : 'Player 2'
            setPlayersInfo(prev => ({ ...prev, player2: playerName }))
        }
    }

    if (!isGameActive) {

        const image = isAgainstRobot ? PvRobotIMG : PVPimage2;
        const imageAlt = isAgainstRobot ? 'Player VS Robot' : 'Player VS Player';

        return (
            <section className='game-mode-selected'>
                <PlayerNamesSelection changePlayerInfo={changePlayerInfo} playersInfo={playersInfo} isRobot={isAgainstRobot} />
                <div className="img-container">
                    <img src={image} alt={imageAlt} className='mode-image' width={450} height={425} />
                </div>
                <button className='start-game-btn' onClick={handleStartGame}>
                    Start Game
                </button>
                <div className='navigation'>
                    <button className='back-to-menu-btn' onClick={backToMainMenu}>Back to menu</button>
                </div>
            </section>
        )
    }


    return (
        <section className='game-mode-selected'>
            <GameDisplay playersInfo={playersInfo} backToMainMenu={backToMainMenu} isRobot={isAgainstRobot} />
            <div className='navigation'>
                <button className='back-to-menu-btn' onClick={backToMainMenu}>Back to menu</button>
                <p>{'>'}</p>
                <button className='back-to-menu-btn' onClick={() => setIsGameActive(false)}>Name Selection</button>
            </div>
        </section>
    )
}

export default GameModeSelected;