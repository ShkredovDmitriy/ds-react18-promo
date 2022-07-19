import React, { FC } from 'react';
import ModalBasic from '../modal';
import type { RootState } from 'app/store';
import { action, useDsp, useSlc } from 'app/store';
import { FormUpload } from 'components/form';

type props = {}

const ModalUpload: FC<props> = (props) => {
  const dispatch = useDsp()
  return (
    <ModalBasic
      show={useSlc((state: RootState) => state.mUpload)}
      onHide={() => dispatch(action.mUploadHide())}
    >
      <>
        <div className="modal__header">
          <div className="modal__title">Upload Photo</div>
        </div>
        <div className="modal__body">
          <FormUpload/>
        </div>
      </>
    </ModalBasic>
  )
}

export default ModalUpload;
