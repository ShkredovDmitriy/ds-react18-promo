import React, { FC } from 'react'
import ModalBasic from 'components/modal/modal';
import type { RootState } from 'app/store';
import { action, useDsp, useSlc } from 'app/store';
import { WrapperRecov } from 'app/services';

type props = {}

const ModalRegistration: FC<props> = (props) => {
  const dispatch = useDsp()
  return (
    <ModalBasic
      show={useSlc((state: RootState) => state.mRecov)}
      onHide={() => dispatch(action.mRecovHide())}
      title="Recovery"
    >
      <WrapperRecov/>
    </ModalBasic>
  )
}

export default ModalRegistration;
