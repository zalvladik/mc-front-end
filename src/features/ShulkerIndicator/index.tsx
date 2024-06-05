import {
  Indicator,
  ShulkerIndicatorWrapper,
} from 'src/features/ShulkerIndicator/styles'
import type { ShulkerIndicatorProps } from 'src/features/ShulkerIndicator/types'

const ShulkerIndicator = ({ value }: ShulkerIndicatorProps): JSX.Element => {
  return (
    <ShulkerIndicatorWrapper>
      <div>
        <Indicator>{value}</Indicator>
      </div>
    </ShulkerIndicatorWrapper>
  )
}

export default ShulkerIndicator
