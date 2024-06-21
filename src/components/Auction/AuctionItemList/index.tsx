import { moneyCalculator, sliceText } from 'src/helpers'

import {
  Container,
  ItemDesriptionContainer,
  ItemPriceContainer,
  StyledSkeleton,
  TbodyContainer,
  TheadContainer,
} from 'src/components/Auction/AuctionItemList/styles'
import type { AuctionItemListProps } from 'src/components/Auction/AuctionItemList/types'
import { useAuctionItemList } from 'src/components/Auction/AuctionItemList/useAuctionItemList'
import ItemSlotIcon from 'src/components/ItemSlotIcon'

const AuctionItemList = ({ lots, isLoading }: AuctionItemListProps): JSX.Element => {
  const { openModal, itemSlotIconProps } = useAuctionItemList()

  return (
    <Container>
      <TheadContainer>
        {['Предмет', 'Ціна'].map(item => (
          <div key={item}>
            <p>{item}</p>
            <div />
          </div>
        ))}
      </TheadContainer>

      <StyledSkeleton
        isLoading={isLoading}
        isDataExist={lots.length}
        skeletonLength={8}
        emptyText="Предмет не знайдено"
        size={40}
      >
        <TbodyContainer>
          {lots.map(({ item, id, price, realname }) => {
            const { stack, restMoney } = moneyCalculator(price)

            return (
              <div key={id} onClick={() => openModal({ item, id, price, realname })}>
                <div>
                  <ItemSlotIcon {...itemSlotIconProps} {...item} />

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
      </StyledSkeleton>
    </Container>
  )
}

export default AuctionItemList
