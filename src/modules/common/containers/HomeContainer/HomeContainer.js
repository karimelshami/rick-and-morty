import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import InputField from 'modules/common/components/InputField'
import Text from 'modules/common/components/Text'
import Button from 'modules/common/components/Button'
import Loader from 'modules/common/components/Loader'
import Modal from 'modules/common/components/Modal'
import CardsContainer from 'modules/common/components/CardsContainer'
import { commonActions } from 'modules/common'
import { constants } from 'utils'
import { staticText } from './HomeContainer.constants'
import {
  Container,
  Searchbar,
  extendSearchButtonStyle,
  extendInputFieldStyle,
  ShowMore,
  extendShowMoreButtonStyle,
  ListItem
} from './HomeContainer.style'

const HomeContainer = () => {
  const dispatch = useDispatch()
  const { status } = constants
  const firstPage = 0
  /**------------------------------------------Application state------------------------------------------*/
  const {
    characters,
    showLoader,
    showSearchingLoader,
    page,
    characterName,
    count,
    episodes,
    filter
  } = useSelector(state => ({
    characters: state.common.characters,
    showLoader:
      state.common.characters.status ===
        (status.FETCHING && state.common.page === 1) ||
      state.common.episodes.status === status.FETCHING,
    showSearchingLoader: state.common.characters.status === status.FETCHING,
    page: state.common.page,
    characterName: state.common.characterName,
    count:
      state.common.characters &&
      state.common.characters.info &&
      state.common.characters.info.count,
    episodes: state.common.episodes,
    filter: state.common.filter
  }))
  //TODO move this state to redux
  const [episodesModalState, setEpisodesModalState] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState('false')

  /**------------------------------------------Application state------------------------------------------*/

  /**------------------------------------------Componant did mount------------------------------------------*/
  useEffect(() => {
    getCharacters(firstPage, 'all')
  }, [])
  /**------------------------------------------Componant did mount------------------------------------------*/
  /**------------------------------------------Componant logic------------------------------------------*/
  async function clearAllCharacters() {
    let clearAll = dispatch(commonActions.clearAllCharacters())
    await clearAll
  }

  const toggleModalState = () => setEpisodesModalState(!episodesModalState)

  const handleInputChange = value =>
    dispatch(commonActions.setCharacterName(value))

  const setFilter = type => {
    let filter = { all: false, name: false, species: false }
    dispatch(commonActions.setFilter({ ...filter, [type]: true }))
  }

  /**------------------------------------------Actions that make api calls------------------------------------------*/

  const getCharacters = (page, filter) => {
    setFilter(filter)
    if (filter === 'species') {
      let species = Cookies.get('reccomended-species')
      dispatch(
        commonActions.getCharacterBySpecies({
          species: species,
          page: page
        })
      )
    } else if (filter === 'name') {
      if (filter.name) {
        clearAllCharacters()
      }
      dispatch(
        commonActions.getCharacterByName({
          name: characterName,
          page: page
        })
      )
    } else if (filter === 'all') {
      dispatch(commonActions.getAllCharacters(page))
    }
  }

  /**------------------------------------------Actions that make api calls------------------------------------------*/
  /**------------------------------------------Button Actions------------------------------------------*/
  const getReccomendedCharacters = () => {
    clearAllCharacters()
    getCharacters(firstPage, 'species')
  }

  const showMore = () => {
    let nextPage = page + 1
    if (filter.name) {
      getCharacters(nextPage, 'name')
    } else if (filter.species) {
      getCharacters(nextPage, 'species')
    } else {
      getCharacters(nextPage, 'all')
    }
    dispatch(commonActions.setPage(nextPage))
  }
  const search = () => {
    clearAllCharacters()
    dispatch(commonActions.setPage(firstPage))
    getCharacters(firstPage, 'name')
    setFilter('name')
  }

  const viewEpisodes = (episodes, charachterName) => {
    let episodeIds = []
    let episodeIdsString = ''
    for (let i = 0; i < episodes.length; i++) {
      episodeIds.concat()
      episodeIds.push(episodes[i].replace(staticText.episodeApiURL, ''))
    }
    episodeIdsString = episodeIds.toString()
    setSelectedCharacter(charachterName)
    dispatch(commonActions.getEpisodes(episodeIdsString))
    toggleModalState()
  }

  /**------------------------------------------Button Actions------------------------------------------*/

  /**------------------------------------------Componant logic------------------------------------------*/
  /**------------------------------------------Render functions------------------------------------------*/
  const renderSearchBar = () => {
    return (
      <Searchbar>
        <InputField
          placeholder={
            characterName
              ? characterName
              : 'Search by your favourite charachter'
          }
          handleChange={e => handleInputChange(e.target.value)}
          extendStyle={extendInputFieldStyle}
        />
        <Button
          handleClick={() => search()}
          extendStyle={extendSearchButtonStyle}
          text={'Search'}
          loading={showSearchingLoader}
        />
        <Button
          handleClick={() => getCharacters(firstPage, 'all')}
          extendStyle={extendSearchButtonStyle}
          text={'Get All'}
        />
        {Cookies.get('reccomended-species') && (
          <Button
            handleClick={() => getReccomendedCharacters()}
            extendStyle={extendSearchButtonStyle}
            text={'Reccomend'}
          />
        )}
      </Searchbar>
    )
  }

  const renderModal = () => {
    let episodesList = []
    if (episodes && episodes.results) {
      episodesList = episodes.results.map((episode, index) => {
        return (
          <ListItem key={index}>
            <Text secondaryText text={`${episode.name}(${episode.episode})`} />
          </ListItem>
        )
      })
    }
    return (
      <Modal
        title={`${selectedCharacter} Episodes`}
        onClose={() => toggleModalState()}
        content={episodesList}
      />
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
  /**------------------------------------------Render functions------------------------------------------*/

  /**------------------------------------------Componant render return ------------------------------------------*/

  return (
    <Container>
      {renderSearchBar()}
      {count && (
        <Text
          primaryText
          text={
            characterName && filter.name
              ? `Found ${count} characters from ${characterName}`
              : `Total Count is ${count}`
          }
        />
      )}
      {showLoader && page === 1 ? (
        <Loader />
      ) : (
        <>
          <CardsContainer
            characters={characters}
            viewEpisodes={(episodes, charachterName) =>
              viewEpisodes(episodes, charachterName)
            }
          />
          {renderShowMore()}
          {!showLoader && episodesModalState && renderModal()}
        </>
      )}
    </Container>
  )
  /**------------------------------------------Componant did mount------------------------------------------*/
}
export default HomeContainer
