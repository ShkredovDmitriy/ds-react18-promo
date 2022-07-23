import React, { FC } from 'react'
import ModalBasic from '../modal';
import { action, useDsp, useSlc, RootState } from 'app/store';
import { WrapperManual } from 'app/services';

const ModalManual: FC = () => {
  const dispatch = useDsp();
  return (
    <ModalBasic
      show={useSlc((state: RootState) => state.mManual)}
      onHide={() => dispatch(action.mManualHide())}
      title="Manual input"
    >
      <WrapperManual/>
    </ModalBasic>
  )
}

export default ModalManual;
