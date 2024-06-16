import { ComponentIds } from 'src/constants'
import { useCustomSpring } from 'src/hooks/useCustomSpring'
import advantages from 'src/locales/advantages.json'
import {
  AdvantagesSection,
  CardContainer,
  CustomAnimated,
} from 'src/pages/HomePage/screens/Advantages/styles'
import { useAdvantage } from 'src/pages/HomePage/screens/Advantages/useAdvantages'

import AdvantageCard from 'src/components/AdvancementCard'
import MainTitle from 'src/components/MainTitle'

const Advantages = (): JSX.Element => {
  const { images } = useAdvantage()

  /* eslint-disable react-hooks/rules-of-hooks */
  return (
    <AdvantagesSection id="advantages">
      <MainTitle text="Наші переваги" icon="assets/beeGif.gif" alt="bee" />

      <CardContainer>
        {advantages.map(({ title, text }, i: number) => (
          <CustomAnimated
            key={title}
            id={ComponentIds.ADVANTAGE + title}
            style={useCustomSpring(ComponentIds.ADVANTAGE + title)}
          >
            <AdvantageCard text={text} title={title} img={images[i]()} />
          </CustomAnimated>
        ))}
      </CardContainer>
    </AdvantagesSection>
  )
}

export default Advantages
