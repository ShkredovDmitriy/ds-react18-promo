import React, { FC } from 'react'
import { Field, ErrorMessage, BSform } from 'components/form';

type props = {
  label?: string,
  name: string,
  placeholder: string,
  role?: string
}

const InputText: FC<props> = (props) => {
  return (
    <Field name={props.name}>
      {
        ({field}: any) => (
          <BSform.Group className="" controlId="formRegisEmail">
            {props.label && <BSform.Label>{props.label}</BSform.Label>}
            <BSform.Control
              name={props.name}
              type="text"
              placeholder="Enter email"
              role={props.role}
              {...field}
            />
            <ErrorMessage name={props.name} component="div">
              { msg => <div className='input__error-text'>{msg}</div> }
            </ErrorMessage>
          </BSform.Group>
        )
      }
    </Field>
  )
}

export default InputText;