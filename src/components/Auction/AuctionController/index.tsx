import {
  ButtonsContainer,
  Container,
  EnchantItemIcon,
  EnchantSearchInfo,
} from 'src/components/Auction/AuctionController/styles'
import { useAuctionController } from 'src/components/Auction/AuctionController/useAuctionController'
import DefaultButton from 'src/components/DefaultButton'

import { enchantTranslations } from '../AuctionEnchantFinder/constants'

const AuctionController = (): JSX.Element => {
  const { buttonsTexts, auctionFragment, setAuctionFragment, enchantSearchParams } =
    useAuctionController()

  const { enchantType, enchants, itemType } = enchantSearchParams

  return (
    <Container>
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

      <EnchantSearchInfo>
        <EnchantItemIcon />

        <ul>
          {enchants.map(item => {
            return <li key={item}>{enchantTranslations[item]}</li>
          })}
        </ul>
      </EnchantSearchInfo>
    </Container>
  )
}

export default AuctionController
