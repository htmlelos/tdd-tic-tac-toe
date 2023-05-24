export type Player = "X" | "O";
export function createGame() {
  let currentPlayer: Player = "X";
  return {
    getPlayers: () => {
      const players: Player[] = ["X", "O"];
      return Array.from(players);
    },
    getBoard: () => {
      const board: Player[] = new Array<Player>(9);
      return board;
    },
    getCurrentPlayer: () => {
      return currentPlayer;
    },
  };
}
