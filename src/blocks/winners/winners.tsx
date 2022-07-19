import React, { useEffect, FC }  from 'react';
import { useSlc, RootState } from 'app/store';
import { useApiWinners }  from 'app/api';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { dtoDate } from 'app/dto';

const  Winners: any = () => {
  useApiWinners()
  const winners = useSlc((state: RootState) => state.winners);
    return (
      <div className="winners">
        <div className="winners__wrapper">
          <div className="winners__results">
            <Form className='form d-flex align-items-end'>
              <Form.Group className="mb-3" controlId="formRegisEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="string" placeholder="+2(888)741-88-74" />
              </Form.Group>

              <Form.Group className="mb-3 ms-3" controlId="formRegisPassword">
                <Form.Label>Action period</Form.Label>
                <Form.Control type="string" placeholder="Select period" />
              </Form.Group>

              <Form.Group className="mb-3 ms-3" controlId="formRegisPassword">
                <Button variant="primary" type="reset">Reset</Button>
              </Form.Group>

            </Form>
            <Scrollbars
              style={{ height: '100%' }}
              renderTrackVertical={props => <div {...props} className="scrollbars__track-vertical"/>}
              renderThumbVertical={props => <div {...props} className="scrollbars__thumb-vertical"/>}
              renderView={props => <div {...props} className="scrollbars__view"/>}
            >
              <Table bordered>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Prize</th>
                  </tr>
                </thead>
                <tbody>
                  {winners.map((check: any, i: number) => {
                    return (
                      <tr key={i}>
                        <td>{check.name}</td>
                        <td>{check.phone}</td>
                        <td>{check.email}</td>
                        <td>Discont $100</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </Scrollbars>
          </div>
        </div>
      </div>
    )
}

export default Winners;
