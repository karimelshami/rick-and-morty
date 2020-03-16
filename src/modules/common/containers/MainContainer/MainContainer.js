import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppContainer, GlobalStyle } from './MainContainer.style'
import Header from 'modules/common/components/Header'
import Routes from 'routes'
import Logo from 'assets/Rick_and_Morty_logo.png'
import { store } from 'redux/store'
import { headerItems } from './MainContainer.constants'
import Theme from 'utils/theme'

function MainContainer() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={Theme}>
          <AppContainer>
            <GlobalStyle />
            <Header listItems={headerItems} img={Logo} />
            <Routes />
          </AppContainer>
        </ThemeProvider>
      </Router>
    </Provider>
  )
}

export default MainContainer
