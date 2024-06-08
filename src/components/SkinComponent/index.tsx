import { Role } from 'src/constants'

import HoverDescription from 'src/components/HoverDescription'
import { useSkinComponent } from 'src/components/SkinComponent/useSkinComponent'

import { PlayerRoleImage, SkinContainer, SkinIcon } from './styles'

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
            <PlayerRoleImage
              style={{
                backgroundImage: `url('/assets/roles/${role}.webp')`,
              }}
              onClick={() => showRoleInfo()}
            >
              <HoverDescription description={[roleUa]} />
            </PlayerRoleImage>
          )}
        </SkinContainer>
      )}
    </div>
  )
}

export default SkinComponent
