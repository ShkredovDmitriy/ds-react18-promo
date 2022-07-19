import React, { FC } from 'react'
import ModalBasic from 'components/modal/modal';
import type { RootState } from 'app/store';
import { action, useDsp, useSlc } from 'app/store';
import { FormRecov } from 'components/form';

type props = {}

const ModalRegistration: FC<props> = (props) => {
  const dispatch = useDsp()
  return (
    <ModalBasic
      show={useSlc((state: RootState) => state.mRecov)}
      onHide={() => dispatch(action.mRecovHide())}
    >
      <>
        <div className="modal__header">
          <div className="modal__title">Recovery</div>
        </div>
        <div className="modal__body">
          <FormRecov/>
        </div>
      </>
    </ModalBasic>
  )
}

export default ModalRegistration;
