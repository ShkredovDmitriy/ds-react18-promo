import React, { FC } from 'react'
import ModalBasic from '../modal';
import type { RootState } from 'app/store';
import { action, useDsp, useSlc } from 'app/store';
import { FormRegis } from 'components/form';

type props = {}

const ModalRegis: FC<props> = (props) => {
  const dispatch = useDsp()
  return (
    <ModalBasic
      show={useSlc((state: RootState) => state.mRegis)}
      onHide={() => dispatch(action.mRegisHide())}
    >
      <>
        <div className="modal__header">
          <div className="modal__title">Registration</div>
        </div>
        <div className="modal__body">
          <FormRegis/>
        </div>
      </>
    </ModalBasic>
  )
}

export default ModalRegis;
