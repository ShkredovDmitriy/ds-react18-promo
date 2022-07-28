import { Form as BSform } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import FormLogin from './formLogin/formLogin';
import FormRegis from './formRegis/formRegis';
import FormRecov from './formRecov/formRecov';
import FormVariant from './formVariant/formVariant';
import FormUpload from './formUpload/formUpload';
import FormManual from './formManual/formManual';
import { FormUser } from './formUser/formUser';
import { FormWinners } from './formWinners/formWinners';
import { FormFeedback } from './formFeedback/formFeedback';

export { Formik, Form, Field, ErrorMessage, BSform }
export { FormLogin, FormRegis, FormRecov, FormVariant, FormUpload, FormManual, FormUser, FormWinners, FormFeedback }