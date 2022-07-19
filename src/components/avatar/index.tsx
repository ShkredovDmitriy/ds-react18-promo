import React, { FC } from 'react';

const Avatar: FC = () => {
  return (
    <div className="avatar">
      <div className="avatar__image">
        <img
          src={`${process.env.PUBLIC_URL}/assets/avatar-default.png`}
          alt=""
        />
        <label
          htmlFor="formAvatarFile"
          className="avatar__label"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" id="icon-avatar-upload">
            <circle cx="15" cy="15" r="15" fill="transparent"></circle><path d="M20.052 8.961a1.807 1.807 0 00-2.554 0l-.64.643-6.805 6.802-.014.015c-.004.003-.004.007-.008.007-.007.01-.018.021-.025.032 0 .004-.004.004-.004.007l-.018.03-.007.01-.01.03c0 .003-.004.003-.004.006l-1.51 4.54a.356.356 0 00.086.37.363.363 0 00.373.086l4.536-1.514c.004 0 .004 0 .008-.003a.131.131 0 00.032-.015.013.013 0 00.008-.003c.01-.008.025-.015.035-.022.011-.007.022-.018.033-.025.004-.004.007-.004.007-.008.004-.003.011-.007.015-.014l7.444-7.445a1.807 1.807 0 000-2.553l-.979-.976zm-6.72 10.215l-2.513-2.513 6.292-6.293 2.514 2.514-6.292 6.292zm-2.867-1.845l2.196 2.196-3.298 1.098 1.102-3.294zm10.056-5.346l-.383.386-2.514-2.514.387-.386a1.084 1.084 0 011.531 0l.983.982c.42.425.418 1.109-.004 1.532z" fill="inherit"></path>
          </svg>
        </label>
      </div>
      <form
        action="#"
        className="avatar__form"
      >
        <input
          type="file"
          className="avatar__input"
          id="formAvatarFile"
        />
      </form>
    </div>
  )
}

export default Avatar