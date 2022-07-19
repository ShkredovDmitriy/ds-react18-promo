import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

type props = {}

const FormUser: FC<props> = (props) => {

  return (
    <Form className='form w-100 mt-3'>
      <Form.Group className="mb-3" controlId="formUserName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formUserLastname">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="text" placeholder="Enter lastname" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formUserEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formUserPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter old password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formUserPasswordNew">
        <Form.Label>New password</Form.Label>
        <Form.Control type="password" placeholder="Enter new password" />
      </Form.Group>

      <Button variant="primary mt-3 w-100" type="submit">Submit</Button>
    </Form>
  )
}

export default FormUser;
