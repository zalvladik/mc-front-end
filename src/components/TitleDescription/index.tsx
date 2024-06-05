import { Title } from 'src/components/TitleDescription/styles'
import type { TitleDescriptionProps } from 'src/components/TitleDescription/types'

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
