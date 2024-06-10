import {
  Arrow,
  CategoryTitle,
  Container,
  Rules,
  RulesOverflow,
} from 'src/components/RuleCategory/styles'
import type { RuleCategoryProps } from 'src/components/RuleCategory/types'
import { useRuleCategory } from 'src/components/RuleCategory/useRuleCategory'

const RuleCategory = ({
  category,
  rules,
  categoryNum,
  ...props
}: RuleCategoryProps): JSX.Element => {
  const { selected, setSelected, rulesOverflowRef, rulesRef } = useRuleCategory()

  return (
    <Container {...props}>
      <CategoryTitle onClick={() => setSelected(!selected)}>
        <Arrow className={selected ? 'rotate-90' : ''}>{'> '}</Arrow>
        {category}
      </CategoryTitle>
      <RulesOverflow ref={rulesOverflowRef}>
        <Rules
          ref={rulesRef}
          style={{
            transform: selected ? 'translate(0%, 0%)' : 'translate(0%, -100%)',
          }}
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
