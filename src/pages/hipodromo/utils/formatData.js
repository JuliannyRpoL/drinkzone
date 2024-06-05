import { randomizeArray } from '../../../utils/formatData'

export const randomizePlayers = (players) => {
  const randomPlayers = randomizeArray(players);

  return {
    player1: randomPlayers[0].toUpperCase(),
    player2: randomPlayers[1].toUpperCase(),
    moderator: randomPlayers[2].toUpperCase(),
  }
}
