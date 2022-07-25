import { useEffect, useState } from 'react';
import { action, useDsp, useSlc, RootState } from 'app/store';
import { Formik, FormFeedback } from 'components/form';
import { apiTheme } from 'app/api';
import { schemas, values } from 'app/utils/schemas';
import { dtoSelectOption } from 'app/utils/dto';

export const WrapperFeedback = () => {
  const dispatch = useDsp();
  const [theme, setTheme] = useState([])

  const user = useSlc((state: RootState) => state.user)

  const apiThemeSuccess = (docs: any) => {
    setTheme(dtoSelectOption(docs))

  }

  const apiThemeUnsuccess = (err: any) => {
    console.log("API UNSUCCESS DATA", err)
  }

  const feedbackValuesSelector = () => {
    if(user.isAuth) return values.feedback
    return values.feedbackGuest
  }

  useEffect(() => {
    apiTheme(apiThemeSuccess, apiThemeUnsuccess)
    // apiWinners(apiWinnersSuccess, apiWinnersUnsuccess)
  }, [])

  console.log('setTheme', theme)

  return (
    <Formik
      initialValues={feedbackValuesSelector()}
      validationSchema={schemas.feedback}
      onSubmit={(params, {setErrors}) => {}
      // apiMamual(params, apiSuccess, apiUnsuccess)
      }
    >
      <FormFeedback
        isAuth={user.isAuth}
        theme={theme}
      />
    </Formik>
  )
}