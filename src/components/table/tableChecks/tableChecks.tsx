import React from 'react'
import Table from 'react-bootstrap/Table';

export const TableChecks = (props: any) =>
  <Table
    className='table--checks'
    bordered
  >
    <thead>
      <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Check ID</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        props.data.map((check: any, i: number) => {
          return (
            <tr key={i}>
              <td data-label="Date:">{check.date}</td>
              <td data-label="Time:">{check.time}</td>
              <td data-label="Check ID:">{check.code}</td>
              <td data-label="Price:">${check.price}</td>
              <td data-label="Status:">{check.status}</td>
            </tr>
          )
        })
      }
    </tbody>
  </Table>