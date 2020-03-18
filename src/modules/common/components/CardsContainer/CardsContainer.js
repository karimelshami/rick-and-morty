import React from 'react'
import Card from 'modules/common/components/Card'
import { characterStatus, characterGender } from './CardsContainer.constants'

import { CardsWrapper } from './CardsContainer.style'
import PropTypes from 'prop-types'

const CardsContainer = props => {
  const { characters, viewEpisodes } = props
  return (
    <CardsWrapper>
      {characters &&
        characters.results.map((character, index) => {
          return (
            <Card
              key={index}
              img={character.image}
              statusImg={characterStatus[character.status]}
              status={character.status}
              gender={characterGender[character.gender]}
              species={character.species}
              location={character.location.name}
              origin={character.origin.name}
              name={character.name}
              buttonText={`View Episodes`}
              handleClick={() =>
                viewEpisodes(character.episode, character.name)
              }
            />
          )
        })}
    </CardsWrapper>
  )
}
CardsContainer.propTypes = {
  viewEpisodes: PropTypes.func,
  characters: PropTypes.object
}

export default CardsContainer
