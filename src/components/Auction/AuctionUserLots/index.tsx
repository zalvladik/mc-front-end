import { FETCH_URL_IMG } from 'src/constants'
import { moneyCalculator } from 'src/helpers'

import {
  Container,
  DeleteLotButton,
  ItemAmount,
  ItemDesriptionContainer,
  ItemPriceContainer,
  ItemSlotIcon,
  TbodyContainer,
  TheadContainer,
} from 'src/components/Auction/AuctionUserLots/styles'
import type { AuctionUserLotsProps } from 'src/components/Auction/AuctionUserLots/types'
import { useAuctionUserLots } from 'src/components/Auction/AuctionUserLots/useAuctionUserLots'
import HoverDescription from 'src/components/HoverDescription'

const AuctionUserLots = ({ lots }: AuctionUserLotsProps): JSX.Element => {
  const { deleteUserLot } = useAuctionUserLots()

  return (
    <Container>
      <TheadContainer>
        <div>
          <p>Предмет</p>
          <div />
        </div>

        <div>
          <p>Ціна</p>
          <div />
        </div>
      </TheadContainer>
      <TbodyContainer>
        {lots.map(({ id, price, item }) => {
          const { stack, restMoney } = moneyCalculator(price)

          return (
            <div key={id}>
              <div>
                <ItemSlotIcon>
                  <div
                    style={{
                      backgroundImage: `url(${FETCH_URL_IMG}/${item.type.slice(0, 2)}/${item.type}.png)`,
                    }}
                  />
                  {item.amount > 1 && <ItemAmount>{item.amount}</ItemAmount>}
                </ItemSlotIcon>

                <ItemDesriptionContainer>
                  <div>
                    <div>{item.display_name}</div>
                  </div>
                </ItemDesriptionContainer>
              </div>

              <div />

              <ItemPriceContainer>
                {price > 64 ? (
                  <div>{`${stack} ст. ${restMoney} шт.`}</div>
                ) : (
                  <div>{price}</div>
                )}
                <div />
              </ItemPriceContainer>

              <DeleteLotButton onClick={() => deleteUserLot(id)}>
                <HoverDescription description={['Видалити лот']} />
              </DeleteLotButton>
            </div>
          )
        })}
      </TbodyContainer>
    </Container>
  )
}

export default AuctionUserLots
