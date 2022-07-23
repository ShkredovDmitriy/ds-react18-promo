import { Form } from 'components/form';
import { InputText } from 'components/input';
import Button from 'react-bootstrap/Button';

const FormLogin = () => {
  return (
    <Form className='form mt-3'>

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
  )
}

export default FormLogin;
