import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import HomeContainer from './HomeContainer'
import { commonActionTypes, commonActions } from 'modules/common'
import '@testing-library/jest-dom/extend-expect'
import mockAxios from 'axios'
import configureStore from 'app/redux/store';

const store = configureStore()

const withReduxStore = ui => <Provider store={store}>{ui}</Provider>

// to run the test cases run npm run test

describe(' testing async actions', () => {
  afterEach(() => {})
  it('Cereates GET_ALL_CHARACTERS_SUCCESS when on api success', () => {
    mockAxios.get('/getAllCharacters')
    const expectedActions = [
      { type: commonActionTypes.GET_ALL_CHARACTERS },
      { type: commonActionTypes.GET_ALL_CHARACTERS_SUCCESS, body: {} }
    ]
    return store.dispatch(commonActions.getAllCharacters()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

// describe('Home Container', () => {
//   beforeAll(() => {
//     const { queryByTestId, queryAllByTestId, queryByText } = render(
//       <HomeContainer />
//     )
//   })
//   afterAll(cleanup)
//   it('Should dispatch getAllCharachters action on first load', () => {
//     // const { getByTestId, getByText } = render(<HomeContainer />)
//     // fireEvent.click(getByTestId('convert-button'))
//     // expect(getByText("Can't be blank")).toBeInTheDocument()
//   })

//   it('Should dispatch getCharacterByName action when pressing search button', () => {
//     // const { getByPlaceholderText, getByTestId, getByText } = render(
//     //   <HomeContainer />
//     // )

//     // fireEvent.change(getByPlaceholderText('Type numbers'), {
//     //   target: { value: '12345' }
//     // })
//     fireEvent.click(getByTestId('search--button'))

//     // expect(getByText(/You should only type numbers/)).toBeInTheDocument()
//   })

//   it('Should dispatch getCharacterBySpices action when pressing reccomend button', () => {
//     // const { getByPlaceholderText, getByTestId, getByText } = render(
//     //   <HomeContainer />
//     // )

//     // fireEvent.change(getByPlaceholderText('Type numbers'), {
//     //   target: { value: '-456' }
//     // })
//     fireEvent.click(getByTestId('reccomend--button'))

//     // expect(getByText(/You should only type numbers/)).toBeInTheDocument()
//   })

//   it('Should dispatch getAllCharachters action when pressing reset button', () => {
//     //     const { getByPlaceholderText, getByTestId, getByText } = render(
//     //       <HomeContainer />
//     //     )

//     //     fireEvent.change(getByPlaceholderText('Type numbers'), {
//     //       target: { value: '1564' }
//     //     })
//     fireEvent.click(getByTestId('reset--button'))

//     //     expect(getByText(/MDLXIV/)).toBeInTheDocument()
//   })
//   it('Should dispatch getEpisodes action when pressing show episodes', () => {
//     //     const { getByPlaceholderText, getByTestId, getByText } = render(
//     //       <HomeContainer />
//     //     )
//     //     fireEvent.change(getByPlaceholderText('Type numbers'), {
//     //       target: { value: '1564' }
//     //     })
//     // fireEvent.click(getByTestId('show-episodes--button'))
//     //     expect(getByText(/MDLXIV/)).toBeInTheDocument()
//   })
//   it('Should increment page by one when pressing show more', () => {
//     //     const { getByPlaceholderText, getByTestId, getByText } = render(
//     //       <HomeContainer />
//     //     )

//     //     fireEvent.change(getByPlaceholderText('Type numbers'), {
//     //       target: { value: '1564' }
//     //     })
//     fireEvent.click(getByTestId('show-more--button'))

//     //     expect(getByText(/MDLXIV/)).toBeInTheDocument()
//   })
// })
