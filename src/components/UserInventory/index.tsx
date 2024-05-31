import { TfiReload } from 'react-icons/tfi'

import ItemCard from 'src/components/ItemCard'
import { useUserInventory } from 'src/components/UserInventory/useUserInventory'
import { moneyCalculator, moneyCalculatorShulker } from 'src/helpers'

import {
  Cotnainer,
  ItemList,
  ItemIcon,
  ContainerWrapper,
  ItemAmount,
  MoneyAmountContainer,
  TfiReloadWrapper,
} from 'src/components/UserInventory/styles'

const UserInventory = (): JSX.Element => {
  const { data, isLoading, refetch } = useUserInventory()

  if (!data) return <p>Error fetching data or data is empty</p>

  const { items, money } = data

  return (
    <ContainerWrapper>
      <MoneyAmountContainer>
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
      </MoneyAmountContainer>

      <Cotnainer>
        <TfiReloadWrapper disabled={isLoading} onClick={() => refetch()}>
          <TfiReload size={50} />
        </TfiReloadWrapper>
        <h1>{items?.length ? 'Інвентар' : 'Інвентар пустий'}</h1>
        <ItemList>
          {!isLoading &&
            items &&
            items.map(item => (
              <li>
                <ItemIcon
                  style={{
                    backgroundImage: `url(http://localhost:8080/public/${item?.type.slice(0, 2)}/${item?.type}.png)`,
                  }}
                />
                {item.amount > 1 && <ItemAmount>{item.amount}</ItemAmount>}
                <ItemCard description={item.description} title={item.display_name} />
              </li>
            ))}
        </ItemList>
      </Cotnainer>
    </ContainerWrapper>
  )
}

export default UserInventory
