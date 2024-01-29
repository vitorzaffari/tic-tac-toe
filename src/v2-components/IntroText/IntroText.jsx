import './IntroText.css'
import SmallTextBox from '../SmallTextBox/SmallTextBox'

const IntroText = () => {
    return (
        <section className='intro-component' >
            <SmallTextBox text={'What is tic-tac-toe?'} fontSize={19}/>
            <div className="tictactoe-description">
                <p>
                    Tic-tac-toe, also known as noughts and crosses or Xs and Os, is a  classic two-player game played on a 3x3 grid. The objective of the game  is to be the first player to form a line of three of their symbols (either X or O) horizontally, vertically, or diagonally on the grid.
                    Learn more <a className='wiki-link' href="https://en.wikipedia.org/wiki/Tic-tac-toe" target='_blank'>here</a>.
                </p>
                <p>
                </p>
            </div>
        </section>
    )
}

export default IntroText