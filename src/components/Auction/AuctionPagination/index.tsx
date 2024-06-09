import {
  Container,
  CountItems,
  DoubleButttonLeft,
  DoubleButttonRight,
  Left,
  Pages,
  PaginationController,
  Right,
} from 'src/components/Auction/AuctionPagination/styles'

const AuctionPagination = (): JSX.Element => {
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
          {[31, 32, 33, 34, 35, 36, 37, 38, 39].map(item => (
            <li key={item}>{item}</li>
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

      <CountItems>6/157</CountItems>
    </Container>
  )
}

export default AuctionPagination
