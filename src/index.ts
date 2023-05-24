export type Player = "X" | "O";
export function createGame() {
  return {
    getPlayers: () => {
      return new Array<Player>(2);
    },
  };
}
