export type Position = { column: number; row: number }
export type Player = 'X' | 'O' | ''
export type Game = {
  player: Player
  board: Player[]
}

export const createGame = () => {
  return {
    board: Array(9),
    player: 'X',
  } as Game
}
export const getPlayer = () => {
  return ['X', 'O'] as Player[]
}
export const getCurrentPlayer = (game: Game) => {
  return game.player
}
export const getBoard = (game: Game) => {
  return game.board
}

export const play = (position: Position) => (game: Game) => {
  const index = position.column * 3 + position.row
  const isOcuppied = game.board[index]
  if (isOcuppied) return game
  game.board[index] = game.player
  const newPlayer = game.player === 'X' ? 'O' : 'X'
  return { ...game, player: newPlayer } as Game
}
