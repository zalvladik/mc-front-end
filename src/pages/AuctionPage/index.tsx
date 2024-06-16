import { AuctionFragment } from 'src/constants'
import {
  AuctionCategoryDisabled,
  AuctionCategoryWrapper,
  BodyCenterContainer,
  BodyContainer,
  Container,
  DefaultInputWrapper,
  StyledAuctionPagination,
} from 'src/pages/AuctionPage/styles'
import { useAuctionPage } from 'src/pages/AuctionPage/useAuctionPage'

import {
  AuctionCategory,
  AuctionController,
  AuctionCreateLot,
  AuctionItemList,
  AuctionUserLots,
} from 'src/components/Auction'
import DefaultInput from 'src/components/inputs/DefaultInput'
import SimpleButton from 'src/components/SimpleButton'

const AuctionPage = (): JSX.Element => {
  const {
    currentFragment,
    isFragment,
    auctionControllerProps,
    auctionUserLotsProps,
    auctionPaginationProps,
    auctionByeLotsProps,
    auctionCategoryProps,
    auctionSearchInputProps,
    findLotByName,
    totalPages,
  } = useAuctionPage()

  const getFragment = (): JSX.Element => {
    const components: Record<AuctionFragment, JSX.Element> = {
      [AuctionFragment.BUY_LOT]: <AuctionItemList {...auctionByeLotsProps} />,
      [AuctionFragment.CREATE_LOT]: <AuctionCreateLot />,
      [AuctionFragment.USER_LOTS]: <AuctionUserLots {...auctionUserLotsProps} />,
    }

    return components[currentFragment]
  }

  return (
    <Container>
      <div>
        <DefaultInputWrapper>
          <DefaultInput
            value={auctionSearchInputProps.searchValue}
            onChange={e => auctionSearchInputProps.setSearchValue(e.target.value)}
            placeholder="Пошук..."
          />

          <SimpleButton
            onClick={findLotByName}
            style={{ width: 200 }}
            isVisible={!isFragment.isUserLotsFragment}
          >
            Пошук
          </SimpleButton>
        </DefaultInputWrapper>
        <BodyContainer>
          <AuctionCategoryWrapper>
            <AuctionCategory
              {...auctionCategoryProps}
              style={{
                opacity: isFragment.isBuyFragment ? 1 : 0.3,
                pointerEvents: isFragment.isBuyFragment ? 'auto' : 'none',
              }}
            />
            <AuctionCategoryDisabled isBuyFragment={isFragment.isBuyFragment} />
          </AuctionCategoryWrapper>
          <BodyCenterContainer isBuyFragment={isFragment.isCreateLotFragment}>
            {getFragment()}
          </BodyCenterContainer>
          <AuctionController {...auctionControllerProps} />
        </BodyContainer>

        <StyledAuctionPagination
          totalPageIsNull={Boolean(totalPages)}
          isCreateLotFragment={isFragment.isCreateLotFragment}
          {...auctionPaginationProps}
        />
      </div>
    </Container>
  )
}

export default AuctionPage
