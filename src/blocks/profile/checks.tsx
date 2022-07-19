import React, { FC } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useApiChecks}  from 'app/api';
import { useSlc, RootState } from 'app/store';
import Table from 'react-bootstrap/Table';
import { dtoDate } from 'app/dto';

const Checks: FC = () => {
  useApiChecks()
  const checks = useSlc((state: RootState) => state.checks);
  return (
    <div className="profile__results">
    <Scrollbars
      style={{ height: '100%' }}
      renderTrackVertical={props => <div {...props} className="scrollbars__track-vertical"/>}
      renderThumbVertical={props => <div {...props} className="scrollbars__thumb-vertical"/>}
      renderView={props => <div {...props} className="scrollbars__view"/>}
    >
      <Table bordered>
        <thead>
          <tr>
            <th>Date</th>
            <th>Check id</th>
            <th>Summ</th>
            <th>Prize</th>
          </tr>
        </thead>
        <tbody>
          {checks.map((check: any, i: number) => {
            return (
              <tr key={i}>
                <td>{dtoDate(check.due_on)}</td>
                <td>{check.user_id}</td>
                <td>$1500</td>
                <td>Discont $100</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Scrollbars>
  </div>
  )
}

export default Checks;