import React, { useState, useEffect, FC } from 'react';
import { ErrorMessage } from 'components/form';
import { useFormikContext, Formik, Form, Field } from 'formik';

type props = {
  label?: string,
  name: string,
  role?: string,
}

const InputFile: FC<props> = (props) => {
  const formik: any = useFormikContext();
  // const { values, submitForm, validateField } = useFormikContext();
  const [previewArr, setPreviewArr] = useState([]);
  const [isDraggable, setDraggable] = useState(false);
  const addDraggClass = () => isDraggable ? 'draggable' : '';
  const filesEventHandler = (event: any) => {
    const newFiles = [...event.target.files];
    const allFiles = [...formik.values.file, ...newFiles].slice(0, 4)
    formik.setFieldValue('file', allFiles);
  }

  useEffect(() => {
    setPreviewArr([]);
    const tmpArr: any = [];
    formik.values.file.map((file: any) => {
      const objectUrl = URL.createObjectURL(file)
      tmpArr.push(objectUrl)
      setPreviewArr(tmpArr)
    })
    if(formik.values.file.length > 0) formik.validateField('file');
  }, [formik.values.file])

  return (
    <>
      <label className={`input-file__label ${addDraggClass()}`}
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
          name="file"
          multiple
          onChange={filesEventHandler}
        />
      </label>

      <ErrorMessage name={props.name} component="div">
        { msg => <div className='input__error-text'>{msg}</div> }
      </ErrorMessage>

      <div className="input-file__preview-container">
        {
          previewArr.map((imgUrl: string, i: number) => {
            return(
              <div className="input-file__preview-box" key={i}>
                <img className="input-file__preview-image" src={imgUrl} alt=""/>
                <button
                  className="button input-file__button-remove"
                  type="button"
                  onClick={()=> {
                    const arr = formik.values.file.filter((el: any, id: number) => id === i ? false : true )
                    formik.setFieldValue('file', [...arr]);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25z" fill="inherit"></path><g stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M18.637 18.636l12.728 12.728"></path><path d="M18.637 31.364l12.728-12.728"></path></g></svg>
                </button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default InputFile;