import { useState } from 'react'
import PVPimage2 from '../../assets/man-vs-woman-2.png'
import './GameModePVP.css'
import GameDisplay from '../GameDisplay/GameDisplay'
import PlayerNames from '../PlayerNames/PlayerNames'

const GameModePVP = ({ backToMainMenu }) => {
  const [playersInfo, setPlayersInfo] = useState(
    {
      player1: 'Player 1',
      player1Symbol: 'X',
      player2: 'Player 2',
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
    <section className='pvp-component'>

      {!isGameActive &&
        <>
          <PlayerNames changePlayerInfo={changePlayerInfo} playersInfo={playersInfo} />

          <img src={PVPimage2} alt="Player VS Player Image" className='pvp-image' />
          <button className='start-game-btn' onClick={() => setIsGameActive(true)}>
            Start Game
          </button>
        </>
      }

      {isGameActive && <GameDisplay playersInfo={playersInfo} backToMainMenu={backToMainMenu} />}
      <button className='back-to-menu-btn' onClick={backToMainMenu}>Back to main menu</button>
    </section>
  )
}

export default GameModePVP