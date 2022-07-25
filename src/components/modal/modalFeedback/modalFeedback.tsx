import React, { FC } from 'react'
import ModalBasic from '../modal';
import { action, useDsp, useSlc, RootState } from 'app/store';
import { WrapperFeedback } from 'app/services';

const ModalFeedback: FC = () => {
  const dispatch = useDsp();
  return (
    <ModalBasic
      show={useSlc((state: RootState) => state.mFeedback)}
      onHide={() => dispatch(action.mFeedbackHide())}
      title="Feedback"
    >
      <WrapperFeedback/>
    </ModalBasic>
  )
}

export default ModalFeedback;
