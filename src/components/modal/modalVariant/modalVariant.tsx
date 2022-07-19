import React, { FC } from 'react';
import ModalBasic from '../modal';
import type { RootState } from 'app/store';
import { action, useDsp, useSlc } from 'app/store';
import { FormVariant } from 'components/form';

type props = {}

const ModalLogin: FC<props> = (props) => {
  const dispatch = useDsp()
  return (
    <ModalBasic
      show={useSlc((state: RootState) => state.mVariant)}
      onHide={() => dispatch(action.mVariantHide())}
    >
      <>
        <div className="modal__header">
          <div className="modal__title">Upload variant</div>
        </div>
        <div className="modal__body">
          <FormVariant/>
        </div>
      </>
    </ModalBasic>
  )
}

export default ModalLogin;
