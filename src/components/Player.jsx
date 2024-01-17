import './Player.css'


const Player = ({ name, symbol, isActive}) => {

  return (
    <div className={`player-wrapper ${isActive && 'active'}`}>
      <p className='player-name'>{name.slice(0, 8)}</p>
      <p className='player-symbol'>{symbol}</p>
    </div>

  )
}

export default Player