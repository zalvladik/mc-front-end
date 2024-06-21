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

  const stylesForDiv = {
    right: currentMoney <= 64 ? -64 : -50,
    width: currentMoney <= 64 ? 60 : 48,
    height: currentMoney <= 64 ? 60 : 48,
  }

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
            <h1 style={{ fontSize: currentMoney <= 64 ? 50 : 32 }}>
              {currentMoney}
            </h1>
            <div style={stylesForDiv} />
          </li>
          {currentMoney > 64 && (
            <li>
              <h1>{`[${stack}ст.${restMoney}шт.]`}</h1>
              <div style={stylesForDiv} />
            </li>
          )}
          {currentMoney > 256 && (
            <li>
              <h1>{moneyCalculatorShulker(currentMoney)}</h1>
              <div style={stylesForDiv} />
            </li>
          )}
        </>
      )}
    </MoneyAmountContainer>
  )
}

export default MoneyTable
