import { moneyCalculator } from 'src/helpers'

import {
  Container,
  ItemDesriptionContainer,
  ItemPriceContainer,
  StyledSkeleton,
  TbodyContainer,
  TheadContainer,
} from 'src/components/Auction/AuctionUserLots/styles'
import { useAuctionUserLots } from 'src/components/Auction/AuctionUserLots/useAuctionUserLots'
import ItemSlotIcon from 'src/components/ItemSlotIcon'

const AuctionUserLots = (): JSX.Element => {
  const { openModal, itemSlotIconProps, isLoading, data } = useAuctionUserLots()

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
      <StyledSkeleton
        isLoading={isLoading}
        isDataExist={data.length}
        skeletonLength={8}
        emptyText="Лоти відсутні"
        size={40}
      >
        <TbodyContainer>
          {data.map(lot => {
            const { id, price } = lot
            const lotElement = (lot?.shulker || lot?.item)!

            const { stack, restMoney } = moneyCalculator(price)

            return (
              <div key={id} onClick={() => openModal(lot)}>
                <div>
                  <ItemSlotIcon
                    key={id}
                    {...itemSlotIconProps}
                    {...lotElement}
                    fontSize={18}
                  />

                  <ItemDesriptionContainer>
                    <div>
                      <div>{lotElement.display_name}</div>
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
      </StyledSkeleton>
    </Container>
  )
}

export default AuctionUserLots
