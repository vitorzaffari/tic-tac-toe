import React, { useState } from 'react'
import './Player.css'


const Player = ({name, symbol, isActive, handlePlayerNameChange}) => {

  const [playerName, setPlayerName] = useState(name)
  const [isEditing, setIsEditing] = useState(false)

  function handleChangeName() {
    if(!playerName) return;
    handlePlayerNameChange(symbol, playerName)
    setIsEditing(prev => !prev)
  }

  return (
        <div className={`player-wrapper ${isActive && 'active'}`}>
            {isEditing ? <input className='name-input' type='text' value={playerName} onChange={(e) => setPlayerName(e.target.value)} required/>:
            <p className='player-name'>{playerName.slice(0, 8)}</p>
            }
            <p className='player-symbol'>{symbol}</p>
            {isEditing ? <button onClick={handleChangeName}>Save</button> : 
            <button type='button' className='edit-btn' onClick={handleChangeName} disabled={isActive}>Edit</button>
            }
        </div>

    )
}

export default Player