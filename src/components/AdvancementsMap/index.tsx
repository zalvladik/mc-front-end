import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

import AdvancementsIcon from 'src/assets/SVG/AdvancementsIcon'
import AdvancementsRoad from 'src/assets/SVG/AdvancementsRoadFinal'
import { useAdvancementsMap } from 'src/components/AdvancementsMap/useAdvancementsMap'
import { ADVANCEMENTS_ICONS } from 'src/constants'

import {
  ContainerImage,
  IconContainer,
  RoadContainer,
  Title,
  Description,
} from 'src/components/AdvancementsMap/styles'

import './cssStyles.css'

import type { AdvancementsMapProps } from 'src/components/AdvancementsMap/types'

const AdvancementsMap = ({ realname }: AdvancementsMapProps): JSX.Element => {
  const {
    userAdvancements = [],
    isLoading,
    screenWidth,
    initialPositionX,
  } = useAdvancementsMap(realname)

  return (
    <TransformWrapper
      centerZoomedOut={false}
      centerOnInit={false}
      initialPositionX={initialPositionX}
      maxPositionX={screenWidth}
    >
      <TransformComponent wrapperStyle={{ width: '100%' }}>
        <AdvancementsRoad />
        {!isLoading && (
          <RoadContainer>
            {userAdvancements.map(
              ({ top, left, figure, itemIcon, isDone, title, description }) => {
                return (
                  <IconContainer key={title} style={{ top, left }}>
                    <ContainerImage
                      style={{
                        backgroundImage: `url(http://localhost:8080/public/${itemIcon.slice(0, 2)}/${itemIcon}.png)`,
                      }}
                    >
                      <AdvancementsIcon
                        figure={figure ?? ADVANCEMENTS_ICONS.SQUARE}
                        isDone={isDone}
                      />
                    </ContainerImage>
                    <div className="advancementsText">
                      <Title
                        style={{ backgroundColor: isDone ? '#AA7E0F' : '#036a96' }}
                      >
                        <p>{title}</p>
                      </Title>
                      <Description>
                        <p
                          style={{
                            color: figure === 'star' ? '#a800a8' : '#54fc54',
                          }}
                        >
                          {description}
                        </p>
                      </Description>
                    </div>
                  </IconContainer>
                )
              },
            )}
          </RoadContainer>
        )}
      </TransformComponent>
    </TransformWrapper>
  )
}

export default AdvancementsMap
