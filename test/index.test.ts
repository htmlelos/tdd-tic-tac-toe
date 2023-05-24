import { Player, createGame } from "../src/index";

describe("Juego", () => {
  test("Game debe estar definido", () => {
    const game = createGame();
    expect(game).toBeDefined();
  });

  test("Juego debe tener el jugadr X y el jugador O", () => {
    const game = createGame();
    const players: Player[] = game.getPlayers();
    expect(players.length).toBe(2);
    expect(players).toContain("X");
    expect(players).toContain("O");
  });

  test("Juego debe tener un tablero", () => {
    const game = createGame();
    const board = game.getBoard();
    expect(board).toBeDefined();
  });
});
