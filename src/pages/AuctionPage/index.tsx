import { AuctionFragment } from 'src/constants'
import {
  AuctionCategoryDisabled,
  AuctionCategoryWrapper,
  BodyCenterContainer,
  BodyContainer,
  Container,
  DefaultInputWrapper,
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
import DefaultButton from 'src/components/DefaultButton'
import DefaultInput from 'src/components/inputs/DefaultInput'
import MoneyTable from 'src/components/MoneyTable'

const AuctionPage = (): JSX.Element => {
  const {
    searchValue,
    setSearchValue,
    auctionFragment,
    isFragment,
    findLotByName,
    money,
    isLoadingByeLots,
  } = useAuctionPage()

  const getFragment = (): JSX.Element => {
    const components: Record<AuctionFragment, JSX.Element> = {
      [AuctionFragment.BUY_LOT]: <AuctionItemList />,
      [AuctionFragment.CREATE_LOT]: <AuctionCreateLot />,
      [AuctionFragment.USER_LOTS]: <AuctionUserLots />,
    }

    return components[auctionFragment]
  }

  return (
    <Container>
      <div>
        <DefaultInputWrapper>
          <div>
            <DefaultInput
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              placeholder="Пошук..."
            />

            <DefaultButton
              isLoading={isLoadingByeLots}
              disabled={isLoadingByeLots}
              onClick={findLotByName}
              style={{ width: 200 }}
              isVisible={!isFragment.isUserLotsFragment}
            >
              Пошук
            </DefaultButton>
          </div>
          <MoneyTable money={money} style={{ flexDirection: 'row', gap: 80 }} />
        </DefaultInputWrapper>
        <BodyContainer>
          <AuctionCategoryWrapper>
            <AuctionCategory
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
          <AuctionController />
        </BodyContainer>

        <AuctionPagination />
      </div>
    </Container>
  )
}

export default AuctionPage
