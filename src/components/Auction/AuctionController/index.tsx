import {
  ButtonsContainer,
  Container,
  EnchantSearchInfo,
} from 'src/components/Auction/AuctionController/styles'
import { useAuctionController } from 'src/components/Auction/AuctionController/useAuctionController'
import {
  enchantTranslations,
  itemTypesEnchantsFinderTranslations,
} from 'src/components/Auction/AuctionEnchantFinder/constants'
import DefaultButton from 'src/components/DefaultButton'
import ItemSlotIcon from 'src/components/ItemSlotIcon'

const AuctionController = (): JSX.Element => {
  const { buttonsTexts, auctionFragment, setAuctionFragment, enchantSearchParams } =
    useAuctionController()

  const { enchants, itemType } = enchantSearchParams

  const enchantsTranslating = enchants.map(enchant => enchantTranslations[enchant])

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

      {itemType && (
        <EnchantSearchInfo>
          <ItemSlotIcon
            id={1}
            amount={1}
            style={{ margin: '0px auto' }}
            display_name={itemTypesEnchantsFinderTranslations[itemType]}
            type={itemType}
            containerSize={120}
            itemSize={80}
            enchants={enchantsTranslating.length ? enchantsTranslating : null}
            durability={null}
            categories={[]}
            items={[]}
            description={null}
          />
        </EnchantSearchInfo>
      )}
    </Container>
  )
}

export default AuctionController
