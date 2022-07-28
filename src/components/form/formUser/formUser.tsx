import { Form } from 'components/form';
import { InputText } from 'components/input';
import Button from 'react-bootstrap/Button';

export const FormUser = () =>

  <Form className='form w-100 mt-3'>

    <div className="mb-3">
      <InputText
        label='Name'
        name='name'
        placeholder='Enter your name'
        role='formUserName'
      />
    </div>

    <div className="mb-3">
      <InputText
        label='Lastname'
        name='lastname'
        placeholder='Enter your lastname'
        role='formUserLastname'
      />
    </div>

    <Button variant="primary mt-3 w-100" type="submit">Submit</Button>

  </Form>
