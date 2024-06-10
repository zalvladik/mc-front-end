import {
  Container,
  InventoryFooterWrapper,
  InventoryWrapper,
  StyledInventoryHeader,
  StyledItemList,
  StyledPaginationTab,
  StyledSearchInput,
} from 'src/components/Auction/AuctionCreateLot/styles'
import { useAuctionCreateLot } from 'src/components/Auction/AuctionCreateLot/useAuctionCreateLot'

import ItemCategoryFilter from 'src/features/ItemCategoryFilter'

const AuctionCreateLot = (): JSX.Element => {
  const {
    searchFilter,
    searchValue,
    itemCategoryFilterProps,
    inventoryHeaderProps,
    paginationTabProps,
    itemListProps,
  } = useAuctionCreateLot()

  return (
    <Container>
      <InventoryWrapper>
        <Container>
          <StyledInventoryHeader {...inventoryHeaderProps}>
            <StyledSearchInput
              placeholder="Пошук"
              value={searchValue}
              onChange={e => searchFilter(e.target.value)}
            />
          </StyledInventoryHeader>
          <StyledItemList {...itemListProps} />
        </Container>
        <InventoryFooterWrapper>
          <ItemCategoryFilter {...itemCategoryFilterProps} />

          <StyledPaginationTab
            style={{
              opacity: paginationTabProps.maxPage > 1 ? 1 : 0,
              pointerEvents: paginationTabProps.maxPage > 1 ? 'auto' : 'none',
            }}
            {...paginationTabProps}
          />
        </InventoryFooterWrapper>
      </InventoryWrapper>
    </Container>
  )
}

export default AuctionCreateLot
