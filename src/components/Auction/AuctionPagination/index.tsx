import { generatePageNumbers } from 'src/helpers'

import {
  Container,
  CountItems,
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
import type { AuctionPaginationProps } from 'src/components/Auction/AuctionPagination/types'

const AuctionPagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  ...props
}: AuctionPaginationProps): JSX.Element => {
  const pageNumbers = generatePageNumbers(currentPage, totalPages)

  return (
    <Container {...props}>
      <PaginationController>
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

      <CountItems>
        {currentPage}/{totalPages}
      </CountItems>
    </Container>
  )
}

export default AuctionPagination
