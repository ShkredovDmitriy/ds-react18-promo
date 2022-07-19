import React, { FC }  from 'react';
import { Link } from "react-router-dom";
import type { RootState } from 'app/store';
import { action, useDsp, useSlc } from 'app/store';

const Header: FC = () => {
  const dispatch = useDsp();
  const user = useSlc((state: RootState) => state.user)
  return (
    <header className="header">
      <div className="header__wrapper">
          <nav className='nav'>
            <ul className='nav__list'>
              <li className='nav__item'>
                <Link className='nav__link' to="/">Main</Link>
              </li>
              <li className='nav__item'>
                <Link className='button nav__link' to="/about">About</Link>
              </li>
              <li className='nav__item'>
                <Link className='button nav__link' to="/winners">Winners</Link>
              </li>
              { !user.isAuth &&
                <li className='nav__item'>
                  <button
                    className='button nav__link'
                    onClick={() => dispatch(action.mLoginShow())}
                  >
                    Login
                  </button>
                </li>
              }
              { user.isAuth &&
                <li className='nav__item'>
                  <Link className='nav__link' to="/profile">Profile</Link>
                </li>
              }
            </ul>
          </nav>
      </div>
    </header>
  )
}

export default Header;