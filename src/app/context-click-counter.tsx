'use client';

import { useNavigator } from './navigator-context';
import React from 'react';
import box from '#@/styles/css/box.module.css';
import layout from '#@/styles/css/layout.module.css';

const NavButton = () => {
  const [
    isOpen, setIsOpen
  ] = useNavigator();
  if ( !isOpen ) {
    return (

      <button
        onClick={ () => setIsOpen( true ) }
      >
        <span className='material-symbols-outlined'>home</span>
      </button>

    );
  }
  return (

    <button
      onClick={ () => setIsOpen( false ) }
    >
      <span className='material-symbols-outlined'>close </span>
    </button>
  );
};

export const Nav = () => {
  const [
    isOpen, setIsOpen
  ] = useNavigator();


  return (

    <nav className={ layout.sidebar }>
      {
        isOpen ? (
          <div className={ box.container }>
            <button onClick={
              () => {
                setIsOpen( false );
              }
            }>
              <span className='material-symbols-outlined'>close</span>
            </button>
            <p>is open</p>
          </div>
        ) : (
          <NavButton />
        )
      }
    </nav>

  );
};

export default NavButton;
