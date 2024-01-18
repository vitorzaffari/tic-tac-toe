import './IntroText.css'
import SmallTextBox from '../SmallTextBox/SmallTextBox'

const IntroText = () => {
    return (
        <div>
            <SmallTextBox text={'What is tic-tac-toe?'} />
            <div className="tictactoe-description">
                <p>
                    Tic-tac-toe, also known as noughts and crosses or Xs and Os, is a  classic two-player game played on a 3x3 grid. The objective of the game  is to be the first player to form a line of three of their symbols (either X or O) horizontally, vertically, or diagonally on the grid.
                </p>
                <p>
                    Players take turns placing their symbols in empty cells until one player achieves the winning line or the entire grid is filled without a winner, resulting in a draw.
                </p>

            </div>
        </div>
    )
}

export default IntroText