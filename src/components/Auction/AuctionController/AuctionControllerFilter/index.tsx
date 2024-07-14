import {
  Container,
  FilterParam,
  MoneyFilterParam,
} from 'src/components/Auction/AuctionController/AuctionControllerFilter/styles'
import { useAuctionControlletFilter } from 'src/components/Auction/AuctionController/AuctionControllerFilter/useAuctionControllerFilter'
import HoverDescription from 'src/components/HoverDescription'

const AuctionControlletFilter = (): JSX.Element => {
  const {
    buttonFilterList,
    getImgSelectForFilter,
    didPriceToUp,
    setFilterListParams,
    filterListParams,
  } = useAuctionControlletFilter()

  return (
    <Container>
      {buttonFilterList.map(({ isSelected, description, urlImg, onClick }) => (
        <FilterParam key={description} onClick={onClick}>
          <div style={{ backgroundImage: `url(${urlImg})` }} />
          <div
            style={{
              backgroundImage: `url(${getImgSelectForFilter(isSelected)})`,
            }}
          />
          <HoverDescription description={[description]} />
        </FilterParam>
      ))}

      <MoneyFilterParam
        onClick={() =>
          setFilterListParams({
            ...filterListParams,
            didPriceToUp: !didPriceToUp,
          })
        }
      >
        <div style={{ backgroundImage: `url(/assets/items_for_ui/diamond.png)` }} />
        <div>{didPriceToUp ? '>' : '<'}</div>

        <HoverDescription description={['Зниження/підвищення цін']} />
      </MoneyFilterParam>
    </Container>
  )
}

export default AuctionControlletFilter
