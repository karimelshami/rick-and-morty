import styled from 'styled-components'

export const CustomText = styled.span`
  padding: 5px;
  ${props => props.extendStyle || ''};
  ${props =>
    props &&
    `
        margin: ${props.margin};
        text-align:${props.textAlign};
        ${props.mainText &&
          `
        font-size: 18px;
        color: ${props.theme.main};
        font-weight: 700;
        font-style:italic;
        display:block;
        ${props.theme.media.tablet`
        font-size:16px;
        `}
        ${props.theme.media.phone`
        font-size:15px;
        `}`}
        ${props.primaryText &&
          `
        font-size: 18px;
        color: ${props.theme.primary};
        font-weight: 700;
        display:block;
        ${props.theme.media.tablet`
        font-size:16px;
        `}
        ${props.theme.media.phone`
        font-size:15px;
        `}`}
        ${props.secondaryText &&
          `
        font-size: 14px;
        color: ${props.theme.main};
        font-weight: 400;
        display:block;
        ${props.theme.media.tablet`
        font-size:13px;
        `}
        ${props.theme.media.phone`
        font-size:12px;
        `}`}
`}
`
