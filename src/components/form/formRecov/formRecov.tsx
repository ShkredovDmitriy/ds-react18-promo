import { Form, BSform } from 'components/form';
import { InputText } from 'components/input';
import Button from 'react-bootstrap/Button';

const FormRecov = () => {
  return (
    <Form className='form mt-3'>

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
  )
}

export default FormRecov;
