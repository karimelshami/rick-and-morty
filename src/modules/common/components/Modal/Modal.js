import React, { useState } from 'react'
import {
  ModalContainer,
  ModelActions,
  CloseButton,
  ProductImg,
  Input,
  MainContainer
} from './Modal.style'
import { Text } from 'common.style'
import Close from 'assets/close.png'
const Modal = props => {
  const {
    productName,
    productCode,
    price,
    onClose,
    addToCart,
    addedToCart,
    setItemsCount
  } = props

  const handleItemCountChange = event => {
 
  }
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
      
        </MainContainer>
    </ModalContainer>
  )
}
export default Modal
