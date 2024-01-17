const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function getGameBoard(updateBoard) {
  let game = [...initialBoard.map((array) => [...array])];
  for (const turn of updateBoard) {
    let { square, player } = turn;
    let { row, col } = square;
    game[col][row] = player;
  }
  return game;
}
