import React, { FC } from 'react';
import { formRecovInitial, formRecovSchema } from 'app/schemas';
import { Formik, Form, BSform } from 'components/form';
import { InputText } from 'elements/input';
import Button from 'react-bootstrap/Button';

const FormRecov: FC = () => {
  return (
    <Formik
      initialValues={formRecovInitial}
      validationSchema={formRecovSchema}
      onSubmit={(params, {setErrors}) => console.log(params)}
    >
      <Form className='form'>
        <div className="mb-3">
          <BSform.Text className="text-muted">We'll send you new password.</BSform.Text>
        </div>

        <div className="mb-3">
          <InputText
            label='Email'
            name='email'
            placeholder='Enter email'
            role='formRecovEmail'
          />
        </div>

        <Button
          variant="primary mt-3 w-100"
          type="submit"
          role='formRecovButtonSubmit'
        >
          Send
        </Button>
      </Form>
    </Formik>
  )
}

export default FormRecov;
