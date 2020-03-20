import React from 'react'
import {
  ModalContainer,
  ModelActions,
  CloseButton,
  MainContainer
} from './Modal.style'
import PropTypes from 'prop-types'
import Text from 'modules/common/components/Text'
import Close from 'assets/close.png'
const Modal = props => {
  const { onClose, content, title } = props
  return (
    <ModalContainer>
      <ModelActions>
        <CloseButton
          onClick={() => onClose()}
          title="close"
          src={Close}
          alt="close button"
        />
      </ModelActions>
      <MainContainer>
        <Text primaryText text={title} />
        {content}
      </MainContainer>
    </ModalContainer>
  )
}
Modal.propTypes = {
  content: PropTypes.node,
  onClose: PropTypes.func
}
export default Modal
