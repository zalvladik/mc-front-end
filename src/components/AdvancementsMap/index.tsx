import './cssStyles.css'

import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import AdvancementsIcon from 'src/assets/SVG/AdvancementsIcon'
import AdvancementsRoad from 'src/assets/SVG/AdvancementsRoadFinal'
import { AdvancementsIcons } from 'src/constants'

import {
  ContainerImage,
  Description,
  IconContainer,
  RoadContainer,
  StyledSkeleton,
  Title,
} from 'src/components/AdvancementsMap/styles'
import type { AdvancementsMapProps } from 'src/components/AdvancementsMap/types'
import { useAdvancementsMap } from 'src/components/AdvancementsMap/useAdvancementsMap'

const AdvancementsMap = ({ username }: AdvancementsMapProps): JSX.Element => {
  const {
    userAdvancements = [],
    isLoading,
    screenWidth,
    initialPositionX,
  } = useAdvancementsMap(username)

  return (
    <StyledSkeleton
      isLoading={isLoading}
      isDataExist={1}
      emptyText="Досягнення відсутні :("
      size={150}
    >
      <TransformWrapper
        centerZoomedOut={false}
        centerOnInit={false}
        initialPositionX={initialPositionX}
        maxPositionX={screenWidth}
      >
        <TransformComponent wrapperStyle={{ width: '100%' }}>
          <AdvancementsRoad />
          <RoadContainer>
            {userAdvancements.map(
              ({ top, left, figure, itemIcon, isDone, title, description }) => {
                return (
                  <IconContainer key={title} style={{ top, left }}>
                    <ContainerImage
                      style={{
                        backgroundImage: `url(/assets/items_for_advancements/${itemIcon}.png)`,
                      }}
                    >
                      <AdvancementsIcon
                        figure={figure ?? AdvancementsIcons.SQUARE}
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
        </TransformComponent>
      </TransformWrapper>
    </StyledSkeleton>
  )
}

export default AdvancementsMap
