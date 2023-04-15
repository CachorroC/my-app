'use client';
import {
  ReactNode,
  createContext,
  useContext,
} from 'react';

export const NavContext = createContext(false);

export function NavProvider({
  children,
}: {
  children: ReactNode;
}) {
  const isOpen = useContext(NavContext);
  return (
    <NavContext.Provider value={false}>
      {children}
    </NavContext.Provider>
  );
}
