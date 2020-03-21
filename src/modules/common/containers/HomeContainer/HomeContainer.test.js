import React from 'react'
import { runSaga } from 'redux-saga'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { commonActions, commonApi } from 'modules/common'
import {
  getAllCharactersSaga,
  getCharacterBySpeciesSaga
} from 'modules/common/saga'
import { render, cleanup } from '@testing-library/react'
import HomeContainer from './HomeContainer'
import configureStore from 'app/redux/store'
import '@testing-library/jest-dom/extend-expect'
import Theme from 'utils/theme'

const store = configureStore()

const withReduxStore = ui => <Provider store={store}>{ui}</Provider>

const withThemeProvider = Component => (
  <ThemeProvider theme={Theme}>{Component}</ThemeProvider>
)

// to run the test cases run npm run test
/**------------------------------------------API CALLS------------------------------------------*/

describe('getAllCharacters Api Request', () => {
  test('should call api and dispatch success action when sending payload', async () => {
    const dummyData = {
      page: 1
    }
    const getAllCharachters = jest
      .spyOn(commonApi, 'getAllCharacters')
      .mockImplementation(() => Promise.resolve(dummyData))
    let dispatched = []
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getAllCharactersSaga
    )
    expect(getAllCharachters).toHaveBeenCalledTimes(1)
    expect(dispatched).toEqual([commonActions.getAllCharactersSuccess()])
    getAllCharachters.mockClear()
  })
})

describe('getCharacterBySpecies Api Request', () => {
  test('should call api and dispatch success action', async () => {
    const dummyData = { payload: {} }
    const getCharacterBySpecies = jest
      .spyOn(commonApi, 'getCharacterBySpecies')
      .mockImplementation(() => Promise.resolve(dummyData))
    let dispatched = []
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getCharacterBySpeciesSaga
    )
    expect(getCharacterBySpecies).toHaveBeenCalledTimes(1)
    expect(dispatched).toEqual([commonActions.getCharacterBySpeciesSuccess()])
    getCharacterBySpecies.mockClear()
  })
})
/**------------------------------------------API CALLS------------------------------------------*/
/**------------------------------------------Button Actions------------------------------------------*/
describe('Home Container', () => {
  afterEach(cleanup)
  it('validate that search button is in the DOM', () => {
    const { getByTestId } = render(
      withReduxStore(withThemeProvider(<HomeContainer />))
    )
    expect(getByTestId('search--button')).toBeInTheDocument()
  })
  it('validate that reset button is in the DOM', () => {
    const { getByTestId } = render(
      withReduxStore(withThemeProvider(<HomeContainer />))
    )
    expect(getByTestId('reset--button')).toBeInTheDocument()
  })
  it('validate that recommend button is in the DOM', () => {
    const { getByTestId } = render(
      withReduxStore(withThemeProvider(<HomeContainer />))
    )
    expect(getByTestId('reccomend--button')).toBeInTheDocument()
  })
})

/**------------------------------------------Button Actions------------------------------------------*/
