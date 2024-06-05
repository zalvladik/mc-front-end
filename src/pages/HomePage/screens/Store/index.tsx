import { animated } from '@react-spring/web'

import { StoreSection } from 'src/pages/HomePage/screens/Store/styles'
import { useStore } from 'src/pages/HomePage/screens/Store/useStore'

import MainTitle from 'src/components/MainTitle'
import PayForm from 'src/components/PayForm'

const Store = (): JSX.Element => {
  const { springProps } = useStore()

  return (
    <StoreSection id="store">
      <MainTitle text="Купити прохідку" icon="assets/fishGif.gif" alt="axolotl" />
      <animated.div style={{ ...springProps }}>
        <PayForm />
      </animated.div>
    </StoreSection>
  )
}

export default Store
