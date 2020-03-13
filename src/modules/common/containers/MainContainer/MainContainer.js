import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppContainer, GlobalStyle } from './MainContainer.style'
import Routes from 'routes'
import { store } from 'redux/store'
import Theme from 'utils/theme'

function MainContainer() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={Theme}>
          <AppContainer>
            <GlobalStyle />
            <Routes />
          </AppContainer>
        </ThemeProvider>
      </Router>
    </Provider>
  )
}

export default MainContainer
