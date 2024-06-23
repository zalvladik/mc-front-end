import MedalIcon from 'src/assets/SVG/MedalIcon'
import {
  FormContainer,
  OptionFilter,
  PasportLi,
  PasportUl,
  SelectContainer,
  UserNameContainer,
  WikiPageContainer,
} from 'src/pages/WikiPage/styles'
import useWikiPage from 'src/pages/WikiPage/useWikiPage'

import DefaultInput from 'src/components/inputs/DefaultInput'

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
        <DefaultInput
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
          {data.map(({ username, rating }) => (
            <PasportLi key={username} onClick={() => toAdvancements(username)}>
              <UserNameContainer>
                <p>{username}</p>
                <div>{rating}</div>
              </UserNameContainer>
            </PasportLi>
          ))}
        </PasportUl>
      )}
    </WikiPageContainer>
  )
}

export default WikiPage
