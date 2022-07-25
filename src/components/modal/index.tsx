import ModalLogin from './modalLogin/ModalLogin';
import ModalRegis from './modalRegis/ModalRegis';
import ModalRecov from './modalRecov/modalRecov';
import ModalVariant from './modalVariant/modalVariant';
import ModalUpload from './modalUpload/ModalUpload';
import ModalManual from './modalManual/modalManual';
import ModalUser from './modalUser/modalUser';
import ModalInfo from './modalInfo/modalInfo';
import ModalScaner from './modalScaner/modalScaner';
import ModalFeedback from './modalFeedback/modalFeedback';

export const ModalProvider = () =>
  <>
    <ModalLogin/>
    <ModalRegis/>
    <ModalRecov/>
    <ModalVariant/>
    <ModalUpload/>
    <ModalManual/>
    <ModalUser/>
    <ModalInfo/>
    <ModalScaner/>
    <ModalFeedback/>
  </>