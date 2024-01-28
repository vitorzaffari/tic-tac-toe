
import './App.css'
import MainGameWindow from './v2-components/MainGameWindow/MainGameWindow.jsx';


//!! Bugs (1):
//!! Selecting center square [4] and then bottom right square [8] agains the robot
//!! will not trigger the Robot block move on top left square [0];


function App() {
 

  return (
    <main>
      <MainGameWindow />
    </main>
  )
}

export default App
