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
    enchantSearchParams,
  } = useAuctionPage()

  const getFragment = (): JSX.Element => {
    const components: Record<AuctionFragment, JSX.Element> = {
      [AuctionFragment.BUY_LOT]: <AuctionItemList />,
      [AuctionFragment.CREATE_LOT]: <AuctionCreateLot />,
      [AuctionFragment.USER_LOTS]: <AuctionUserLots />,
      [AuctionFragment.ENCHANT_FINDER]: <AuctionEnchantFinder />,
    }

    return components[auctionFragment]
  }

  const isDisabledCategory =
    isFragment.isUserLotsFragment || isFragment.isCreateLotFragment

  return (
    <Container>
      <div>
        <DefaultInputWrapper>
          <div>
            <DefaultInput
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              placeholder="Пошук..."
              isVisible={isFragment.isBuyFragment || isFragment.isUserLotsFragment}
              style={{ width: 320 }}
            />

            <DefaultButton
              isLoading={isLoadingByeLots}
              disabled={isLoadingByeLots}
              onClick={findLotByName}
              style={{ width: 200 }}
              isVisible={isFragment.isBuyFragment}
            >
              Пошук
            </DefaultButton>

            <div>
              <DefaultButton
                isLoading={isLoadingByeLots}
                disabled={
                  isLoadingByeLots ||
                  (!Object.keys(enchantSearchParams.enchants).length &&
                    isFragment.isEnchantFinderFragment)
                }
                onClick={() => {}}
                style={{ width: 320 }}
                isVisible={isFragment.isEnchantFinderFragment}
              >
                Пошук
              </DefaultButton>
            </div>
          </div>
          <MoneyTable money={money} style={{ flexDirection: 'row', gap: 80 }} />
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
          <BodyCenterContainer disabled={isFragment.isCreateLotFragment}>
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
