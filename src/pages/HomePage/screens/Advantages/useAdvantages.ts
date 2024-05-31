import Cloud from 'src/assets/cards/cloud'
import Game from 'src/assets/cards/game'
import Heart from 'src/assets/cards/heart'

export const useAdvantage = () => {
  const images = [Heart, Game, Cloud]

  return { images }
}
