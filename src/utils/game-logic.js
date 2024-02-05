import { WINNING_COMBINATIONS } from "./winning-combinations";

export function verifyWinCondition(boardSnapShot, symbol) {
  for (let combination of WINNING_COMBINATIONS) {
    const firstSquare = combination[0];
    const secondSquare = combination[1];
    const thirdSquare = combination[2];
    if (
      boardSnapShot[firstSquare] === symbol &&
      boardSnapShot[firstSquare] === boardSnapShot[secondSquare] &&
      boardSnapShot[firstSquare] === boardSnapShot[thirdSquare]
    ) {
      return {
        winner: symbol,
        squares: [firstSquare, secondSquare, thirdSquare],
      };
    }
  }
  return;
}

export function getActivePlayer(logsLength, playersInfo) {
  if (logsLength % 2 == 0)
    return { player: playersInfo.player2, symbol: playersInfo.player2Symbol };
  return { player: playersInfo.player1, symbol: playersInfo.player1Symbol };
}

export function getRandomFreeIndex(gameBoard) {
  const possibleIndexes = gameBoard.map((item, index) => {
    if (item === null) return index;
    else return null;
  });
  const indexes = possibleIndexes.filter((item) => item !== null);
  const moveIndex = Math.floor(Math.random() * indexes.length);
  return indexes[moveIndex];
}

export function verifyPossibleWin(boardSnapShot, symbol) {
  for (let combination of WINNING_COMBINATIONS) {
    const firstSquare = combination[0];
    const secondSquare = combination[1];
    const thirdSquare = combination[2];

    if (
      boardSnapShot[firstSquare] === symbol &&
      boardSnapShot[secondSquare] === symbol &&
      boardSnapShot[thirdSquare] === null
    ) {
      return thirdSquare.toString();
    } else if (
      boardSnapShot[secondSquare] === symbol &&
      boardSnapShot[thirdSquare] === symbol &&
      boardSnapShot[firstSquare] === null
    ) {
      return firstSquare.toString();
    } else if (
      boardSnapShot[thirdSquare] === symbol &&
      boardSnapShot[firstSquare] === symbol &&
      boardSnapShot[secondSquare] === null
    ) {
      return secondSquare.toString();
    }
  }
  return;
}

export function getLogMessage(index) {
  switch (index) {
    case 0:
      return "first row, first column";
    case 1:
      return "first row, second column";
    case 2:
      return "first row, third column";
    case 3:
      return "second row, first column";
    case 4:
      return "second row, second column";
    case 5:
      return "second row, third column";
    case 6:
      return "third row, first column";
    case 7:
      return "third row, second column";
    case 8:
      return "third row, third column";
  }
}
