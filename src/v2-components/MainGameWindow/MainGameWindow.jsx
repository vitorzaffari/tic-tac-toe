import './MainGameWindow.css'
import { useState } from 'react'
import GameModeNull from '../GameModeNull/GameModeNull.jsx'

const MainGameWindow = () => {

    const [gameMode, setGameMode] = useState(null);

    function changeGameMode(mode) {
        setGameMode(mode)
    }


    return (
        <div className='main-game-window-component'>

            {gameMode == null && <GameModeNull changeGameMode={changeGameMode} />}
            


        </div>
    )
}

export default MainGameWindow