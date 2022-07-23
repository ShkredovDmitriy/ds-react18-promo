import React, { FC } from 'react';
import ModalBasic from '../modal';
import type { RootState } from 'app/store';
import { action, useDsp, useSlc } from 'app/store';
import { FormVariant } from 'components/form';

const ModalLogin: FC = () => {
  const dispatch = useDsp()
  return (
    <ModalBasic
      show={useSlc((state: RootState) => state.mVariant)}
      onHide={() => dispatch(action.mVariantHide())}
      title="Upload variant"
    >
      <FormVariant/>
    </ModalBasic>
  )
}

export default ModalLogin;
