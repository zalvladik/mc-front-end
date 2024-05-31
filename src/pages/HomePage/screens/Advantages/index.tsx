import advantages from 'src/locales/advantages.json'

import AdvantageCard from 'src/components/AdvancementCard'
import MainTitle from 'src/components/MainTitle'

import { useAdvantage } from 'src/pages/HomePage/screens/Advantages/useAdvantages'

import { useCustomSpring } from 'src/hooks/useCustomSpring'
import { COMPONENT_IDS } from 'src/constants'

import {
  CardContainer,
  CustomAnimated,
  AdvantagesSection,
} from 'src/pages/HomePage/screens/Advantages/styles'

const Advantages = (): JSX.Element => {
  const { images } = useAdvantage()

  return (
    <AdvantagesSection id="advantages">
      <MainTitle text="Наші переваги" icon="assets/beeGif.gif" alt="bee" />

      <CardContainer>
        {advantages.map(({ title, text }, i: number) => (
          <CustomAnimated
            key={title}
            id={COMPONENT_IDS.ADVANTAGE + title}
            style={useCustomSpring(COMPONENT_IDS.ADVANTAGE + title)}
          >
            <AdvantageCard text={text} title={title} img={images[i]()} />
          </CustomAnimated>
        ))}
      </CardContainer>
    </AdvantagesSection>
  )
}

export default Advantages
