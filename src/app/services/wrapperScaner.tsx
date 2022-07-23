import { useState } from 'react';
import { action, useDsp, useSlc, RootState } from 'app/store';
import  QrReader  from 'react-qr-reader';

const WrapperScaner = () => {
  const dispatch = useDsp();
  const [qrCode, setQrCode] = useState("")

  const scanSuccess = (qrData: any) => {
    if(qrCode) {
      dispatch(action.mScanerHide());
      dispatch(action.mInfoShow());
      dispatch(action.mInfoSetData({
        title: "Thank you",
        message: "Check was upload successfuly. Now your check is being moderated. If your check is good you will participate in the draw. We wish you good luck."
      }));
    } else {
      setQrCode(qrData);
    }
  }

  const scanUnsuccess = (error: any) => {
    setTimeout(()=> {
      dispatch(action.mScanerHide());
      dispatch(action.mInfoShow());
      dispatch(action.mInfoSetData({
        title: "Scaner error",
        message: "Please use Google Chrome or Safari."
      }));
    }, 2000)
  }

  return (
    <>
      {
        useSlc((state: RootState) => state.mScaner) &&
        <QrReader
          facingMode='environment'
          onError={scanUnsuccess}
          onScan={scanSuccess}
          className="qr-scaner__container"
        />
      }
    </>
  )
}

export default WrapperScaner;








