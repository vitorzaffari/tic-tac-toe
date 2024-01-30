import './MainGameWindow.css'
import { useState } from 'react'
import GameModeNull from '../GameModeNull/GameModeNull.jsx'
import GameModeSelected from '../GameModeSelected/GameModeSelected.jsx';

const MainGameWindow = () => {

    const [gameMode, setGameMode] = useState(null);
    function backToMainMenu() {
        setGameMode(null);
    }

    return (
        <div className='main-game-window-component'>
            {gameMode == null && <GameModeNull changeGameMode={setGameMode}/>}
            {gameMode == 'vs-player' && <GameModeSelected backToMainMenu={backToMainMenu} />}
            {gameMode == 'vs-robot' && <GameModeSelected backToMainMenu={backToMainMenu} isAgainstRobot={true} />}
        </div>
    )
}

export default MainGameWindow