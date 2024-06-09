import { BodyContainer, Container } from 'src/pages/AuctionPage/styles'

import {
  AuctionCategory,
  AuctionItemList,
  AuctionPagination,
} from 'src/components/Auction'

const AuctionPage = (): JSX.Element => {
  return (
    <Container>
      <BodyContainer>
        <AuctionCategory />
        <AuctionItemList />
      </BodyContainer>
      <AuctionPagination />
    </Container>
  )
}

export default AuctionPage
