import {
  ButtonsContainer,
  Container,
} from 'src/components/Auction/AuctionController/styles'
import { useAuctionController } from 'src/components/Auction/AuctionController/useAuctionController'
import { TitleContainer } from 'src/components/Auction/styles'
import DefaultButton from 'src/components/DefaultButton'

const AuctionController = (): JSX.Element => {
  const { buttonsTexts, auctionFragment, setAuctionFragment } =
    useAuctionController()

  return (
    <Container>
      <TitleContainer>
        <p>Контроллер</p>
      </TitleContainer>

      <ButtonsContainer>
        {buttonsTexts.map(({ fragment, text }) => {
          const isCurrentFragment = fragment === auctionFragment

          return (
            <DefaultButton
              onClick={() => setAuctionFragment(fragment)}
              style={{ width: '100%' }}
              key={fragment}
              disabled={isCurrentFragment}
            >
              {text}
            </DefaultButton>
          )
        })}
      </ButtonsContainer>
    </Container>
  )
}

export default AuctionController
