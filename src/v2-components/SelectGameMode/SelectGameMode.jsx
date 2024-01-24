import './SelectGameMode.css'
import PVPimage from '../../assets/man-vs-woman.png';
import PVSRobotImage from '../../assets/man-vs-robot.png';
import SmallTextBox from '../SmallTextBox/SmallTextBox';

const SelectGameMode = ({changeGameMode}) => {


    return (
        <div>
            <SmallTextBox text={'Select one'} />
            <div className="container">
                <button  className="mode-select-button" onClick={() => changeGameMode('vs-player')}>
                    <img src={PVPimage} alt="Player VS Player" />
                    <p className='mode-select-text'>Play against another player</p>
                </button>
                
                <button  className="mode-select-button" onClick={() => changeGameMode('vs-robot')}>
                    <img src={PVSRobotImage} alt="Player VS Machine" />
                    <p className='mode-select-text'>Play against the machine</p>
                </button>
            </div>
        </div>
    )
}

export default SelectGameMode