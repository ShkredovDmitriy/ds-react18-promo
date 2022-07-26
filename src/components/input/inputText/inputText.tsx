import { IMaskInput, maskSelector } from 'app/utils/imask';
import { Field, ErrorMessage, BSform } from 'components/form';

export const InputText = (props: props) => {
  return (
    <Field name={props.name}>
      {
        ({field}: any) => (
          <BSform.Group className="" controlId="formRegisEmail">
            {
              props.label && <BSform.Label>{props.label}</BSform.Label>
            }
            {
              !props.mask &&
              <BSform.Control
                as={props.as}
                name={props.name}
                type="text"
                placeholder={props.placeholder}
                role={props.role}
                {...field}
                onInput={(e: any) => {
                  field.onChange(e)
                  if(props.onChange) props.onChange(e)
                }}
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
                onInput={(e: any) => {
                  field.onChange(e)
                  if(props.onChange) props.onChange(e)
                }}
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

type props = {
  as?: string,
  label?: string,
  name: string,
  placeholder: string,
  role?: string,
  mask?: string | undefined,
  onChange?: any,
}