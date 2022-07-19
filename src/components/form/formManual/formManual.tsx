import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

type props = {}

const FormRegis: FC<props> = (props) => {

  return (
    <Form className='form w-100 mt-3'>
      <Form.Group className="mb-3" controlId="formRegisLastname">
        <Form.Label>Check ID</Form.Label>
        <Form.Control type="text" placeholder="Enter check ID" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRegisEmail">
        <Form.Label>Date</Form.Label>
        <Form.Control type="text" placeholder="Enter date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRegisPassword">
        <Form.Label>Summ</Form.Label>
        <Form.Control type="text" placeholder="Enter summ" />
      </Form.Group>

      <Button variant="primary mt-3 w-100" type="submit">Submit</Button>
    </Form>
  )
}

export default FormRegis;
