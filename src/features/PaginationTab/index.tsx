import {
  ButtonLeft,
  ButtonRight,
  PaginationContainer,
} from 'src/features/PaginationTab/styles'
import type { PaginationTabProps } from 'src/features/PaginationTab/types'

const PaginationTab = ({
  page,
  maxPage,
  setPage,
  ...props
}: PaginationTabProps): JSX.Element => {
  return (
    <PaginationContainer {...props}>
      <ButtonLeft
        onClick={() => page >= 2 && setPage(page - 1)}
        style={{ opacity: page >= 2 ? 1 : 0.4 }}
      />
      <div>
        {page}/{maxPage}
      </div>
      <ButtonRight
        onClick={() => maxPage > page && setPage(page + 1)}
        style={{
          opacity: maxPage > page ? 1 : 0.4,
        }}
      />
    </PaginationContainer>
  )
}

export default PaginationTab
