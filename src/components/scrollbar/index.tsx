import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';

const Scrollbar = (props: any) =>
  <Scrollbars
    style={{ height: '100%' }}
    renderTrackVertical={props => <div {...props} className="scrollbars__track-vertical"/>}
    renderThumbVertical={props => <div {...props} className="scrollbars__thumb-vertical"/>}
    renderView={props => <div {...props} className="scrollbars__view"/>}
  >
    {props.children}
  </Scrollbars>

export default Scrollbar;