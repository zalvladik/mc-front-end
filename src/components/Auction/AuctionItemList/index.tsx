import { FETCH_URL_IMG } from 'src/constants'
import { moneyCalculator, sliceText } from 'src/helpers'

import {
  Container,
  ItemAmount,
  ItemDesriptionContainer,
  ItemPriceContainer,
  ItemSlotIcon,
  TbodyContainer,
  TheadContainer,
} from 'src/components/Auction/AuctionItemList/styles'
import type { AuctionItemListProps } from 'src/components/Auction/AuctionItemList/types'
import { useAuctionItemList } from 'src/components/Auction/AuctionItemList/useAuctionItemList'

const AuctionItemList = ({ lots }: AuctionItemListProps): JSX.Element => {
  const { openModal } = useAuctionItemList()

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
        {lots.map(({ item, id, price, realname }) => {
          const { stack, restMoney } = moneyCalculator(price)

          return (
            <div key={id} onClick={() => openModal({ item, id, price, realname })}>
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
                    <div>{sliceText(item.display_name, 28)}</div>
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
            </div>
          )
        })}
      </TbodyContainer>
    </Container>
  )
}

export default AuctionItemList
