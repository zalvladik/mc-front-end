import { Input } from 'src/components/inputs/SearchInput/styles'
import type { SearchInputProps } from 'src/components/inputs/SearchInput/types'

const SearchInput = ({
  styles,
  placeholder,
  ...props
}: SearchInputProps): JSX.Element => {
  return <Input style={styles} placeholder={placeholder} {...props} />
}

export default SearchInput
