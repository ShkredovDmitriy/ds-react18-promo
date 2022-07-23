import React, { useEffect, useState } from 'react';
import { apiChecks}  from 'app/api';
import { action, useDsp, useSlc, RootState } from 'app/store';
import { LoaderMini } from 'components/loader';
import { dtoChecks } from 'app/utils/dto';
import Scrollbar from 'components/scrollbar';
import { TableChecks } from 'components/table';

const ChecksWrapper = () => {
  const dispatch = useDsp();
  const [isLoaderActive, setLoaderActive] = useState(true)

  const checks = useSlc((state: RootState) => state.checks) || [];

  const apiSuccess = (docs: any) => {
    dispatch(action.checksSet(dtoChecks(docs)))
    setLoaderActive(false)
  }

  const apiUnsuccess = () => {
    dispatch(action.checksSet([]))
    setLoaderActive(false)
  }

  useEffect(()=> {
    apiChecks(apiSuccess, apiUnsuccess)
  }, [])

  return (
    <div className="profile__results">
      <Scrollbar>
        <TableChecks data={checks}/>
      </Scrollbar>
      {
        isLoaderActive && <LoaderMini/>
      }
    </div>
  )
}

export default ChecksWrapper;