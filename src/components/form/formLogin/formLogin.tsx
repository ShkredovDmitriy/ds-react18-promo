import React, { FC } from 'react';
import { formLoginInitial, formLoginSchema } from 'app/schemas';
import { Formik, Form } from 'components/form';
import { apiLogin } from 'app/api';
import { action, useDsp } from 'app/store';
import { InputText } from 'elements/input';
import Button from 'react-bootstrap/Button';

const FormLogin: FC = () => {
  const dispatch = useDsp()
  const apiSuccess = ({ user }: any) => {
    dispatch(action.userSet({
      isAuth: true,
      email: user.email,
      token: user.accessToken
    }));
    dispatch(action.mLoginHide());
  }
  const apiUnsuccess = (err: any) => {
    console.log("APIUNSUCCESS DATA", err)
  }
  return (
    <Formik
      initialValues={formLoginInitial}
      validationSchema={formLoginSchema}
      onSubmit={(params, {setErrors}) => apiLogin(params, apiSuccess, apiUnsuccess)}
    >
      <Form className='form'>

        <div className="mb-3">
          <InputText
            label='Email'
            name='email'
            placeholder='Enter email'
            role='formLoginEmail'
          />
        </div>

        <div className="mb-3">
          <InputText
            label='Password'
            name='password'
            placeholder='Enter password'
            role='formLoginPassword'
          />
        </div>

        <Button
          variant="primary mt-3 w-100"
          type="submit"
          role='formLoginButtonSubmit'
        >
          Submit
        </Button>
      </Form>
    </Formik>
  )
}

export default FormLogin;
