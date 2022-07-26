import { Form } from 'components/form';
import { InputText, Select } from 'components/input';

export const FormWinners = (props: any) =>
  <Form className='form form--winners d-flex align-items-end'>

    <div className="mb-3">
      <InputText
        name="phone"
        mask="phone"
        label="Phone"
        placeholder="+1(777)888-99-88"
        onChange={props.onInputChange}
      />
    </div>

    <div className="mb-3 ms-3">
      <Select
        name="week"
        label="Period"
        placeholder="All periods"
        options={props.periods}
        onChange={props.onSelectChange}
      />
    </div>

  </Form>