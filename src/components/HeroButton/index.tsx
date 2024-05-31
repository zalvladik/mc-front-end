import type { HeroButtonProps } from 'src/components/HeroButton/types'

import { Button } from 'src/components/HeroButton/styles'
import { useHeroButton } from 'src/components/HeroButton/useHeroButton'

const HeroButton = ({
  text = 'Click',
  icon,
  styles,
  onClick,
}: HeroButtonProps): JSX.Element => {
  const { isClicked, activator } = useHeroButton()

  return (
    <Button
      onClick={() => {
        activator()
        onClick()
      }}
      className={isClicked ? 'active' : ''}
      style={styles}
    >
      {icon}
      {text}
    </Button>
  )
}

export default HeroButton
