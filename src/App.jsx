
import './App.css'
import Footer from './v2-components/Footer/Footer.jsx';
import MainGameWindow from './v2-components/MainGameWindow/MainGameWindow.jsx';


//!! Bugs (3):
//!! Selecting center square [4] and then bottom right square [8] agains the robot
//!! will not trigger the Robot block move on top left square [0];

//!! Selecting top left square [3] and then bottom left square [6] agains the robot
//!! will not trigger the Robot block move on top left square [0];

//!! For squares 0,1,2 sometimes robot doesn't finish the game, blocking the player 
//!! instead of winning, these bugs are probably from the same source;

//TODO Merge PVP and PVR components
//TODO Footer

function App() {


  return (
    <main>
      <MainGameWindow />
      <Footer />
    </main>
  )
}

export default App
