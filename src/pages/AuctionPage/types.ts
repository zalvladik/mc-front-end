export type IsBuyFragmentProps = { isBuyFragment: boolean }

export type IsCreateLotFragmentProps = { isCreateLotFragment: boolean }

export type IsUserLotsFragmentProps = { isUserLotsFragment: boolean }

export type StyledAuctionPaginationProps = {
  totalPageIsNull: boolean
} & IsCreateLotFragmentProps
