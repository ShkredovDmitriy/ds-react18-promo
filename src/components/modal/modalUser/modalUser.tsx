import React, { FC } from 'react'
import ModalBasic from '../modal';
import type { RootState } from 'app/store';
import { action, useDsp, useSlc } from 'app/store';
import { FormUser } from 'components/form';

type props = {}

const ModalUser: FC<props> = (props) => {
  const dispatch = useDsp()
  return (
    <ModalBasic
      show={useSlc((state: RootState) => state.mUser)}
      onHide={() => dispatch(action.mUserHide())}
    >
      <>
        <div className="modal__header">
          <div className="modal__title">Change user data</div>
        </div>
        <div className="modal__body">
          <FormUser/>
        </div>
      </>
    </ModalBasic>
  )
}

export default ModalUser;
