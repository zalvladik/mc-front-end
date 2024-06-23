import { moneyCalculator, moneyCalculatorShulker } from 'src/helpers'

import { MoneyAmountContainer } from 'src/components/MoneyTable/styles'
import type { MoneyTableProps } from 'src/components/MoneyTable/types'

const MoneyTable = ({
  money,
  moneyTitle,
  ...props
}: MoneyTableProps): JSX.Element => {
  const { stack, restMoney } = moneyCalculator(money)

  return (
    <MoneyAmountContainer {...props}>
      {moneyTitle && (
        <li>
          <h1 style={{ opacity: 0.5 }}>{moneyTitle}</h1>
        </li>
      )}
      <li>
        <h1>{money}</h1>
        <div />
      </li>
      {money > 64 && (
        <li>
          <h1>{`[${stack}ст.${restMoney}шт.]`}</h1>
          <div />
        </li>
      )}
      {money > 256 && (
        <li>
          <h1>{moneyCalculatorShulker(money)}</h1>
          <div />
        </li>
      )}
    </MoneyAmountContainer>
  )
}

export default MoneyTable
