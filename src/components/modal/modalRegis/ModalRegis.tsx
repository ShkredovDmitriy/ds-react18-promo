import React, { FC } from 'react'
import ModalBasic from '../modal';
import type { RootState } from 'app/store';
import { action, useDsp, useSlc } from 'app/store';
import { WrapperRegis } from 'app/services';

const ModalRegis: FC = () => {
  const dispatch = useDsp()
  return (
    <ModalBasic
      show={useSlc((state: RootState) => state.mRegis)}
      onHide={() => dispatch(action.mRegisHide())}
      title="Registration"
    >
      <WrapperRegis />
    </ModalBasic>
  )
}

export default ModalRegis;
