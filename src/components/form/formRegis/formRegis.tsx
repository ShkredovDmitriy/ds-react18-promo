import React, { FC } from 'react';
import { formRegisInitial, formRegisSchema } from 'app/schemas';
import { Formik, Form } from 'components/form';
import { apiRegis } from 'app/api';
import { action, useDsp } from 'app/store';
import { InputText } from 'elements/input';
import Button from 'react-bootstrap/Button';

const FormRegis: FC = (props) => {
  const dispatch = useDsp()
  const apiSuccess = ({ user }: any) => {
    console.log("APISUCCESS DATA", user)
    dispatch(action.userSet({
      isAuth: true,
      email: user.email,
      token: user.accessToken
    }));
    dispatch(action.mRegisHide());
  }
  const apiUnsuccess = (err: any) => {
    console.log("APIUNSUCCESS DATA", err)
  }
  return (
    <Formik
      initialValues={formRegisInitial}
      validationSchema={formRegisSchema}
      onSubmit={(params, {setErrors}) => apiRegis(params, apiSuccess, apiUnsuccess)}
    >
      <Form className='form mt-3'>

        <div className="mb-3">
          <InputText
            label='Name'
            name='name'
            placeholder='Enter your name'
            role='formRegisName'
          />
        </div>

        <div className="mb-3">
          <InputText
            label='Lastname'
            name='lastname'
            placeholder='Enter your lastname'
            role='formRegisLastname'
          />
        </div>

        <div className="mb-3">
          <InputText
            label='Email'
            name='email'
            placeholder='Enter email'
            role='formRegisEmail'
          />
        </div>

        <div className="mb-3">
          <InputText
            label='Phone'
            name='phone'
            placeholder='Enter phone'
            role='formRegisPhone'
          />
        </div>

        <div className="mb-3">
          <InputText
            label='Password'
            name='password'
            placeholder='Enter password'
            role='formRegisPassword'
          />
        </div>

        <Button
          variant="primary mt-3 w-100"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Formik>
  )
}

export default FormRegis;
