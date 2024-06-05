import MedalIcon from 'src/assets/SVG/MedalIcon'
import {
  FormContainer,
  OptionFilter,
  PasportLi,
  PasportUl,
  RealNameContainer,
  SelectContainer,
  WikiPageContainer,
} from 'src/pages/WikiPage/styles'
import useWikiPage from 'src/pages/WikiPage/useWikiPage'

import SearchInput from 'src/components/inputs/SearchInput'

const WikiPage = (): JSX.Element => {
  const {
    data = [],
    value,
    isLoading,
    toAdvancements,
    setValue,
    setOption,
  } = useWikiPage()

  return (
    <WikiPageContainer>
      <FormContainer>
        <SearchInput
          placeholder="Введіть нік гравця"
          value={value}
          onChange={e => {
            setValue(e.target.value)
          }}
        />

        <SelectContainer>
          <OptionFilter onClick={() => setOption('optionToTop')}>
            <MedalIcon medalIsUp />
          </OptionFilter>
          <OptionFilter onClick={() => setOption('optionToDown')}>
            <MedalIcon />
          </OptionFilter>
          <OptionFilter onClick={() => setOption('optionAbc')}>A...</OptionFilter>
          <OptionFilter onClick={() => setOption('optionCba')}>Z...</OptionFilter>
        </SelectContainer>
      </FormContainer>

      {!isLoading && (
        <PasportUl>
          {data.map(({ realname, rating }) => (
            <PasportLi key={realname} onClick={() => toAdvancements(realname)}>
              <RealNameContainer>
                <p>{realname}</p>
                <div>{rating}</div>
              </RealNameContainer>
            </PasportLi>
          ))}
        </PasportUl>
      )}
    </WikiPageContainer>
  )
}

export default WikiPage
