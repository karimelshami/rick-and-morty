import React from 'react'
import {
  CardTitle,
  CardCaption,
  Img,
  Button,
  Card,
  CardContent,
  CardTitleAndImageWrapper,
  CaptionWrapper,
} from './Card.styles'
const CustomCard = props => {
  const {
    title,
    caption,
    buttonText,
    img,
  } = props
  return (
    <Card primary>
      <CardTitleAndImageWrapper>
        <Img src={img} />
        <CardTitle custom>{title}</CardTitle>
      </CardTitleAndImageWrapper>
      <CardContent>
        <CaptionWrapper>
          <CardCaption>{caption}</CardCaption>
        </CaptionWrapper>
        <Button>{buttonText}</Button>
      </CardContent>
    </Card>
  )
}
export default CustomCard
