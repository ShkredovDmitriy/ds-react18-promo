import React, { FC } from 'react';
import ModalBasic from '../modal';
import type { RootState } from 'app/store';
import { action, useDsp, useSlc } from 'app/store';
import { WrapperLogin } from 'app/services';

const ModalLogin: FC = () => {
  const dispatch = useDsp();
  const switchToRegisModal = () => {
    dispatch(action.mLoginHide());
    dispatch(action.mRegisShow());
  }
  const switchToRecovModal = () => {
    dispatch(action.mLoginHide());
    dispatch(action.mRecovShow());
  }
  return (
    <ModalBasic
      show={useSlc((state: RootState) => state.mLogin)}
      onHide={() => dispatch(action.mLoginHide())}
      title="login"
    >
      <>
        <WrapperLogin/>
        <button
          className="button button--link"
          onClick={switchToRegisModal}
        >
          Create new account
        </button>
        <button
          className="button button--link"
          onClick={switchToRecovModal}
        >
          Forgot password
        </button>
      </>
    </ModalBasic>
  )
}

export default ModalLogin;
