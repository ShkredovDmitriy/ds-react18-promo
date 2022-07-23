import React from 'react'
import Table from 'react-bootstrap/Table';

export const TableWinners = (props: any) =>
  <Table
    className='table--winners'
    bordered
  >
    <thead>
      <tr>
        <th>User</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Prize</th>
      </tr>
    </thead>
    <tbody>
      {
        props.data.map((winner: any, i: number) => {
          return (
            <tr key={i}>
              <td data-label="User:">{winner.user}</td>
              <td data-label="Phone:">{winner.phone}</td>
              <td data-label="Email:">{winner.email}</td>
              <td data-label="Prize:">Discont $100</td>
            </tr>
          )
        })
      }
    </tbody>
  </Table>