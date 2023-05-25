import {
  Game,
  Player,
  createGame,
  getBoard,
  getCurrentPlayer,
  getPlayers,
  getWinner,
  play,
  updateBoard,
} from "../src/index";

describe("Juego", () => {
  let game: Game;
  beforeAll(() => {
    game = createGame();
  });

  test("Game debe estar definido", () => {
    expect(game).toBeDefined();
  });

  test("Juego debe tener el jugador X y el jugador O", () => {
    const players: Player[] = getPlayers(game);
    expect(players.length).toBe(2);
    expect(players).toContain("X");
    expect(players).toContain("O");
  });

  test("Juego debe tener un tablero con nueve posiciones", () => {
    const board = getBoard(game);
    expect(board).toBeDefined();
    expect(board.length).toBe(9);
  });

  test("El Juego comienza con el jugador X", () => {
    const currentPlayer = getCurrentPlayer(game);
    expect(currentPlayer).toBeDefined();
    expect(currentPlayer).toBe("X");
  });

  test("Deberia cambiar de jugador despues de una jugada valida", () => {
    const position = 0;
    const newGame = play(position)(game);

    expect(getCurrentPlayer(newGame)).toBe("O");
  });

  test("No deberia cambiar jugadores despues de una jugada invalida", () => {
    const position = 9;
    const newGame = play(position)(game);
    expect(newGame).toEqual(game);
    expect(getCurrentPlayer(newGame)).toBe("X");
  });

  test("No deberia jugar en una posicion ya ocupada", () => {
    const position = 0;
    const newGame = play(position)(game);
    const duplicate = play(position)(newGame);
    expect(duplicate).toEqual(newGame);
  });

  test("Deberia declarar un ganador si un jugador marca tres casillas en una fila", () => {
    const gameStatus1 = play(0)(game);
    const gameStatus2 = play(4)(gameStatus1);
    const gameStatus3 = play(1)(gameStatus2);
    const gameStatus4 = play(5)(gameStatus3);
    const gameStatus5 = play(2)(gameStatus4);
    const winner = getWinner(gameStatus5);
    expect(winner).toBeDefined();
    expect(winner).toBe("X");
  });

  test("Deberia declarar un ganador si un jugador marca tres casillas verticales", () => {
    const gameStatus1 = play(0)(game);
    const gameStatus2 = play(1)(gameStatus1);
    const gameStatus3 = play(3)(gameStatus2);
    const gameStatus4 = play(4)(gameStatus3);
    const gameStatus5 = play(6)(gameStatus4);
    const winner = getWinner(gameStatus5);
    expect(winner).toBeDefined();
    expect(winner).toBe("X");
  });

  test("Deberia declarar un ganador si un jugador marca tres casillas en diagonal de izquierda a derecha", () => {
    const gameStatus1 = play(6)(game);
    const gameStatus2 = play(1)(gameStatus1);
    const gameStatus3 = play(4)(gameStatus2);
    const gameStatus4 = play(3)(gameStatus3);
    const gameStatus5 = play(2)(gameStatus4);
    const winner = getWinner(gameStatus5);
    expect(winner).toBeDefined();
    expect(winner).toBe("X");
  });

  test("Deberia declarar un ganador si un jugador marca tres casillas en diagonal de derecha a izquierda", () => {
    const gameStatus1 = play(0)(game);
    const gameStatus2 = play(1)(gameStatus1);
    const gameStatus3 = play(4)(gameStatus2);
    const gameStatus4 = play(3)(gameStatus3);
    const gameStatus5 = play(8)(gameStatus4);
    const winner = getWinner(gameStatus5);
    expect(winner).toBeDefined();
    expect(winner).toBe("X");
  });
});
