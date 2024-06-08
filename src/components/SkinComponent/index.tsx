import { Role } from 'src/constants'

import HoverDescription from 'src/components/HoverDescription'
import {
  PlayerRoleImage,
  PlayerRoleImageWrapper,
  SkinContainer,
  SkinIcon,
} from 'src/components/SkinComponent/styles'
import { useSkinComponent } from 'src/components/SkinComponent/useSkinComponent'

const SkinComponent = (): JSX.Element => {
  const { isLoading, showRoleInfo, canvasRef, role, roleUa } = useSkinComponent()

  return (
    <div>
      {isLoading ? (
        <SkinIcon style={{ width: 350, height: 500 }} />
      ) : (
        <SkinContainer>
          <SkinIcon ref={canvasRef} id="canvas" />
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
      )}
    </div>
  )
}

export default SkinComponent
