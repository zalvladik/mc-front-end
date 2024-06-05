import props from 'src/pages/HomePage/screens/Social/properties.json'
import { Container } from 'src/pages/HomePage/screens/Social/styles'

import MainTitle from 'src/components/MainTitle'
import SocialCard from 'src/components/Social'

const Social = (): JSX.Element => {
  return (
    <>
      <MainTitle text="Соц.мережі UKLand" />
      <Container>
        {[...props].map(({ path, icon, title, alt }) => (
          <SocialCard key={title} href={path} img={icon} title={title} alt={alt} />
        ))}
      </Container>
    </>
  )
}

export default Social
