import React from 'react'
import { runSaga } from 'redux-saga'
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux'
import { commonActions, commonApi } from 'modules/common'
import {
  getAllCharactersSaga,
  getCharacterByNameSaga,
  getCharacterBySpeciesSaga,
  getEpisodesByIdsSaga
} from 'modules/common/saga'
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react'
import HomeContainer from './HomeContainer'
import configureStore from 'app/redux/store'
import '@testing-library/jest-dom/extend-expect';
import Theme from 'utils/theme'

const store = configureStore()

const withReduxStore = ui => <Provider store={store}>{ui}</Provider>


const withThemeProvider = Component => (
  <ThemeProvider theme={Theme}>{Component}</ThemeProvider>
);


// to run the test cases run npm run test
/**------------------------------------------API CALLS------------------------------------------*/

// describe('getAllCharacters Api Request', () => {
//   test('should call api and dispatch success action when sending payload', async () => {
//     const dummyData = {
//       page: 1
//     }
//     const getAllCharachters = jest
//       .spyOn(commonApi, 'getAllCharacters')
//       .mockImplementation(() => Promise.resolve(dummyData))
//     let dispatched = []
//     const result = await runSaga(
//       {
//         dispatch: action => dispatched.push(action)
//       },
//       getAllCharactersSaga
//     )
//     expect(getAllCharachters).toHaveBeenCalledTimes(1)
//     expect(dispatched).toEqual([commonActions.getAllCharactersSuccess()])
//     getAllCharachters.mockClear()
//   })
// })

// describe('getCharacterByName Api Request', () => {
//   test('should call api and dispatch success action', async () => {
//     const dummyData = {
//       name: 'rick',
//       page: 1
//     }
//     const getCharacterByName = jest
//       .spyOn(commonApi, 'getCharacterByName')
//       .mockImplementation(() => Promise.resolve(dummyData))
//     let dispatched = []
//     const result = await runSaga(
//       {
//         dispatch: action => dispatched.push(action)
//       },
//       getCharacterByNameSaga
//     )
//     expect(getCharacterByName).toHaveBeenCalledTimes(1)
//     expect(dispatched).toEqual([commonActions.getCharacterByNameSuccess()])
//     getCharacterByName.mockClear()
//   })
// })

// describe('getCharacterBySpecies Api Request', () => {
//   test('should call api and dispatch success action', async () => {
//     const dummyData = { payload: {} }
//     const getCharacterBySpecies = jest
//       .spyOn(commonApi, 'getCharacterBySpecies')
//       .mockImplementation(() => Promise.resolve(dummyData))
//     let dispatched = []
//     const result = await runSaga(
//       {
//         dispatch: action => dispatched.push(action)
//       },
//       getCharacterBySpeciesSaga
//     )
//     expect(getCharacterBySpecies).toHaveBeenCalledTimes(1)
//     expect(dispatched).toEqual([commonActions.getCharacterBySpeciesSuccess()])
//     getCharacterBySpecies.mockClear()
//   })
// })

// describe('getEpisodesByIds Api Request', () => {
//   test('should call api and dispatch success action', async () => {
//     const dummyData = { payload: 'payload' }
//     const getEpisodesByIds = jest
//       .spyOn(commonApi, 'getEpisodesByIds')
//       .mockImplementation(() => Promise.resolve(dummyData))
//     let dispatched = []
//     const result = await runSaga(
//       {
//         dispatch: action => dispatched.push(action)
//       },
//       getEpisodesByIdsSaga
//     )
//     expect(getEpisodesByIds).toHaveBeenCalledTimes(1)
//     expect(dispatched).toEqual([commonActions.getEpisodesSuccess()])
//     getEpisodesByIds.mockClear()
//   })
// })

/**------------------------------------------API CALLS------------------------------------------*/
/**------------------------------------------Button Actions------------------------------------------*/
describe('Home Container', () => {
  afterEach(cleanup)
  it('checking if reset button views all the characters', async () => {
    let initialReduxStates = jest.requireActual('../../../../redux/initialState');
    initialReduxStates = {
      ...initialReduxStates,
      characters: {
        info: {
          count: 10,
        }
      },
    };
    const { getByTestId, getByText } = render(withReduxStore(withThemeProvider(<HomeContainer />)))
    fireEvent.click(getByTestId('reset--button'))
    // await waitForElement(() => getByText(/Viewing all the characters/));
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
    expect(getByText('Viewing all the characters')).toBeInTheDocument()
    getAllCharachters.mockClear()
  })
  // it('checking if reset button views all the characters', () => {
  //   const { getByTestId, getByText } = render(withReduxStore(<HomeContainer />))
  //   fireEvent.click(getByTestId('reccomend--button'))
  //   expect(
  //     getByText(
  //       'Viewing your reccomended characters based on what you searched for'
  //     )
  //   ).toBeInTheDocument()
  // })

  // it('Should dispatch getCharacterByName action when pressing search button', () => {
  //

  //   // fireEvent.change(getByPlaceholderText('Type numbers'), {
  //   //   target: { value: '12345' }
  //   // })
  //   fireEvent.click(getByTestId('search--button'))

  //   // expect(getByText(/You should only type numbers/)).toBeInTheDocument()
  // })

  // it('Should dispatch getCharacterBySpices action when pressing reccomend button', () => {
  //   // const { getByPlaceholderText, getByTestId, getByText } = render(
  //   //   <HomeContainer />
  //   // )

  //   // fireEvent.change(getByPlaceholderText('Type numbers'), {
  //   //   target: { value: '-456' }
  //   // })
  //   fireEvent.click(getByTestId('reccomend--button'))

  //   // expect(getByText(/You should only type numbers/)).toBeInTheDocument()
  // })

  // it('Should dispatch getAllCharachters action when pressing reset button', () => {
  //   //     const { getByPlaceholderText, getByTestId, getByText } = render(
  //   //       <HomeContainer />
  //   //     )

  //   //     fireEvent.change(getByPlaceholderText('Type numbers'), {
  //   //       target: { value: '1564' }
  //   //     })
  //   fireEvent.click(getByTestId('reset--button'))

  //   //     expect(getByText(/MDLXIV/)).toBeInTheDocument()
  // })
  // it('Should dispatch getEpisodes action when pressing show episodes', () => {
  //   //     const { getByPlaceholderText, getByTestId, getByText } = render(
  //   //       <HomeContainer />
  //   //     )
  //   //     fireEvent.change(getByPlaceholderText('Type numbers'), {
  //   //       target: { value: '1564' }
  //   //     })
  //   // fireEvent.click(getByTestId('show-episodes--button'))
  //   //     expect(getByText(/MDLXIV/)).toBeInTheDocument()
  // })
  // it('Should increment page by one when pressing show more', () => {
  //   //     const { getByPlaceholderText, getByTestId, getByText } = render(
  //   //       <HomeContainer />
  //   //     )

  //   //     fireEvent.change(getByPlaceholderText('Type numbers'), {
  //   //       target: { value: '1564' }
  //   //     })
  //   fireEvent.click(getByTestId('show-more--button'))

  //   //     expect(getByText(/MDLXIV/)).toBeInTheDocument()
  // })
})
/**------------------------------------------Button Actions------------------------------------------*/
