import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const userSet = createAction<any>('userSet');
const checksSet = createAction<any>('checksSet');
const winnersSet = createAction<any>('winnersSet');

const mLoginShow = createAction('mLoginShow');
const mLoginHide = createAction('mLoginHide');
const mRegisShow = createAction('mRegisShow');
const mRegisHide = createAction('mRegisHide');
const mRecovShow = createAction('mRecovShow');
const mRecovHide = createAction('mRecovHide');
const mVariantShow = createAction('mVariantShow');
const mVariantHide = createAction('mVariantHide');
const mUploadShow = createAction('mUploadShow');
const mUploadHide = createAction('mUploadHide');
const mManualShow = createAction('mManualShow');
const mManualHide = createAction('mManualHide');
const mUserShow = createAction('mUserShow');
const mUserHide = createAction('mUserHide');
const loaderShow = createAction('loaderShow');
const loaderHide = createAction('loaderHide');

const user = createReducer({
  isAuth: false,
  name: '',
  lastname: '',
  email: '',
  phone: '',
  token: ''
}, (builder) => {
  builder.addCase(userSet, (state, action) => action.payload);
})

const checks = createReducer([], (builder) => {
  builder.addCase(checksSet, (state, action) => action.payload);
})

const winners = createReducer([], (builder) => {
  builder.addCase(winnersSet, (state, action) => action.payload);
})


const mUser = createReducer(false, (builder) => {
  builder.addCase(mUserShow, (state, action) => true);
  builder.addCase(mUserHide, (state, action) => false);
})

const mLogin = createReducer(false, (builder) => {
  builder.addCase(mLoginShow, (state, action) => true);
  builder.addCase(mLoginHide, (state, action) => false);
})

const mRegis = createReducer(false, (builder) => {
  builder.addCase(mRegisShow, (state, action) => true);
  builder.addCase(mRegisHide, (state, action) => false);
})

const mRecov = createReducer(false, (builder) => {
  builder.addCase(mRecovShow, (state, action) => true);
  builder.addCase(mRecovHide, (state, action) => false);
})

const mVariant = createReducer(false, (builder) => {
  builder.addCase(mVariantShow, (state, action) => true);
  builder.addCase(mVariantHide, (state, action) => false);
})

const mUpload = createReducer(false, (builder) => {
  builder.addCase(mUploadShow, (state, action) => true);
  builder.addCase(mUploadHide, (state, action) => false);
})

const mManual = createReducer(false, (builder) => {
  builder.addCase(mManualShow, (state, action) => true);
  builder.addCase(mManualHide, (state, action) => false);
})

const loader = createReducer(true, (builder) => {
  builder.addCase(loaderShow, (state, action) => true);
  builder.addCase(loaderHide, (state, action) => false);
})


const action = {
  userSet,
  checksSet,
  winnersSet,
  mLoginShow,
  mLoginHide,
  mRegisShow,
  mRegisHide,
  mRecovShow,
  mRecovHide,
  mVariantShow,
  mVariantHide,
  mUploadShow,
  mUploadHide,
  mManualShow,
  mManualHide,
  mUserShow,
  mUserHide,
  loaderShow,
  loaderHide,
}

const store = configureStore({
  reducer: {
    user,
    checks,
    winners,
    mLogin,
    mRegis,
    mRecov,
    mVariant,
    mUpload,
    mManual,
    mUser,
    loader,
  },
  devTools: true
})

const useDsp = useDispatch;
const useSlc = useSelector;

export { store, action, useSlc, useDsp };
// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch