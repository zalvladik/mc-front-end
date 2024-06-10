import { Container } from 'src/components/Auction/AuctionCreateLot/styles'
import { useAuctionCreateLot } from 'src/components/Auction/AuctionCreateLot/useAuctionCreateLot'

const AuctionCreateLot = (): JSX.Element => {
  const {} = useAuctionCreateLot()

  return <Container>2</Container>
}

export default AuctionCreateLot
