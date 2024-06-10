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
} from 'src/components/Auction/AuctionPagination/styles'

const AuctionPagination = (): JSX.Element => {
  const ids = [31, 32, 33, 34, 35, 36, 37, 38, 39]

  const currentPage = 35

  return (
    <Container>
      <PaginationController>
        <Left>
          <DoubleButttonLeft>
            <div />
            <div />
          </DoubleButttonLeft>
          <div />
        </Left>

        <Pages>
          {ids.map(item => (
            <Page isCurrentPage={item === currentPage} key={item}>
              {item}
            </Page>
          ))}
        </Pages>

        <Right>
          <div />
          <DoubleButttonRight>
            <div />
            <div />
          </DoubleButttonRight>
        </Right>
      </PaginationController>

      <CountItems>35/157</CountItems>
    </Container>
  )
}

export default AuctionPagination
