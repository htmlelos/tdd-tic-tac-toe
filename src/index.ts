export type Player = "X" | "O";
export function createGame() {
  return {
    getPlayers: () => {
      const players: Player[] = ["X", "O"];
      return Array.from(players);
    },
    getBoard: () => {
      return [];
    },
  };
}
