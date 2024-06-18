import type { ReactNode } from 'react'
import { VscLoading } from 'react-icons/vsc'

import { Container, NoDataInfo } from 'src/components/Skeleton/styles'
import type { SkeletonProps } from 'src/components/Skeleton/types'

const Skeleton = ({
  size = 50,
  skeletonLength = 1,
  isLoading,
  isDataExist,
  children,
  emptyText,
  ...props
}: SkeletonProps): ReactNode | JSX.Element => {
  if (isLoading) {
    return (
      <Container {...props}>
        {Array.from({ length: skeletonLength }).map((_, i) => (
          <div
            className="loadingContainer"
            style={{
              height: skeletonLength === 1 ? '100%' : '',
              width: skeletonLength === 1 ? '100%' : '',
            }}
            key={i}
          >
            <VscLoading size={size} />
          </div>
        ))}
      </Container>
    )
  }

  if (!isDataExist)
    return (
      <NoDataInfo {...props}>
        <div>{emptyText}</div>
      </NoDataInfo>
    )

  return children
}

export default Skeleton
