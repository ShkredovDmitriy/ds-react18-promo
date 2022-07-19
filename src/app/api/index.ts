import { auth } from 'app/firebase';
import { action, useDsp, useSlc, RootState } from 'app/store';
import axios from 'axios';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

const apiRegis = (params: any, success: any, unsuccess: any) => {
  createUserWithEmailAndPassword(auth, params.email, params.password)
    .then((res) => {
      console.log('API REGISTRATION SUCCESS ', res.user)
      success(res)
    })
    .catch(err => {
      console.log('API REGISTRATION UNSUCCESS ', err.message)
      unsuccess()
    })
}

const apiLogin = (params: any, success: any, unsuccess: any) => {
  signInWithEmailAndPassword(auth, params.email, params.password)
    .then((res) => {
      console.log('API LOGIN SUCCESS ', res.user)
      success(res)
    })
    .catch(err => {
      console.log('API LOGIN UNSUCCESS ', err.message)
      unsuccess()
    })
}

const apiLogout = (success: any) => {
  signOut(auth).then(() => {
    success();
  })
}

const apiAuthCheck = (success: any, unsuccess: any) => {
  onAuthStateChanged(auth, function(user) {
    if (user) success(user)
    else unsuccess()
  });
}

const useApiChecks = () => {
  const dispatch = useDsp();
  const checks = useSlc((state: RootState) => state.checks);
  checks.length < 1 && axios({
    method: 'get',
    url: 'https://gorest.co.in/public/v2/todos'
  })
    .then((response)=> {
      console.log('API CHECKS SUCCESS ', response)
      dispatch(action.checksSet(response.data))
    }).catch((error)=> {
      console.log('API CHECKS UNSUCCESS ', error)
      dispatch(action.checksSet([]))
    })
}

const useApiWinners = () => {
  const dispatch = useDsp();
  const winners = useSlc((state: RootState) => state.winners);
  winners.length < 1 && axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users'
  })
    .then((response)=> {
      console.log('API WINNERS SUCCESS ', response)
      dispatch(action.winnersSet(response.data))
    }).catch((error)=> {
      console.log('API WINNERS UNSUCCESS ', error)
      dispatch(action.winnersSet([]))
    })
}

export { apiRegis, apiLogin, apiLogout, apiAuthCheck, useApiChecks, useApiWinners }