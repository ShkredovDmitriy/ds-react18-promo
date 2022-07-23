import ModalBasic from '../modal';
import { action, useDsp, useSlc, RootState} from 'app/store';
import { WrapperScaner } from 'app/services';

const ModalLogin = () => {
  const dispatch = useDsp();
  return (
    <ModalBasic
      show={useSlc((state: RootState) => state.mScaner)}
      onHide={() => dispatch(action.mScanerHide())}
      title="Scan your QR code"
    >
      <WrapperScaner/>
    </ModalBasic>
  )
}

export default ModalLogin;
