import { Form } from 'components/form';
import { InputText } from 'components/input';
import Button from 'react-bootstrap/Button';

const FormManual = () =>

  <Form className='form mt-3'>

    <div className="mb-3">
      <InputText
        label='Check ID'
        name='fn'
        placeholder='Enter check ID'
        role='formManualCheckId'
      />
    </div>

    <div className="mb-3">
      <InputText
        label='Date'
        name='date'
        mask='date'
        placeholder='Enter date'
        role='formManualDate'
      />
    </div>

    <div className="mb-3">
      <InputText
        label='Time'
        name='time'
        mask='time'
        placeholder='Enter time'
        role='formManualTime'
      />
    </div>

    <div className="mb-3">
      <InputText
        label='Price'
        name='price'
        mask='price'
        placeholder='Enter price'
        role='formManualPrice'
      />
    </div>

    <Button variant="primary mt-3 w-100" type="submit">Submit</Button>

  </Form>

export default FormManual;