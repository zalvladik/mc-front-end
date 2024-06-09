import { FETCH_URL_IMG } from 'src/constants'

import {
  Container,
  ItemAmount,
  ItemDesriptionContainer,
  ItemPriceContainer,
  ItemSlotIcon,
  TbodyContainer,
  TheadContainer,
} from 'src/components/Auction/AuctionItemList/styles'

const AuctionItemList = (): JSX.Element => {
  return (
    <Container>
      <TheadContainer>
        <div>
          <p>Предмет</p>
          <div />
        </div>

        <div>
          <p>Ціна</p>
          <div />
        </div>
      </TheadContainer>
      <TbodyContainer>
        {Array.from({ length: 8 }, (item, i) => (
          <div key={i}>
            <div>
              <ItemSlotIcon>
                <div
                  style={{
                    backgroundImage: `url(${FETCH_URL_IMG}/oa/oak_log.png)`,
                  }}
                />
                {12 > 1 && <ItemAmount>{12}</ItemAmount>}
              </ItemSlotIcon>

              <ItemDesriptionContainer>
                <div>
                  <div>Дуб хуют</div>
                  <div>France</div>
                </div>
              </ItemDesriptionContainer>
            </div>

            <div />

            <ItemPriceContainer>
              <div>32</div>
            </ItemPriceContainer>
          </div>
        ))}
      </TbodyContainer>
    </Container>
  )
}

export default AuctionItemList
