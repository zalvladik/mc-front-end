import { AuctionFragment } from 'src/constants'
import {
  AuctionCategoryDisabled,
  AuctionCategoryWrapper,
  BodyCenterContainer,
  BodyContainer,
  Container,
  StyledReloadButtton,
} from 'src/pages/AuctionPage/styles'
import { useAuctionPage } from 'src/pages/AuctionPage/useAuctionPage'

import {
  AuctionCategory,
  AuctionController,
  AuctionCreateLot,
  AuctionItemList,
  AuctionPagination,
  AuctionUserLots,
} from 'src/components/Auction'

const AuctionPage = (): JSX.Element => {
  const { currentFragment, isFragment, auctionControllerProps } = useAuctionPage()

  const getFragment = (): JSX.Element => {
    const components: Record<AuctionFragment, JSX.Element> = {
      [AuctionFragment.BUY_LOT]: <AuctionItemList />,
      [AuctionFragment.CREATE_LOT]: <AuctionCreateLot />,
      [AuctionFragment.USER_LOTS]: <AuctionUserLots />,
    }

    return components[currentFragment]
  }

  return (
    <Container>
      <div>
        <BodyContainer>
          <AuctionCategoryWrapper>
            <AuctionCategory
              style={{
                opacity: isFragment.isBuyFragment ? 1 : 0.3,
                pointerEvents: isFragment.isBuyFragment ? 'auto' : 'none',
              }}
            />
            <AuctionCategoryDisabled
              style={{
                opacity: isFragment.isBuyFragment ? 0 : 1,
                transform: isFragment.isBuyFragment ? 'scale(0)' : 'scale(1)',
              }}
            />
          </AuctionCategoryWrapper>
          <BodyCenterContainer isBuyFragment={isFragment.isCreateLotFragment}>
            {getFragment()}
          </BodyCenterContainer>
          <AuctionController {...auctionControllerProps} />
        </BodyContainer>
        <AuctionPagination />
        <StyledReloadButtton
          message="Обновити список лотів"
          refetch={() => {}}
          isLoading={false}
          style={{
            opacity: isFragment.isBuyFragment ? 1 : 0.4,
            pointerEvents: isFragment.isBuyFragment ? 'auto' : 'none',
          }}
        />
      </div>
    </Container>
  )
}

export default AuctionPage
