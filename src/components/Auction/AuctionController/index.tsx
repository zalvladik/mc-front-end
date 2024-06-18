import {
  ButtonsContainer,
  Container,
} from 'src/components/Auction/AuctionController/styles'
import type { AuctionControllerProps } from 'src/components/Auction/AuctionController/types'
import { useAuctionController } from 'src/components/Auction/AuctionController/useAuctionController'
import { TitleContainer } from 'src/components/Auction/styles'
import DefaultButton from 'src/components/DefaultButton'

const AuctionController = ({
  currentFragment,
  setCurrentFragment,
}: AuctionControllerProps): JSX.Element => {
  const { buttonsTexts } = useAuctionController()

  return (
    <Container>
      <TitleContainer>
        <p>Контроллер</p>
      </TitleContainer>

      <ButtonsContainer>
        {buttonsTexts.map(({ fragment, text }) => {
          const isCurrentFragment = fragment === currentFragment

          return (
            <DefaultButton
              isLoading={false}
              onClick={() => setCurrentFragment(fragment)}
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
