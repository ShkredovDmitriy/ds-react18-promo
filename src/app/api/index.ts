import { auth, db } from 'app/fbase';
import { action, useDsp, useSlc, RootState } from 'app/store';
import axios from 'axios';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { collection, doc, getDocs, addDoc, setDoc } from "firebase/firestore";

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

const apiUserSet = (params: any, apiSuccess: any, apiUnsuccess: any) => {
  setDoc(doc(db, "user", "S8R6KUzlgiCNwUGVLf8m"), {
    name: params.name,
    lastname: params.lastname
  })
  .then((docs) => {
    console.log('API USER SUCCESS ', docs);
    apiSuccess();
  })
  .catch((error)=> {
    console.log('API USER UNSUCCESS ', error);
    apiUnsuccess();
  })
}

const apiMamual = (params: any, apiSuccess: any, apiUnsuccess: any) => {
  addDoc(collection(db, "checks"), {
    code: params.fn,
    price: params.price,
    status: 'moderate',
    date: params.date,
    time: params.time,
  })
  .then((docs) => {
    console.log('API MANUAL SUCCESS ', docs);
    apiSuccess();
  })
  .catch((error)=> {
    console.log('API MANUAL UNSUCCESS ', error);
    apiUnsuccess();
  })
}

const apiAuthCheck = (success: any, unsuccess: any) => {
  onAuthStateChanged(auth, function(user) {
    if (user) success(user)
    else unsuccess()
  });
}

const apiChecks = (apiSuccess: any, apiUnsuccess: any) => {
  getDocs(collection(db, "checks"))
    .then((docs) => {
      console.log('API CHECKS SUCCESS ', docs);
      apiSuccess(docs);
    })
    .catch((error)=> {
      console.log('API CHECKS UNSUCCESS ', error);
     apiUnsuccess()
    })
}

const apiFaq = (apiSuccess: any, apiUnsuccess: any) => {
  getDocs(collection(db, "faq"))
    .then((docs) => {
      console.log('API FAQ SUCCESS ', docs);
      apiSuccess(docs);
    })
    .catch((error)=> {
      console.log('API FAQ UNSUCCESS ', error);
     apiUnsuccess()
    })
}

const apiPeriods = (apiSuccess: any, apiUnsuccess: any) => {
  getDocs(collection(db, "period"))
    .then((docs) => {
      console.log('API PERIODS SUCCESS ', docs);
      apiSuccess(docs);
    })
    .catch((error)=> {
      console.log('API PERIODS UNSUCCESS ', error);
     apiUnsuccess()
    })
}

const apiWinners = (apiSuccess: any, apiUnsuccess: any) => {
  getDocs(collection(db, "winners"))
  .then((docs) => {
    console.log('API PERIODS SUCCESS ', docs);
    apiSuccess(docs);
  })
  .catch((error)=> {
    console.log('API PERIODS UNSUCCESS ', error);
   apiUnsuccess()
  })
}

const apiTheme = (apiSuccess: any, apiUnsuccess: any) => {
  getDocs(collection(db, "feedbackTheme"))
    .then((docs) => {
      console.log('API THEME SUCCESS ', docs);
      apiSuccess(docs);
    })
    .catch((error)=> {
      console.log('API THEME UNSUCCESS ', error);
     apiUnsuccess()
    })
}


const apiFeedback = (params: any, apiSuccess: any, apiUnsuccess: any) => {
  addDoc(collection(db, "feedbackMessages"), {
    message: params.message,
    theme: params.theme
  })
  .then((docs) => {
    console.log('API FEEDBACK SUCCESS ', docs);
    apiSuccess();
  })
  .catch((error)=> {
    console.log('API FEEDBACK UNSUCCESS ', error);
    apiUnsuccess();
  })
}

export { apiRegis, apiLogin, apiLogout, apiUserSet, apiMamual, apiAuthCheck, apiChecks, apiFaq, apiWinners, apiPeriods, apiTheme, apiFeedback }