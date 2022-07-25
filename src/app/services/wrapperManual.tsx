import { action, useDsp } from 'app/store';
import { Formik, FormManual } from 'components/form';
import { apiMamual, apiChecks } from 'app/api';
import { schemas, values } from 'app/utils/schemas';
import { dtoChecks } from 'app/utils/dto';

export const WrapperManual = () => {
  const dispatch = useDsp();

  const apiSuccess = () => {
    dispatch(action.mManualHide());
    apiChecks((docs: any)=> {
      dispatch(action.mInfoShow());
      dispatch(action.mInfoSetData({
        title: "Thank you",
        message: "Check was upload successfuly. Now your check is being moderated. If your check is good you will participate in the draw. We wish you good luck."
      }));
      dispatch(action.checksSet(dtoChecks(docs)))
    }, ()=> {
      dispatch(action.checksSet([]))
    })
  }

  const apiUnsuccess = (err: any) => {
    console.log("APIUNSUCCESS DATA", err)
  }

  return (
    <Formik
      initialValues={values.manual}
      validationSchema={schemas.manual}
      onSubmit={(params, {setErrors}) => apiMamual(params, apiSuccess, apiUnsuccess)}
    >
      <FormManual />
    </Formik>
  )
}