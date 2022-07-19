import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import AuthProvider from 'app/authProvider';
import ModalProvider from 'components/modal';
import Header from 'blocks/header/header';
import Main from 'blocks/main/main';
import About from 'blocks/about/about';
import Winners from 'blocks/winners/winners';
import Profile from './blocks/profile/profile';
import Footer from './blocks/footer/footer';
import Loader from 'components/loader';
import type { RootState } from 'app/store';
import { useSlc } from 'app/store';
import './styles/scss/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider/>
      <ModalProvider/>
      <Loader/>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={ <Main/> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/winners" element={ <Winners /> } />
          <Route path="/profile" element={ <RequireAuth /> }/>
          <Route path="/*" element={ <Redirect /> } />
        </Routes>
        <Footer/>
      </Router>
    </Provider>
  </React.StrictMode>
);


function RequireAuth() {
  const user = useSlc((state: RootState) => state.user)
  let location = useLocation();
  if (user.isAuth) return <Profile />
  return <Navigate to="/" state={{ from: location }} replace />
}


function Redirect() {
  let location = useLocation();
  return <Navigate to="/" state={{ from: location }} replace />;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
