import { constants } from 'utils'

export const initialState = {
  characters: {
    status: '',
    info: {},
    results: []
  },
  page: 1,
  characterName: '',
  episodes: {
    status: '',
    results: []
  },
  filter: { all: false, species: false, name: false }
}
