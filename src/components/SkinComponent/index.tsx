import { Role } from 'src/constants'

import HoverDescription from 'src/components/HoverDescription'
import Skeleton from 'src/components/Skeleton'
import {
  Container,
  PlayerRoleImage,
  PlayerRoleImageWrapper,
  SkinContainer,
} from 'src/components/SkinComponent/styles'
import { useSkinComponent } from 'src/components/SkinComponent/useSkinComponent'

const SkinComponent = (): JSX.Element => {
  const { isLoading, showRoleInfo, canvasRef, role, roleUa } = useSkinComponent()

  return (
    <Container style={{ width: 350, height: 500 }}>
      <Skeleton
        isLoading={isLoading}
        isDataExist={1}
        emptyText="Скін не знайдено"
        size={80}
      >
        <SkinContainer>
          <canvas ref={canvasRef} id="canvas" />
          {role !== Role.USER && (
            <PlayerRoleImageWrapper>
              <div>
                <PlayerRoleImage
                  style={{
                    backgroundImage: `url('/assets/roles/${role}.webp')`,
                  }}
                  onClick={() => showRoleInfo()}
                />
                <HoverDescription
                  style={{
                    translate: '-50% -120%',
                    top: '0%',
                    left: '50%',
                    fontSize: 22,
                  }}
                  description={[roleUa]}
                />
              </div>
            </PlayerRoleImageWrapper>
          )}
        </SkinContainer>
      </Skeleton>
    </Container>
  )
}

export default SkinComponent
