import { moneyCalculator } from 'src/helpers'

import {
  Container,
  DeleteLotButton,
  ItemDesriptionContainer,
  ItemPriceContainer,
  TbodyContainer,
  TheadContainer,
} from 'src/components/Auction/AuctionUserLots/styles'
import type { AuctionUserLotsProps } from 'src/components/Auction/AuctionUserLots/types'
import { useAuctionUserLots } from 'src/components/Auction/AuctionUserLots/useAuctionUserLots'
import HoverDescription from 'src/components/HoverDescription'
import ItemSlotIcon from 'src/components/ItemSlotIcon'

const AuctionUserLots = ({ lots }: AuctionUserLotsProps): JSX.Element => {
  const { deleteUserLot, openModal, itemSlotIconProps } = useAuctionUserLots()

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
        {lots.map(({ id, price, item, realname }) => {
          const { stack, restMoney } = moneyCalculator(price)

          return (
            <div key={id} onClick={() => openModal({ item, id, price, realname })}>
              <div>
                <ItemSlotIcon
                  key={id}
                  {...itemSlotIconProps}
                  {...item}
                  fontSize={18}
                />

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
