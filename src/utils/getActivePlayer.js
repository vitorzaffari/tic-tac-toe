export default function getActivePlayer(gameBoard) {
  let activePlayer = "X";
  if (gameBoard.length > 0 && gameBoard[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer;
}
