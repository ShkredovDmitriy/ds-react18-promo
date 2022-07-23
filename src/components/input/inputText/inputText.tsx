import React, { FC } from 'react';
import { IMaskInput, maskSelector } from 'app/utils/imask';
import { Field, ErrorMessage, BSform } from 'components/form';

type props = {
  label?: string,
  name: string,
  placeholder: string,
  role?: string,
  mask?: string | undefined,
}

const InputText: FC<props> = (props) => {
  return (
    <Field name={props.name}>
      {
        ({field}: any) => (
          <BSform.Group className="" controlId="formRegisEmail">
            { props.label &&
              <BSform.Label>{props.label}</BSform.Label>
            }
            {
              !props.mask &&
              <BSform.Control
                name={props.name}
                type="text"
                placeholder={props.placeholder}
                role={props.role}
                {...field}
              />
            }
            {
              props.mask &&
              <IMaskInput
                className="form-control"
                name={props.name}
                type="text"
                placeholder={props.placeholder}
                role={props.role}
                {...maskSelector(props.mask)}
                {...field}
              />
            }
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