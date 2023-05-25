export type Player = "X" | "O" | "";

export type Board = Array<Player>;

export type Game = {
  currentPlayer: Player;
  players: Player[];
  board: Board;
};
export const createGame = () => {
  return {
    currentPlayer: "X",
    players: ["X", "O"],
    board: Array(9).fill(""),
  } as Game;
};

export const getPlayers = (game: Game) => {
  return game.players;
};

export const getBoard = (game: Game) => {
  return game.board;
};

export const getCurrentPlayer = (game: Game) => {
  return game.currentPlayer;
};

export const play = (position: number) => (game: Game) => {
  if (position < 0 || position > 8) return game;

  if (game.board[position] === "") {
    return {
      ...game,
      board: updateBoard(position)(game),
      currentPlayer: switchPlayer(game),
    } as Game;
  }

  return game;
};
export const updateBoard = (position: number) => (game: Game) => {
  const newBoard = [...game.board];
  newBoard[position] = game.currentPlayer;
  return newBoard;
};
const switchPlayer = (game: Game): Player => {
  return game.currentPlayer === "X" ? "O" : "X";
};
export const getWinner = (game: Game) => {
  return "X" as Player;
};
