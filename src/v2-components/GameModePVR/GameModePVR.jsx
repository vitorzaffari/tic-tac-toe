import React, { useState } from 'react'
import PvRobotIMG from '../../assets/man-vs-robot2.png'
import SmallTextBox from '../SmallTextBox/SmallTextBox'
import GameDisplay from '../GameDisplay/GameDisplay'
import './GameModePVR.css'
import PlayerNames from '../GameModePVP/PlayerNames/PlayerNames'
const GameModePVR = ({ backToMainMenu }) => {
    const [playersInfo, setPlayersInfo] = useState(
        {
            player1: 'Player 1',
            player1Symbol: 'X',
            player2: 'Robot',
            player2Symbol: 'O'
        }
    )
    const [isGameActive, setIsGameActive] = useState(false)

    function changePlayerInfo(property, value) {
        setPlayersInfo(prev => ({
            ...prev, [property]: value
        }))
    }


    return (
        <div>

            {!isGameActive &&
                <>
                    <SmallTextBox text={"Player VS Robot"} />
                    <PlayerNames changePlayerInfo={changePlayerInfo} playersInfo={playersInfo} isRobot={true} />

                    <button className='start-game-btn' onClick={() => setIsGameActive(true)}>
                        <img src={PvRobotIMG} alt="Player VS Robot Image" className='pvr-image' />
                        Start Game
                    </button>
                </>
            }

            {isGameActive && <GameDisplay
                isRobot={true}
                playersInfo={playersInfo}
                backToMainMenu={backToMainMenu} />}
            <button className='back-to-menu-btn' onClick={backToMainMenu}>Back to main menu</button>

        </div>
    )
}

export default GameModePVR