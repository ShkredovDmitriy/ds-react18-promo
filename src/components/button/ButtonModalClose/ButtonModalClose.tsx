import React, { FC, ReactNode, MouseEventHandler } from 'react'

type props = {
  variant?: string,
  children?: ReactNode,
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const ButtonModalClose: FC<props> = (props) => {
  return (
    <button
      className="button button--modal-close"
      onClick={props.onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" id="icon-modal-close">
        <path d="M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25z" fill="inherit"/><g stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M18.637 18.636l12.728 12.728"/><path d="M18.637 31.364l12.728-12.728"/></g>
      </svg>
    </button>
  )
}

export default ButtonModalClose;
