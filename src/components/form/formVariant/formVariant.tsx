import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { action, useDsp } from 'app/store';

const FormVariant: FC = () => {
  const dispatch = useDsp();
  const ModalManualShow = () => {
    dispatch(action.mVariantHide())
    dispatch(action.mManualShow())
  }
  const ModalScanerShow = () => {
    dispatch(action.mVariantHide())
    dispatch(action.mScanerShow())
  }
  const ModalUploadShow = () => {
    dispatch(action.mVariantHide())
    dispatch(action.mUploadShow())
  }
  return (
    <Form className='form w-100 mt-3'>
      <Form.Group className="mb-4" controlId="formRegisEmail">
        <Button
          variant="primary w-100"
          type="button"
          onClick={() => ModalUploadShow()}
        >
          Upload QR photo
        </Button>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formRegisPassword">
        <Button
          variant="primary w-100"
          type="button"
          onClick={() => ModalScanerShow()}
        >
          Scan QR code
        </Button>
      </Form.Group>

      <Form.Group className="" controlId="formRegisCheckbox">
        <Button
          variant="primary w-100"
          type="button"
          onClick={() => ModalManualShow()}
        >
          Input check data
        </Button>
      </Form.Group>
    </Form>
  )
}

export default FormVariant;
