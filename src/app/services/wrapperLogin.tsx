import { action, useDsp, useSlc, RootState } from 'app/store';
import { Formik, FormLogin } from 'components/form';
import { apiLogin } from 'app/api';
import { schemas, values } from 'app/utils/schemas';

export const WrapperLogin = () => {

  const dispatch = useDsp()

  const apiSuccess = ({ user }: any) => {
    dispatch(action.userSet({
      isAuth: true,
      email: user.email,
      token: user.accessToken
    }));
    dispatch(action.mLoginHide());
  }

  const apiUnsuccess = (err: any) => {
    console.log("APIUNSUCCESS DATA", err)
  }

  return (
    <Formik
      initialValues={values.login}
      validationSchema={schemas.login}
      onSubmit={(params, {setErrors}) => apiLogin(params, apiSuccess, apiUnsuccess)}
    >
      <FormLogin />
    </Formik>
  )
}