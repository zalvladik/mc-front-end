import { moneyCalculator, sliceText } from 'src/helpers'

import {
  Container,
  ItemDesriptionContainer,
  ItemPriceContainer,
  StyledSkeleton,
  TbodyContainer,
  TheadContainer,
} from 'src/components/Auction/AuctionItemList/styles'
import { useAuctionItemList } from 'src/components/Auction/AuctionItemList/useAuctionItemList'
import ItemSlotIcon from 'src/components/ItemSlotIcon'

const AuctionItemList = (): JSX.Element => {
  const { openModal, itemSlotIconProps, user, isLoading, data } =
    useAuctionItemList()

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
        isDataExist={data.length}
        skeletonLength={8}
        emptyText="Предмет не знайдено"
        size={40}
      >
        <TbodyContainer>
          {data.map(({ item, id, price, username }) => {
            const { stack, restMoney } = moneyCalculator(price)

            return (
              <div
                key={id}
                onClick={() => openModal({ item, id, price, username })}
                style={{ opacity: user.username === username ? 0.3 : 1 }}
              >
                <div>
                  <ItemSlotIcon {...itemSlotIconProps} {...item} fontSize={18} />

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
