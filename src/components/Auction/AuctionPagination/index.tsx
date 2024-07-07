import { generatePageNumbers } from 'src/helpers'

import {
  Container,
  CountItems,
  CountLots,
  DoubleButttonLeft,
  DoubleButttonRight,
  Left,
  Page,
  Pages,
  PaginationController,
  Right,
  SingleButttonLeft,
  SingleButttonRight,
} from 'src/components/Auction/AuctionPagination/styles'
import { useAuctionPagination } from 'src/components/Auction/AuctionPagination/useAuctionPagination'

const AuctionPagination = (): JSX.Element => {
  const {
    currentUserLots,
    currentPage,
    setCurrentPage,
    totalPages,
    maxLots,
    didVanishPagesInfo,
    isByeFragment,
  } = useAuctionPagination()

  const pageNumbers = generatePageNumbers(currentPage, totalPages)

  return (
    <Container>
      <PaginationController disabled={didVanishPagesInfo}>
        <Left>
          <DoubleButttonLeft
            onClick={() => setCurrentPage(Math.max(currentPage - 10, 1))}
            disabled={currentPage <= 10}
          >
            <div />
            <div />
          </DoubleButttonLeft>
          <SingleButttonLeft
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
          />
        </Left>

        <Pages>
          {pageNumbers.map(pageNumber => (
            <Page
              isCurrentPage={pageNumber === currentPage}
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </Page>
          ))}
        </Pages>

        <Right>
          <SingleButttonRight
            onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
          />
          <DoubleButttonRight
            onClick={() => setCurrentPage(Math.min(currentPage + 10, totalPages))}
            disabled={currentPage > totalPages - 10}
          >
            <div />
            <div />
          </DoubleButttonRight>
        </Right>
      </PaginationController>

      <CountItems disabled={didVanishPagesInfo}>
        {currentPage}/{totalPages}
      </CountItems>

      <CountLots disabled={isByeFragment}>
        {currentUserLots}/{maxLots} ваші лоти
      </CountLots>
    </Container>
  )
}

export default AuctionPagination
