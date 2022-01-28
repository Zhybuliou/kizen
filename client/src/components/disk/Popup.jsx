import React from 'react';


export default function Popup({active, setActive, children,}) {
  return (
  <div className = {active ? 'modal active' : 'modal'} onClick={() => setActive(false)} >
    <div className='popup__content' onClick={(e) => e.stopPropagation()}>
        {children}
    </div>
  </div>
  );
}
