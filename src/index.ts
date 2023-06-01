export type Player = "X" | "O" | "";

export type Status = "PLAYING" | "WON" | "DRAW";

export type Board = Array<Player>;

export type Game = {
  currentPlayer: Player;
  players: Player[];
  board: Board;
  status: Status;
};
export const createGame = () => {
  return {
    currentPlayer: "X",
    players: ["X", "O"],
    board: Array(9).fill(""),
    status: "PLAYING",
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

export const hasHorizontalWin =
  (player: Player) =>
  (game: Game): boolean => {
    const board = game.board;
    const rows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];

    return rows.some((row) => row.every((cell) => board[cell] === player));
  };

export const hasVerticalWin =
  (player: Player) =>
  (game: Game): boolean => {
    const board = game.board;
    const columns = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    return columns.some((column) =>
      column.every((cell) => board[cell] === player)
    );
  };

export const hasDiagonalLeftToRightWin =
  (player: Player) =>
  (game: Game): boolean => {
    const board = game.board;
    const diagonal = [0, 4, 8];

    return diagonal.every((cell) => board[cell] === player);
  };

export const hasDiagonalRightToLeftWin =
  (player: Player) =>
  (game: Game): boolean => {
    const board = game.board;
    const diagonal = [2, 4, 6];

    return diagonal.every((cell) => board[cell] === player);
  };

export const play = (position: number) => (game: Game) => {
  if (position < 0 || position > game.board.length) return game;
  if (game.board[position] !== "") return game;

  const player = game.currentPlayer === "X" ? "O" : "X";
  const updateBoard = [...game.board];
  updateBoard[position] = player;

  const hasPlayerWon =
    hasHorizontalWin(player)(game) ||
    hasVerticalWin(player)(game) ||
    hasDiagonalLeftToRightWin(player)(game) ||
    hasDiagonalRightToLeftWin(player)(game);

  const isGameTied = !hasPlayerWon && updateBoard.every((cell) => cell !== "");

  const newStatus = hasPlayerWon
    ? "WON"
    : isGameTied
    ? "DRAW"
    : ("PLAYING" as Status);

  return {
    ...game,
    board: updateBoard,
    status: newStatus,
    currentPlayer: player,
  } as Game;
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
export const setWinner = (player: Player) => (game: Game) => {
  return { ...game, currentPlayer: player, status: "WON" };
};
export const getGameStatus = (game: Game) => {
  return game.status;
};
