import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

// USER
const userSet = createAction<any>('userSet');

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

// MODALS
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
const mScanerShow = createAction('mScanerShow');
const mScanerHide = createAction('mScanerHide');
const mFeedbackShow = createAction('mFeedbackShow');
const mFeedbackHide = createAction('mFeedbackHide');
const mInfoShow = createAction('mInfoShow');
const mInfoHide = createAction('mInfoHide');
const mInfoSetData = createAction<any>('mInfoSetData');

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

const mScaner = createReducer(false, (builder) => {
  builder.addCase(mScanerShow, (state, action) => true);
  builder.addCase(mScanerHide, (state, action) => false);
})

const mFeedback = createReducer(false, (builder) => {
  builder.addCase(mFeedbackShow, (state, action) => true);
  builder.addCase(mFeedbackHide, (state, action) => false);
})

const mInfo = createReducer(false, (builder) => {
  builder.addCase(mInfoShow, (state, action) => true);
  builder.addCase(mInfoHide, (state, action) => false);
})

const mInfoData = createReducer({title: "", message: ""}, (builder) => {
  builder.addCase(mInfoSetData, (state, action) => action.payload);
})


// LOADERS
const loaderShow = createAction('loaderShow');
const loaderHide = createAction('loaderHide');

const loader = createReducer(true, (builder) => {
  builder.addCase(loaderShow, (state, action) => true);
  builder.addCase(loaderHide, (state, action) => false);
})


// TABELS
const winnersSet = createAction<any>('winnersSet');
const faqSet = createAction<any>('faqSet');
const checksSet = createAction<any>('checksSet');

const winners = createReducer([], (builder) => {
  builder.addCase(winnersSet, (state, action) => action.payload);
})

const faq = createReducer([], (builder) => {
  builder.addCase(faqSet, (state, action) => action.payload);
})

const checks = createReducer([], (builder) => {
  builder.addCase(checksSet, (state, action) => action.payload);
})

const action = {
  userSet,
  checksSet,
  winnersSet,
  faqSet,
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
  mScanerShow,
  mScanerHide,
  mFeedbackShow,
  mFeedbackHide,
  mInfoShow,
  mInfoHide,
  mInfoSetData,
  loaderHide,
}

const store = configureStore({
  reducer: {
    user,
    checks,
    winners,
    faq,
    mLogin,
    mRegis,
    mRecov,
    mVariant,
    mUpload,
    mManual,
    mUser,
    mScaner,
    mFeedback,
    mInfo,
    mInfoData,
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