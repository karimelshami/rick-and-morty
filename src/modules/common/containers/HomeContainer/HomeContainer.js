import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  CardsWrapper,
  Searchbar,
  extendSearchButtonStyle,
  extendInputFieldStyle,
  ShowMore,
  extendShowMoreButtonStyle
} from './HomeContainer.style'
import InputField from 'modules/common/components/InputField'
import Card from 'modules/common/components/Card'
import Text from 'modules/common/components/Text'
import Button from 'modules/common/components/Button'
import Loader from 'modules/common/components/Loader'
import { commonActions } from 'modules/common'
import { constants } from 'utils'
import { characterStatus, characterGender } from './HomeContainer.constants'
const { status } = constants

const HomeContainer = () => {
  const { characters, showLoader } = useSelector(state => ({
    characters: state.common.characters,
    showLoader: state.common.characters.status === status.FETCHING
  }))
  const [page, setPage] = useState(1)
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const getAllCharacters = () => {
    dispatch(commonActions.getAllCharacters(page))
  }
  useEffect(() => {
    getAllCharacters(page)
  }, [page])

  const handleInputChange = value => setName(value)
  const search = () => dispatch(commonActions.getCharacterByName(name))

  const viewEpisodes = () => {
    console.log('view Episodes')
  }

  const showMore = () => setPage(page + 1)

  const renderSearchBar = () => {
    return (
      <Searchbar>
        <InputField
          placeholder="Search by your favourite charachter"
          handleChange={e => handleInputChange(e.target.value)}
          extendStyle={extendInputFieldStyle}
        />
        <Button
          handleClick={() => search()}
          extendStyle={extendSearchButtonStyle}
          text={'Search'}
        />
      </Searchbar>
    )
  }
  const renderShowMore = () => {
    return (
      <ShowMore>
        <Button
          handleClick={() => showMore()}
          extendStyle={extendShowMoreButtonStyle}
          text={'Show more'}
        />
      </ShowMore>
    )
  }

  const renderAllCharactersCards = () => {
    if (characters && characters.results) {
      return (
        <CardsWrapper>
          {characters &&
            characters.results.map(character => {
              return (
                <Card
                  img={character.image}
                  statusImg={characterStatus[character.status]}
                  status={character.status}
                  gender={characterGender[character.gender]}
                  species={character.species}
                  location={character.location.name}
                  origin={character.origin.name}
                  name={character.name}
                  buttonText={`View Episodes`}
                  handleClick={() => viewEpisodes()}
                />
              )
            })}
        </CardsWrapper>
      )
    }
  }

  return (
    <Container>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          {renderSearchBar()}
          {renderAllCharactersCards()}
          {renderShowMore()}
        </>
      )}
    </Container>
  )
}
export default HomeContainer
