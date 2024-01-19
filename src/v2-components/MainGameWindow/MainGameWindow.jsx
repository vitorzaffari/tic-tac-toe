import './MainGameWindow.css'
import { useState } from 'react'
import GameModeNull from '../GameModeNull/GameModeNull.jsx'
import GameModePVP from '../GameModePVP/GameModePVP.jsx';

const MainGameWindow = () => {

    const [gameMode, setGameMode] = useState(null);

    return (
        <div className='main-game-window-component'>

            {gameMode == null && <GameModeNull changeGameMode={setGameMode} />}
            {gameMode == 'vs-player' && <GameModePVP />}


        </div>
    )
}

export default MainGameWindow