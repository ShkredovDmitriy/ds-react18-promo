import React, { FC } from 'react';
import { Field, ErrorMessage, BSform } from 'components/form';

type props = {
  label?: string,
  name: string,
  placeholder: string,
  options: any[],
  role?: string,
}

const Select: FC<props> = (props) => {
  console.log("props", props)
  return (
    <Field name={props.name}>
      {
        ({field}: any) => (
          <BSform.Group className="" controlId="formRegisEmail">
            { props.label &&
              <BSform.Label>{props.label}</BSform.Label>
            }
            <BSform.Select
              aria-label={props.placeholder}
              {...field}
            >
              <option value="">{props.placeholder}</option>
              {
                props.options.map((option: any, i: number) => {
                  return(
                    <option
                      key={i}
                      value={option.value}
                    >
                      {option.title}
                    </option>
                  )
                })
              }
            </BSform.Select>
            <ErrorMessage name={props.name} component="div">
              { msg => <div className='input__error-text'>{msg}</div> }
            </ErrorMessage>
          </BSform.Group>
        )
      }
    </Field>
  )
}

export default Select;