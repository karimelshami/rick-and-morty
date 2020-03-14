import styled from 'styled-components'

export const CustomText = styled.span`
  ${props =>
    props &&
    `
        font-size: ${props.size};
        color: ${props.color} ;
        font-weight: ${props.fontWeight}
        margin: ${props.margin};
        cursor: ${props.cursor};
        letter-spacing: ${props.letterSpacing};
        font-style: ${props.fontStyle};
        text-align:${props.textAlign};
`}
`
