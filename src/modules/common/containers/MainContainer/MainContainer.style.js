import styled, { createGlobalStyle } from 'styled-components'

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: content-box;
`

export const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
    font-family: 'Lato', sans-serif;
  }
    body {
      background-color: #141414;
    }
    
`
