import type { RuleCategoryProps } from 'src/components/RuleCategory/types'

import { useRuleCategory } from 'src/components/RuleCategory/useRuleCategory'

import {
  CategoryTitle,
  Rules,
  Arrow,
  Container,
  RulesOverflow,
} from 'src/components/RuleCategory/styles'

const RuleCategory = ({
  category,
  rules,
  categoryNum,
}: RuleCategoryProps): JSX.Element => {
  const { ruleRef, selected, cutomHeight, handleClick } = useRuleCategory()

  return (
    <Container height={cutomHeight}>
      <CategoryTitle
        onClick={() => {
          handleClick()
        }}
      >
        <Arrow className={selected ? 'rotate-90' : ''}>{'> '}</Arrow>
        {category}
      </CategoryTitle>
      <RulesOverflow>
        <Rules
          ref={ruleRef}
          height={cutomHeight}
          className={selected ? 'active' : ''}
        >
          {rules.map((item, i) => (
            <li key={i}>
              {`${categoryNum}.${i + 1}`}
              {` ${item}`}
            </li>
          ))}
        </Rules>
      </RulesOverflow>
    </Container>
  )
}

export default RuleCategory
