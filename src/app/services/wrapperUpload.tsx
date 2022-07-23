import { action, useDsp } from 'app/store';
import { Formik, FormUpload } from 'components/form';
import { schemas, values } from 'app/utils/schemas';

const WrapperUpload = () => {
  const dispatch = useDsp()
  const apiSuccess = () => {
    dispatch(action.mUploadHide());
    dispatch(action.mInfoShow());
    dispatch(action.mInfoSetData({
      title: "Photo not accepted",
      message: "Photo not recognized. Perhaps it is dented or of poor quality. Please enter check details manually."
    }));
  }
  return (
    <Formik
      initialValues={values.upload}
      validationSchema={schemas.upload}
      onSubmit={(params, {setErrors}) => apiSuccess() }
    >
      <FormUpload />
    </Formik>
  )
}

export default WrapperUpload;
