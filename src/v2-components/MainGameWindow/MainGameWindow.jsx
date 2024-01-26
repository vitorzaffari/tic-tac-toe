import './MainGameWindow.css'
import { useState } from 'react'
import GameModeNull from '../GameModeNull/GameModeNull.jsx'
import GameModePVP from '../GameModePVP/GameModePVP.jsx';
import GameModePVR from '../GameModePVR/GameModePVR.jsx';

const MainGameWindow = () => {

    const [gameMode, setGameMode] = useState(null);
    function backToMainMenu(){
        setGameMode(null);
    }

    return (
        <div className='main-game-window-component'>

            {gameMode == null && <GameModeNull changeGameMode={setGameMode} />}
            {gameMode == 'vs-player' && <GameModePVP backToMainMenu={backToMainMenu}/>}
            {gameMode == 'vs-robot' && <GameModePVR backToMainMenu={backToMainMenu}/>}


        </div>
    )
}

export default MainGameWindow