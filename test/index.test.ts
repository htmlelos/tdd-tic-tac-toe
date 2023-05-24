import { Player, createGame } from "../src/index";

describe("Juego", () => {
  test("Game debe estar definido", () => {
    const game = createGame();
    expect(game).toBeDefined();
  });

  test("Juego debe tener dos jugador", () => {
    const game = createGame();
    const players: Player[] = game.getPlayers();
    expect(players.length).toBe(2);
  });
});
