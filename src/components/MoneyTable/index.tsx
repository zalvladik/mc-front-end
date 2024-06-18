import { moneyCalculator, moneyCalculatorShulker } from 'src/helpers'

import { MoneyAmountContainer } from 'src/components/MoneyTable/styles'
import type { MoneyTableProps } from 'src/components/MoneyTable/types'
import { useMoneyTable } from 'src/components/MoneyTable/useMoneyTable'

const MoneyTable = ({
  anotherMoney,
  moneyTitle,
  ...props
}: MoneyTableProps): JSX.Element => {
  const { money, isRefetching, isLoading } = useMoneyTable()

  const currentMoney = anotherMoney ?? money

  const { stack, restMoney } = moneyCalculator(currentMoney)

  return (
    <MoneyAmountContainer {...props}>
      {!isLoading && !isRefetching && (
        <>
          {moneyTitle && (
            <li>
              <h1 style={{ opacity: 0.5 }}>{moneyTitle}</h1>
            </li>
          )}
          <li>
            <h1>{currentMoney}</h1>
            <div />
          </li>
          {currentMoney > 64 && (
            <li>
              <h1>{`[${stack}ст.${restMoney}шт.]`}</h1>
              <div />
            </li>
          )}
          {currentMoney > 256 && (
            <li>
              <h1>{moneyCalculatorShulker(currentMoney)}</h1>
              <div />
            </li>
          )}
        </>
      )}
    </MoneyAmountContainer>
  )
}

export default MoneyTable
