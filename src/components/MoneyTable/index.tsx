import { moneyCalculator, moneyCalculatorShulker } from 'src/helpers'

import { MoneyAmountContainer } from 'src/components/MoneyTable/styles'
import { useMoneyTable } from 'src/components/MoneyTable/useMoneyTable'

const MoneyTable = (): JSX.Element => {
  const { money, isRefetching, isLoading } = useMoneyTable()

  return (
    <MoneyAmountContainer>
      {!isLoading && !isRefetching && (
        <>
          <li>
            <h1>Валюта: {money}</h1>
            <div />
          </li>
          {money > 64 && (
            <li>
              <h1>{moneyCalculator(money)}</h1>
              <div />
            </li>
          )}
          {money > 256 && (
            <li>
              <h1>{moneyCalculatorShulker(money)}</h1>
              <div />
            </li>
          )}
        </>
      )}
    </MoneyAmountContainer>
  )
}

export default MoneyTable
