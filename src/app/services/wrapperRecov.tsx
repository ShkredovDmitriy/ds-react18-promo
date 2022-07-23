import { action, useDsp, useSlc, RootState } from 'app/store';
import { Formik, FormRecov } from 'components/form';
import { apiLogin } from 'app/api';
import { schemas, values } from 'app/utils/schemas';

const WrapperRecov = () => {

  const dispatch = useDsp()

  // const apiSuccess = ({ user }: any) => {
  //   dispatch(action.userSet({
  //     isAuth: true,
  //     email: user.email,
  //     token: user.accessToken
  //   }));
  //   dispatch(action.mLoginHide());
  // }

  // const apiUnsuccess = (err: any) => {
  //   console.log("APIUNSUCCESS DATA", err)
  // }

  return (
    <Formik
      initialValues={values.recov}
      validationSchema={schemas.recov}
      onSubmit={(params, {setErrors}) => console.log(params)}
    >
      <FormRecov />
    </Formik>
  )
}

export default WrapperRecov;
