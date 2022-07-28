import { action, useDsp} from 'app/store';
import { Formik, FormUser } from 'components/form';
import { apiUserSet } from 'app/api';
import { schemas } from 'app/utils/schemas';

const data = {
  name: "Username",
  lastname: "Userlastname",
  oldPassword: "",
  newPassword: ""
}

export const WrapperUser = () => {
  const dispatch = useDsp();

  const apiFeedbackSuccess = () => {
    dispatch(action.mUserHide());
    dispatch(action.mInfoSetData({
      title: "Thank you",
      message: "Нour details have been updated."
    }));
    dispatch(action.mInfoShow());
  }

  const apiFeedbackUnsuccess = (err: any) => {}

  return (
    <Formik
      initialValues={data}
      validationSchema={schemas.user}
      onSubmit={(params, {setErrors}) => {
        apiUserSet(params, apiFeedbackSuccess, apiFeedbackUnsuccess)
      }}
    >
      <FormUser />
    </Formik>
  )
}