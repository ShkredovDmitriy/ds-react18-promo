import React, { useState, FC } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

type props = {}

const FormUpload: FC<props> = (props) => {
  const [isDraggable, setDraggable] = useState(false)
  const [img, setImg] = useState('')

  const addFilledClass = () => img ? 'filled' : '';
  const addDraggClass = () => isDraggable ? 'draggable' : ''

  return (
    <Form className='form w-100 mt-3'>

      <div className="mb-3">
        <label className={`input-file__label ${addDraggClass()} ${addFilledClass()}`}
          onDragEnter={() => setDraggable(true)}
          onDragOver={() => setDraggable(true)}
          onDragLeave ={() => setDraggable(false)}
          onDrop ={() => setDraggable(false)}
        >
          <span>Drag file here</span>
          <span>or click</span>
          <span className="input-file__button">choose file</span>
          <input
            type="file"
            id="formUploadFile"
            placeholder="Upload check photo"
            onInput={(e: any) => {
              console.log('onInput ', e)

              const oFReader = new FileReader();
              oFReader.readAsDataURL(e.target.files[0]);
                oFReader.onload = (oFREvent: any) => setImg(oFREvent.target.result);
            }}
          />
          {img && <img
            src={img}
            className="input-file__preview"
            alt=""
          />}

        </label>
      </div>

      <Button variant="primary mt-3 w-100" type="submit">Submit</Button>
    </Form>
  )
}

export default FormUpload;
