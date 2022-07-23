import { Form } from 'components/form';
import { InputText } from 'components/input';
import Button from 'react-bootstrap/Button';

const FormRegis = () =>
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

export default FormRegis;
