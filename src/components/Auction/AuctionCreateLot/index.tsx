import { FETCH_URL_IMG } from 'src/constants'

import AuctionCreateLotForm from 'src/components/Auction/AuctionCreateLot/AuctionCreateLotForm'
import {
  Container,
  CreateLotContainer,
  InventoryFooterWrapper,
  InventoryWrapper,
  ShowItemContainer,
  StyledDefaultInput,
  StyledInventoryHeader,
  StyledItemList,
  StyledPaginationTab,
} from 'src/components/Auction/AuctionCreateLot/styles'
import { useAuctionCreateLot } from 'src/components/Auction/AuctionCreateLot/useAuctionCreateLot'
import { ItemGlower } from 'src/components/ItemGlow/styles'

import ItemCategoryFilter from 'src/features/ItemCategoryFilter'

const AuctionCreateLot = (): JSX.Element => {
  const {
    searchFilter,
    searchValue,
    itemCategoryFilterProps,
    inventoryHeaderProps,
    paginationTabProps,
    itemListProps,
    currentItem,
    itemSlotIconProps,
  } = useAuctionCreateLot()

  return (
    <Container>
      <InventoryWrapper>
        <Container>
          <StyledInventoryHeader {...inventoryHeaderProps}>
            <StyledDefaultInput
              placeholder="Пошук..."
              value={searchValue}
              onChange={e => searchFilter(e.target.value)}
            />
          </StyledInventoryHeader>
          <StyledItemList {...itemSlotIconProps} {...itemListProps} />
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
      <CreateLotContainer>
        <ShowItemContainer>
          <div
            style={{
              backgroundImage: `url(${FETCH_URL_IMG}/${currentItem ? currentItem.type.slice(0, 2) : 'be'}/${currentItem ? currentItem.type : 'bedrock'}.png)`,
            }}
          >
            {currentItem?.enchants && (
              <ItemGlower
                maskImageUrl={`${FETCH_URL_IMG}/${currentItem.type.slice(0, 2)}/${currentItem.type}.png`}
                style={{ width: 120, height: 120 }}
              />
            )}
          </div>
        </ShowItemContainer>

        <AuctionCreateLotForm currentItemId={currentItem?.id} />
      </CreateLotContainer>
    </Container>
  )
}

export default AuctionCreateLot
