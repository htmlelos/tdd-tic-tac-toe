import { Player, createGame, getCurrentPlayer, getPlayer } from '.'

describe('Juego de Tic Tac Toe', () => {
  test('Game debe estar definido', () => {
    const game = createGame()

    expect(game).toBeDefined()
  })

  test('Game debe tener el jugador X y el jugador O', () => {
    // const game = createGame()
    const player: Player[] = getPlayer()
    expect(player.length).toBe(2)
    expect(player).toContain('X')
    expect(player).toContain('O')
  })

  test('El juego comienza con el jugador X', () => {
    const currentPlayer: Player = getCurrentPlayer()

    expect(currentPlayer).toBeDefined()
    expect(currentPlayer).toBe('X')
  })
})
