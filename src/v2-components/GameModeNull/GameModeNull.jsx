import './GameModeNull.css'
import IntroText from '../IntroText/IntroText'
import PVPimage from '../../assets/man-vs-woman.png';
import PVSRobotImage from '../../assets/man-vs-robot.png';
import SmallTextBox from '../SmallTextBox/SmallTextBox';

const GameModeNull = ({ changeGameMode }) => {
    return (
        <section>
            <IntroText />
            <div className='game-mode-component'>
                <SmallTextBox text={'Select game mode'} fontSize={18} />
                <div className="container">
                    <button className="mode-select-button" onClick={() => changeGameMode('vs-player')}>
                        <img src={PVPimage} alt="Player VS Player" width={350} height={330}/>
                        <p className='mode-select-text'>Play against another player</p>
                    </button>
                    <button className="mode-select-button" onClick={() => changeGameMode('vs-robot')}>
                        <img src={PVSRobotImage} alt="Player VS Machine" width={350} height={330}/>
                        <p className='mode-select-text'>Play against the machine</p>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default GameModeNull