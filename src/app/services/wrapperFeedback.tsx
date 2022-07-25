import { action, useDsp, useSlc, RootState } from 'app/store';
import { Formik, FormFeedback } from 'components/form';
import { apiMamual, apiChecks } from 'app/api';
import { schemas, values } from 'app/utils/schemas';
import { dtoChecks } from 'app/utils/dto';

export const WrapperFeedback = () => {
  const dispatch = useDsp();

  const user = useSlc((state: RootState) => state.user)

  // const apiSuccess = () => {
  //   dispatch(action.mManualHide());
  //   apiChecks((docs: any)=> {
  //     dispatch(action.mInfoShow());
  //     dispatch(action.mInfoSetData({
  //       title: "Thank you",
  //       message: "We c"
  //     }));
  //     dispatch(action.checksSet(dtoChecks(docs)))
  //   }, ()=> {
  //     dispatch(action.checksSet([]))
  //   })
  // }

  // const apiUnsuccess = (err: any) => {
  //   console.log("APIUNSUCCESS DATA", err)
  // }

  const feedbackValuesSelector = () => {
    if(user.isAuth) return values.feedback
    return values.feedbackGuest
  }

  return (
    <Formik
      initialValues={feedbackValuesSelector()}
      validationSchema={schemas.feedback}
      onSubmit={(params, {setErrors}) => {}
      // apiMamual(params, apiSuccess, apiUnsuccess)
    }
    >
      <FormFeedback isAuth={user.isAuth}/>
    </Formik>
  )
}