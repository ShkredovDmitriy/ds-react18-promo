import { Form } from 'components/form';
import { InputText, Select } from 'components/input';
import Button from 'react-bootstrap/Button';

export const FormFeedback = (props: any) =>

  <Form className='form mt-3'>

    {
      !props.isAuth &&
      <>
        <div className="mb-3">
          <InputText
            label='Name'
            name='name'
            placeholder='Enter Name'
            role='formFeedbackName'
          />
        </div>

        <div className="mb-3">
          <InputText
            label='Lastname'
            name='lastname'
            placeholder='Enter Lastname'
            role='formFeedbackLastname'
          />
        </div>

        <div className="mb-3">
          <InputText
            label='Email'
            name='email'
            placeholder='Enter Email'
            role='formFeedbackEmail'
          />
        </div>
      </>
    }

    <div className="mb-3">
      <Select
        name="theme"
        label="Theme"
        placeholder="Select theme"
        options={props.theme}
      />
    </div>

    <div className="mb-3">
      <InputText
        as='textarea'
        label='Message'
        name='message'
        placeholder='Enter Message'
        role='formFeedbackTime'
      />
    </div>

    <Button variant="primary mt-3 w-100" type="submit">Submit</Button>

  </Form>