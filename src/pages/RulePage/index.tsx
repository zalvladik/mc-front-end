import rulesData from 'src/locales/rules.json'

import { Container } from 'src/pages/RulePage/styles'
import RuleCategory from 'src/components/RuleCategory'

const RulePage = (): JSX.Element => {
  return (
    <Container>
      {Object.entries(rulesData).map(([key, value], i) => (
        <RuleCategory key={key} category={key} categoryNum={i + 1} rules={value} />
      ))}
    </Container>
  )
}

export default RulePage
