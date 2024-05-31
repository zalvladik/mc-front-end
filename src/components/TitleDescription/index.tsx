import type { TitleDescriptionProps } from 'src/components/TitleDescription/types'
import { Title } from 'src/components/TitleDescription/styles'

const TitleDescription = ({
  title,
  rightIcon,
  leftIcon,
  styles,
}: TitleDescriptionProps): JSX.Element => {
  return (
    <Title style={styles}>
      {leftIcon && leftIcon}
      <h1>{title}</h1>
      {rightIcon && rightIcon}
    </Title>
  )
}

export default TitleDescription
