import React, { FC } from 'react';
import ModalBasic from '../modal';
import type { RootState } from 'app/store';
import { action, useDsp, useSlc } from 'app/store';

const ModalInfo: FC = () => {
  const dispatch = useDsp();
  const data = useSlc((state: RootState) => state.mInfoData)
  return (
    <ModalBasic
      show={useSlc((state: RootState) => state.mInfo)}
      onHide={() => dispatch(action.mInfoHide())}
      title={data.title}
    >
      {data.message}
    </ModalBasic>
  )
}

export default ModalInfo;
