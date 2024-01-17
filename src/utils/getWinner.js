import { WINNING_COMBINATIONS } from '../winning-combinations.js'



export default function getWinner(playerNames, game) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = game[combination[0].row][combination[0].col];
    const secondquare = game[combination[1].row][combination[1].col];
    const thirdSquare = game[combination[2].row][combination[2].col];
    if (
      firstSquare &&
      firstSquare === secondquare &&
      secondquare === thirdSquare
    ) {
      winner = firstSquare === "X" ? playerNames.X : playerNames.O;
    }
  }
  return winner;
}
