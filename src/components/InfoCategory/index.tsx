import type { InfoCategoryProps } from 'src/components/InfoCategory/types'

import { useInfoCategory } from 'src/components/InfoCategory/useInfoCategory'

import {
  CategoryTitle,
  Rules,
  Arrow,
  RulesWrapper,
  Container,
} from 'src/components/InfoCategory/styles'

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
              {i + 1 + '.'}
              {` ${item}`}
            </li>
          ))}
        </Rules>
      </RulesWrapper>
    </Container>
  )
}

export default InfoCategory
