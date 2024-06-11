import { AuctionCreateLotFormContainer } from 'src/components/Auction/AuctionCreateLot/AuctionCreateLotForm/styles'
import type { AuctionCreateLotFormT } from 'src/components/Auction/AuctionCreateLot/AuctionCreateLotForm/types'
import { useAuctionCreateLotForm } from 'src/components/Auction/AuctionCreateLot/AuctionCreateLotForm/useAuctionCreateLotForm'
import DefaultInput from 'src/components/inputs/DefaultInput'
import SimpleButton from 'src/components/SimpleButton'

const AuctionCreateLotForm = ({
  currentItemId,
}: AuctionCreateLotFormT): JSX.Element => {
  const { itemPrice, setItemPrice, createLotHanlder, isLoading } =
    useAuctionCreateLotForm()

  return (
    <AuctionCreateLotFormContainer>
      <DefaultInput
        style={{ textAlign: 'center' }}
        placeholder="Ціна"
        value={itemPrice}
        onChange={e => {
          const value = Number(e.target.value)

          if (value < 0) return

          setItemPrice(e.target.value)
        }}
      />
      <SimpleButton
        style={{ width: 300, marginBottom: 60 }}
        disabled={isLoading || !Number(itemPrice)}
        onClick={() => createLotHanlder(currentItemId)}
      >
        Створити Лот
      </SimpleButton>
    </AuctionCreateLotFormContainer>
  )
}

export default AuctionCreateLotForm
