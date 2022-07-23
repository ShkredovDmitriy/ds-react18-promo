import React, { FC, useEffect } from 'react'
import { action, useDsp } from 'app/store';
import { apiAuthCheck } from 'app/api';

const AuthProvider: FC = () => {
  const dispatch = useDsp()

  const setUserAuthorised = (user: any) => {
    dispatch(action.userSet({
      isAuth: true,
      email: user.email,
      token: user.accessToken
    }));
    setTimeout(() => dispatch(action.loaderHide()), 1000)
  }

  const setUserUnuthorised = () => {
    dispatch(action.userSet({}));
    setTimeout(() => {
      dispatch(action.mLoginShow());
      dispatch(action.loaderHide())
    }, 1000);
  }

  const checkAuthorisation = () => {
    apiAuthCheck(setUserAuthorised, setUserUnuthorised)
  }

  useEffect(checkAuthorisation, [])

  return <></>
}

export default AuthProvider;