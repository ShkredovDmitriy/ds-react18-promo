import { useEffect, useState } from 'react';
import { action, useDsp, useSlc, RootState } from 'app/store';
import { apiWinners, apiPeriods } from 'app/api';
import { dtoWinners, dtoSelectOption, dtoWinnerPhone } from 'app/utils/dto';
import { LoaderMini } from 'components/loader';
import { Formik, FormWinners } from 'components/form';
import Scrollbar from 'components/scrollbar';
import { TableWinners } from 'components/table';

export const WrapperWinners = () => {
  const dispatch = useDsp()
  const [periods, setPeriods] = useState([])
  const [week, setWeek] = useState("")
  const [phone, setPhone] = useState("")
  const [isLoaderActive, setLoaderActive] = useState(true)

  const winners = useSlc((state: RootState) => state.winners)

  const apiWinnersSuccess = (docs: any) => {
    dispatch(action.winnersSet(dtoWinners(docs)))
    setLoaderActive(false)
  }

  const apiWinnersUnsuccess = () => {
    dispatch(action.winnersSet([]))
    setLoaderActive(false)
  }

  const apiPeriodsSuccess = (docs: any) => {
    setPeriods(dtoSelectOption(docs))
  }

  const apiPeriodsUnsuccess = () => {}

  const winnersFilter = (winners: any) => {
    let arr = winners;
    if(phone) arr = arr.filter((winner: any) => winner.phone.includes(dtoWinnerPhone(phone)))
    if(week) arr = arr.filter((winner: any) => winner.period === week)
    return arr;
  }

  useEffect(() => {
    apiPeriods(apiPeriodsSuccess, apiPeriodsUnsuccess)
    apiWinners(apiWinnersSuccess, apiWinnersUnsuccess)
  }, [])

  return (
    <>
      {
        !isLoaderActive &&
        <>
          <Formik
            initialValues={{phone: "", week: ""}}
            onSubmit={() => {}}
          >
            <FormWinners
              periods={periods}
              onSelectChange={(e: any) => setWeek(e.target.value)}
              onInputChange={(e: any) => setPhone(e.target.value)}
            />
          </Formik>
          <Scrollbar>
            <TableWinners data={winnersFilter(winners)}/>
          </Scrollbar>
        </>
      }
      {
        isLoaderActive && <LoaderMini/>
      }
    </>
  )
}