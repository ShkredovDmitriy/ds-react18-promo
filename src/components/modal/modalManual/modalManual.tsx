import React, { FC } from 'react'
import ModalBasic from '../modal';
import type { RootState } from 'app/store';
import { action, useDsp, useSlc } from 'app/store';
import { FormManual } from 'components/form';

type props = {}

const ModalManual: FC<props> = (props) => {
  const dispatch = useDsp();
  return (
    <ModalBasic
      show={useSlc((state: RootState) => state.mManual)}
      onHide={() => dispatch(action.mManualHide())}
    >
      <>
        <div className="modal__header">
          <div className="modal__title">Manual input</div>
        </div>
        <div className="modal__body">
          <FormManual/>
        </div>
      </>
    </ModalBasic>
  )
}

export default ModalManual;
