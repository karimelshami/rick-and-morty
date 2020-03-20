import React from 'react'
import Text from 'modules/common/components/Text'
import Button from 'modules/common/components/Button'
import PropTypes from 'prop-types'
import {
  Img,
  Card,
  CardContent,
  CardTitleAndImageWrapper,
  StatusImage,
  extendButtonStyle,
  extendTextStyle
} from './Card.styles'
const CustomCard = props => {
  const {
    buttonText,
    img,
    name,
    status,
    origin,
    location,
    species,
    handleClick,
    statusImg,
    gender
  } = props
  return (
    <Card>
      <CardTitleAndImageWrapper>
        <Img src={img} />
      </CardTitleAndImageWrapper>
      <CardContent>
        <Text
          extendStyle={extendTextStyle}
          mainText
          text={`${name} (${species} ) From`}
        />
        <Text extendStyle={extendTextStyle} primaryText text={` ${origin}  `} />
        <Text
          extendStyle={extendTextStyle}
          primaryText
          text={`Located now in ${location}`}
        />
        <Text
          extendStyle={extendTextStyle}
          primaryText
          text={`${gender} state is ${status}`}
        />
        <StatusImage src={statusImg} alt="" />
      </CardContent>
      <Button
        handleClick={() => handleClick()}
        extendStyle={extendButtonStyle}
        text={buttonText}
      />
    </Card>
  )
}
CustomCard.propTypes = {
  img: PropTypes.string,
  statusImg: PropTypes.string,
  handleClick: PropTypes.func,
  buttonText: PropTypes.string,
  origin: PropTypes.string,
  status: PropTypes.string,
  gender: PropTypes.string,
  species: PropTypes.string,
  location: PropTypes.string
}
export default CustomCard
