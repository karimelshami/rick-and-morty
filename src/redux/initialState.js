
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
  filter: { all: true, species: false, name: false },
}
