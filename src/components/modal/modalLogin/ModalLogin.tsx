import React, { FC } from 'react';
import ModalBasic from '../modal';
import type { RootState } from 'app/store';
import { action, useDsp, useSlc } from 'app/store';
import { FormLogin } from 'components/form';

type props = {}

const ModalLogin: FC<props> = (props) => {
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
    >
      <>
        <div className="modal__header">
          <div className="modal__title">Login</div>
        </div>
        <div className="modal__body">
          <FormLogin/>
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
        </div>
      </>
    </ModalBasic>
  )
}

export default ModalLogin;
