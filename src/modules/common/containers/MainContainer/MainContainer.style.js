import styled, { css, createGlobalStyle } from 'styled-components'

export const AppContainer = styled.div`
  background: #ffffff;
  width: 100%;
  height: 100%;
  box-sizing: content-box;
`
const font = () => css`
  @font-face {
    font-family: ${'family'};
`
export const GlobalStyle = createGlobalStyle`
  ${font()}
    body {
      background-color: #ffffff;
    }
    
`
