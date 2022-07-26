import { useEffect, useState } from 'react';
import { action, useDsp, useSlc, RootState } from 'app/store';
import { Formik, FormFeedback } from 'components/form';
import { apiTheme, apiFeedback } from 'app/api';
import { schemas, values } from 'app/utils/schemas';
import { dtoSelectOption } from 'app/utils/dto';

export const WrapperFeedback = () => {
  const dispatch = useDsp();
  const [theme, setTheme] = useState([])

  const user = useSlc((state: RootState) => state.user)

  const apiThemeSuccess = (docs: any) => {
    setTheme(dtoSelectOption(docs))
  }

  const apiFeedbackSuccess = () => {
    dispatch(action.mFeedbackHide());
    dispatch(action.mInfoShow());
    dispatch(action.mInfoSetData({
      title: "Thank you",
      message: "We will contact you within two working days."
    }));
  }

  const apiThemeUnsuccess = (err: any) => {
    console.log("API UNSUCCESS DATA", err)
  }

  const apiFeedbackUnsuccess = () => {
    dispatch(action.mFeedbackHide());
    dispatch(action.mInfoShow());
    dispatch(action.mInfoSetData({
      title: "Sending error",
      message: "We will contact you within two working days."
    }));
  }

  useEffect(() => {
    apiTheme(apiThemeSuccess, apiThemeUnsuccess)
  }, [])

  return (
    <Formik
      initialValues={user.isAuth ? values.feedback : values.feedbackGuest}
      validationSchema={user.isAuth ? schemas.feedback : schemas.feedbackGuest}
      onSubmit={(params, {setErrors}) => {
        if(user.isAuth) {
           apiFeedback(params, apiFeedbackSuccess, apiFeedbackUnsuccess)
        } else {
          dispatch(action.mFeedbackHide());
          dispatch(action.mInfoShow());
          dispatch(action.mInfoSetData({
            title: "Thank you",
            message: "We will contact you within two working days."
          }));
        }
      }}
    >
      <FormFeedback
        isAuth={user.isAuth}
        theme={theme}
      />
    </Formik>
  )
}