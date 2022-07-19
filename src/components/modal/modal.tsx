import React, { FC } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ButtonModalClose } from 'elements/button';

type props = {
  show: boolean,
  onHide: any,
  children: any
}

const ModalBasic: FC<props> = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      contentClassName='modal--basic'
      centered
    >
      <>
        <ButtonModalClose onClick={props.onHide}/>
        {props.children}
      </>
    </Modal>
  );
}

export default ModalBasic;