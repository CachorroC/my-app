'use client';
import React from 'react';
import { useState, Suspense } from 'react';
import { Proceso } from '#@/app/api/procesos/proceso';
import {
  SearchItems,
  SearchItemsEskeleton,
} from '#@/components/search';
import { useParams } from 'next/navigation';
import ContextInputSearch from './context-click-nav';

const NavContext = React.createContext( false );

export function NavProvider ( {
  children,
}: {
  children: React.ReactNode;
} ) {
  const params = useParams();
  const [
    isOpen, setIsOpen
  ] = React.useState( false );
  const [
    hasUltimaActuacion, setUltimaActuacion
  ] =
    React.useState( false );
  return (
    <NavContext.Provider value={  isOpen }>
      { children }
    </NavContext.Provider>
  );
}

export function useNavigate () {
  const context = React.useContext( NavContext );
  if ( context === null ) {
    throw new Error( ' no sirvio' );
  }
  return context;
}
