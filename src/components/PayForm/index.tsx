import { copyText } from 'src/helpers'
import payForm from 'src/locales/payForm.json'

import HeroButton from 'src/components/HeroButton'
import {
  AboutBox,
  ButtonsBox,
  FormBox,
  PriceBox,
} from 'src/components/PayForm/styles'
import { usePayForm } from 'src/components/PayForm/usePayForm'
import TitleDescription from 'src/components/TitleDescription'

import { Modals } from 'src/features/Modals/constants'

const PayForm = (): JSX.Element => {
  const { aboutIcons, onOpen, priceIcons } = usePayForm()

  return (
    <FormBox>
      <PriceBox>
        <span>
          <h1>100₴</h1>
          <p>на місяць</p>
        </span>
        <ButtonsBox>
          <HeroButton
            icon={priceIcons[0]}
            onClick={() => {
              onOpen({ name: Modals.PAY })
            }}
            styles={{ background: '#7F00FF' }}
            text="Почати грати"
          />
          <HeroButton
            icon={priceIcons[1]}
            onClick={() => {
              copyText('ukland.pp.ua')
            }}
            styles={{ background: 'none', border: '1px solid white' }}
            text="Скопіювати IP"
          />
        </ButtonsBox>
      </PriceBox>
      <AboutBox>
        {payForm.map(({ title, description }, i) => (
          <div key={title}>
            <TitleDescription title={title} leftIcon={aboutIcons[i]} />
            <p>{description}</p>
          </div>
        ))}
      </AboutBox>
    </FormBox>
  )
}

export default PayForm
