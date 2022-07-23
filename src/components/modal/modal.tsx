import React, { FC } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ButtonModalClose } from 'components/button';

type props = {
  show: boolean,
  onHide: any,
  children: any,
  title?: string,
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
        {
          props.title &&
          <div className="modal__header">
            <div className="modal__title">{props.title}</div>
          </div>
        }
        <ButtonModalClose onClick={props.onHide}/>
        <div className="modal__body">
          {props.children}
        </div>
      </>
    </Modal>
  );
}

export default ModalBasic;