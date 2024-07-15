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
  AuctionEnchantFinder,
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
    isCanNewFetchGetByeLots,
  } = useAuctionPage()

  const getFragment = (): JSX.Element => {
    const components: Record<AuctionFragment, JSX.Element> = {
      [AuctionFragment.BUY_LOTS]: <AuctionItemList />,
      [AuctionFragment.CREATE_LOTS]: <AuctionCreateLot />,
      [AuctionFragment.USER_LOTS]: <AuctionUserLots />,
      [AuctionFragment.ENCHANT_LOTS]: <AuctionEnchantFinder />,
    }

    return components[auctionFragment]
  }

  const { isUserLotsFragment, isCreateLotFragment, isEnchantFinderFragment } =
    isFragment

  const isDisabledCategory = isUserLotsFragment || isCreateLotFragment

  return (
    <Container>
      <div>
        <DefaultInputWrapper>
          <div>
            <DefaultInput
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              placeholder="Пошук предмета..."
              disabled={
                isCreateLotFragment || isEnchantFinderFragment || isLoadingByeLots
              }
              style={{ width: 320 }}
            />

            <DefaultButton
              isLoading={isLoadingByeLots}
              disabled={
                isCreateLotFragment ||
                isLoadingByeLots ||
                isUserLotsFragment ||
                !isCanNewFetchGetByeLots
              }
              onClick={findLotByName}
              style={{ width: 200 }}
            >
              Пошук
            </DefaultButton>
          </div>
          <MoneyTable money={money} style={{ flexDirection: 'row', gap: 60 }} />
        </DefaultInputWrapper>
        <BodyContainer>
          <AuctionCategoryWrapper>
            <AuctionCategory
              style={{
                opacity: isDisabledCategory ? 0.3 : 1,
                pointerEvents: isDisabledCategory ? 'none' : 'auto',
              }}
            />
            <AuctionCategoryDisabled disabled={isDisabledCategory} />
          </AuctionCategoryWrapper>
          <BodyCenterContainer disabled={isCreateLotFragment}>
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
