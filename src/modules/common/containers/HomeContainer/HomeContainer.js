import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import InputField from 'modules/common/components/InputField'
import Text from 'modules/common/components/Text'
import Button from 'modules/common/components/Button'
import Loader from 'modules/common/components/Loader'
import Modal from 'modules/common/components/Modal'
import CardsContainer from 'modules/common/components/CardsContainer'
import NotFound from 'modules/common/components/NotFound'
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
  ListItem,
  ExtraButtonsWrapper,
  extendExtrsButtonStyle
} from './HomeContainer.style'

const HomeContainer = () => {
  const dispatch = useDispatch()
  const { status } = constants
  const firstPage = 1
  /**------------------------------------------Application state------------------------------------------*/
  const {
    characters,
    showLoader,
    showSearchingLoader,
    page,
    characterName,
    count,
    episodes,
    filter,
    character,
    totalPages
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
    totalPages:
      state.common.characters &&
      state.common.characters.info &&
      state.common.characters.info.pages,
    episodes: state.common.episodes,
    filter: state.common.filter,
    character: state.common.character
  }))
  const [episodesModalState, setEpisodesModalState] = useState(false) // to show modal
  const [reccomendedButtonState, setReccomendedButtonState] = useState(false) // to show reccomended button if the user has done his first search

  /**------------------------------------------Application state------------------------------------------*/

  /**------------------------------------------Componant did mount------------------------------------------*/
  useEffect(() => {
    getCharacters(firstPage, 'all')
    showReccomendedButton()
  }, [])
  /**------------------------------------------Componant did mount------------------------------------------*/
  /**------------------------------------------Componant logic------------------------------------------*/
  const clearAllCharacters = () => dispatch(commonActions.clearAllCharacters())

  const toggleModalState = () => setEpisodesModalState(!episodesModalState)

  const handleInputChange = value =>
    dispatch(commonActions.setCharacterName(value))

  const setFilter = type => {
    let falsyFilter = { all: false, name: false, species: false }
    let prevoiusFilter = filter
    let nextFilter = { ...falsyFilter, [type]: true }
    if (JSON.stringify(prevoiusFilter) !== JSON.stringify(nextFilter))
      clearAllCharacters()
    dispatch(commonActions.setFilter(nextFilter))
  }

  const showReccomendedButton = () => {
    if (Cookies.get('reccomended-species')) setReccomendedButtonState(true)
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
        showReccomendedButton()
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
    dispatch(commonActions.setPage(firstPage))
    getCharacters(firstPage, 'name')
  }

  const viewEpisodes = (episodes, charachterName) => {
    let episodeIds = []
    let episodeIdsString = ''
    for (let i = 0; i < episodes.length; i++) {
      episodeIds.concat()
      episodeIds.push(episodes[i].replace(staticText.episodeApiURL, ''))
    }
    episodeIdsString = episodeIds.toString()
    dispatch(commonActions.setCharacter(charachterName))
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
          loading={filter.name && showSearchingLoader}
        />
      </Searchbar>
    )
  }

  const renderExtraButtons = () => {
    return (
      <ExtraButtonsWrapper>
        <Button
          handleClick={() => getCharacters(firstPage, 'all')}
          extendStyle={extendExtrsButtonStyle}
          text={'Reset'}
          loading={filter.all && showSearchingLoader}
        />
        {Cookies.get('reccomended-species') && (
          <Button
            handleClick={() => getReccomendedCharacters()}
            extendStyle={extendExtrsButtonStyle}
            text={'Reccomended'}
            loading={filter.species && showSearchingLoader}
          />
        )}
      </ExtraButtonsWrapper>
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
        title={`${character} Episodes`}
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

  const renderCharacters = () => {
    if (characters && characters.results && !showLoader) {
      return (
        <CardsContainer
          characters={characters}
          viewEpisodes={(episodes, charachterName) =>
            viewEpisodes(episodes, charachterName)
          }
        />
      )
    } else {
      return <NotFound />
    }
  }
  /**------------------------------------------Render functions------------------------------------------*/

  /**------------------------------------------Componant render return ------------------------------------------*/

  return (
    <Container>
      {renderSearchBar()}
      {renderExtraButtons()}
      {count && (
        <>
          <Text
            primaryText
            text={
              characterName && filter.name
                ? `Found ${count} characters from ${characterName}`
                : `Total Count is ${count}`
            }
          />
          <Text
            primaryText
            text={
              filter.all
                ? staticText.all
                : filter.species
                ? staticText.species
                : filter.name
                ? staticText.name
                : ''
            }
          />
        </>
      )}
      {showLoader && page === firstPage ? (
        <Loader />
      ) : (
        <>
          {renderCharacters()}
          {!(showLoader && page === 1) && page < totalPages && renderShowMore()}
          {!showLoader && episodesModalState && renderModal()}
        </>
      )}
    </Container>
  )
  /**------------------------------------------Componant render return------------------------------------------*/
}
export default HomeContainer
