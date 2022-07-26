import { Field, ErrorMessage, BSform } from 'components/form';

export const Select = (props: props) => {
  return (
    <Field name={props.name}>
      {
        ({field}: any) => (
          <BSform.Group className="" controlId="formRegisEmail">
            {
              props.label && <BSform.Label>{props.label}</BSform.Label>
            }
            <BSform.Select
              aria-label={props.placeholder}
              {...field}
              onChange={(e: any) => {
                field.onChange(e)
                if(props.onChange) props.onChange(e)
              }}
            >
              <option value="">{props.placeholder}</option>
              {
                props.options.map(({value, title}: any, i: number) => {
                  return <option value={value} key={i}>{title}</option>
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

type props = {
  label?: string,
  name: string,
  placeholder: string,
  options: any[],
  role?: string,
  onChange?: any,
}
