import {
  Arrow,
  CategoryTitle,
  Container,
  Rules,
  RulesWrapper,
} from 'src/components/InfoCategory/styles'
import type { InfoCategoryProps } from 'src/components/InfoCategory/types'
import { useInfoCategory } from 'src/components/InfoCategory/useInfoCategory'

const InfoCategory = ({ category, rules }: InfoCategoryProps): JSX.Element => {
  const { selected, handleClick } = useInfoCategory()

  return (
    <Container>
      <CategoryTitle
        onClick={() => {
          handleClick()
        }}
      >
        <Arrow className={selected ? 'rotate-90' : ''}>{'> '}</Arrow>
        {category}
      </CategoryTitle>

      <RulesWrapper className={selected ? 'active' : ''}>
        <Rules>
          {rules.map((item, i) => (
            <li key={i}>
              {`${i + 1}.`}
              {` ${item}`}
            </li>
          ))}
        </Rules>
      </RulesWrapper>
    </Container>
  )
}

export default InfoCategory
