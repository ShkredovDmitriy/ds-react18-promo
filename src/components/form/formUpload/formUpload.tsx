import Button from 'react-bootstrap/Button';
import { Form, BSform } from 'components/form';
import { InputFile } from 'components/input';

const FormUpload = () => {

  return (
    <Form className='form mt-3'>

      <div className="mb-3">
        <BSform.Text className="text-muted">You can add from 1 to 4 files.</BSform.Text>
      </div>

      <div className="mb-3">
        <InputFile
          name="file"
        />
      </div>

      <Button variant="primary mt-3 w-100" type="submit">Submit</Button>
    </Form>
  )
}

export default FormUpload;
