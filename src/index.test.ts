import {
  Game,
  Player,
  createGame,
  getBoard,
  getCurrentPlayer,
  getPlayer,
  play,
} from '.'

describe('Juego de Tic Tac Toe', () => {
  let game: Game
  beforeAll(() => {
    game = createGame()
  })
  test('Game debe estar definido', () => {
    expect(game).toBeDefined()
  })

  test('Game debe tener el jugador X y el jugador O', () => {
    const player: Player[] = getPlayer()
    expect(player.length).toBe(2)
    expect(player).toContain('X')
    expect(player).toContain('O')
  })

  test('El juego comienza con el jugador X', () => {
    const currentPlayer: Player = getCurrentPlayer(game)
    expect(currentPlayer).toBeDefined()
    expect(currentPlayer).toBe('X')
  })

  test('El tablero esta definido y es de 3x3', () => {
    const board = getBoard(game)

    expect(board).toBeDefined()
    expect(board.length).toBe(9)
  })

  test('despues del jugador X juega el jugador O', () => {
    const position = { column: 0, row: 0 }
    const game1 = play(position)(game)
    const currentPlayer = getCurrentPlayer(game1)
    expect(currentPlayer).toBeDefined()
    expect(currentPlayer).toBe('O')
  })

  test('despues del jugador O juega el jugador X', () => {
    const position1 = { column: 0, row: 0 }
    const game1 = play(position1)(game)
    const position2 = { column: 1, row: 0 }
    const game2 = play(position2)(game1)
    const currentPlayer = getCurrentPlayer(game2)

    expect(currentPlayer).toBeDefined()
    expect(currentPlayer).toBe('X')
  })

  test.only('un jugador no puede ocupar una casilla que ya ha sido ocupada', () => {
    const position1 = { column: 0, row: 0 }
    const game1 = play(position1)(game)
    const position2 = { column: 0, row: 0 }
    const game2 = play(position2)(game1)
    const currentPlayer = getCurrentPlayer(game2)

    expect(currentPlayer).toBeDefined()
    expect(currentPlayer).toBe('O')
  })
})
