import ModalBasic from '../modal';
import type { RootState } from 'app/store';
import { action, useDsp, useSlc } from 'app/store';
import { WrapperUser } from 'app/services';

export const ModalUser = () => {
  const dispatch = useDsp()
  return (
    <ModalBasic
      show={useSlc((state: RootState) => state.mUser)}
      onHide={() => dispatch(action.mUserHide())}
      title="Change user data"
    >
      <WrapperUser/>
    </ModalBasic>
  )
}
