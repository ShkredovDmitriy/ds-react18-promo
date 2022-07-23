import React, { FC } from 'react';
import ModalBasic from '../modal';
import type { RootState } from 'app/store';
import { action, useDsp, useSlc } from 'app/store';
import { WrapperUpload } from 'app/services';

const ModalUpload: FC = () => {
  const dispatch = useDsp()
  return (
    <ModalBasic
      show={useSlc((state: RootState) => state.mUpload)}
      onHide={() => dispatch(action.mUploadHide())}
      title="Upload Photo"
    >
      <WrapperUpload/>
    </ModalBasic>
  )
}

export default ModalUpload;
