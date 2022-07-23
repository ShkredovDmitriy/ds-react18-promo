import React from 'react'
import { Form } from 'components/form';
import { InputText, Select } from 'components/input';
import Button from 'react-bootstrap/Button';

export const FormWinners = (props: any) =>
  <Form className='form form--winners d-flex align-items-end'>

    <div className="mb-3">
      <InputText
        name="phone"
        mask="phone"
        label="Phone"
        placeholder="+1(777)888-99-88"
      />
    </div>

    <div className="mb-3 ms-3">
      <Select
        name="week"
        label="Period"
        placeholder="All periods"
        options={props.periods}
      />
    </div>

    <div className="mb-3 ms-3">
      <Button variant="primary" type="submit">Find</Button>
    </div>

  </Form>
