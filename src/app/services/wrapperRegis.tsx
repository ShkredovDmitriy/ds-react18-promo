import { action, useDsp, useSlc, RootState } from 'app/store';
import { Formik, FormRegis } from 'components/form';
import { apiRegis } from 'app/api';
import { schemas, values } from 'app/utils/schemas';

const WrapperRegis = () => {

  const dispatch = useDsp();

  const apiSuccess = ({ user }: any) => {
    console.log("APISUCCESS DATA", user)
    dispatch(action.userSet({
      isAuth: true,
      email: user.email,
      token: user.accessToken
    }));
    dispatch(action.mRegisHide());
  }

  const apiUnsuccess = (err: any) => {
    console.log("APIUNSUCCESS DATA", err)
  }

  return (
    <Formik
      initialValues={values.regis}
      validationSchema={schemas.regis}
      onSubmit={(params, {setErrors}) => apiRegis(params, apiSuccess, apiUnsuccess)}
    >
      <FormRegis />
    </Formik>
  )
}

export default WrapperRegis;
