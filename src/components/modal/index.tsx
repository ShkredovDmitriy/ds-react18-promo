import React from 'react'
import ModalLogin from './modalLogin/ModalLogin';
import ModalRegis from './modalRegis/ModalRegis';
import ModalRecov from './modalRecov/modalRecov';
import ModalVariant from './modalVariant/modalVariant';
import ModalUpload from './modalUpload/ModalUpload';
import ModalManual from './modalManual/modalManual';
import ModalUser from './modalUser/modalUser';

const ModalProvider = () => {
  return (
    <>
      <ModalLogin/>
      <ModalRegis/>
      <ModalRecov/>
      <ModalVariant/>
      <ModalUpload/>
      <ModalManual/>
      <ModalUser/>
    </>
  )
}

export default ModalProvider;