'use client';

import { useNavigator } from './navigator-context';
import React from 'react';
import box from '#@/styles/css/box.module.css';
import layout from '#@/styles/css/layout2.module.css';
import { useSearch } from './search-context';
import Link from 'next/link';
import { poiret } from '../components/typeface';
import { Proceso } from './api/procesos/proceso';

const NavButton = () => {
  const [isOpen, setIsOpen] = useNavigator();

  if (isOpen) {
    return (
      <button
        onClick={() => setIsOpen(false)}
        className={layout.navbutton}>
        <span className="material-symbols-outlined">
          close
        </span>
      </button>
    );
  }
  return (
    <button
      onClick={() => setIsOpen(true)}
      className={layout.NavButton}>
      <span className="material-symbols-outlined">
        home{' '}
      </span>
    </button>
  );
};
export const Nav = ({
  procesos,
}: {
  procesos: Proceso[];
}) => {
  const [isOpen, setIsOpen] = useNavigator();
  const [search] = useSearch();
  const rows: any[] = [];
  procesos.forEach((proceso) => {
    if (
      proceso.Demandado.toLowerCase().indexOf(
        search.toLowerCase(),
      ) === -1
    ) {
      return;
    }
    rows.push(
      <Link
        className={layout.card}
        href={`/Procesos/${proceso.tipo}/${proceso.idProceso}`}>
        <h4 className={poiret.className}>
          {proceso.Demandado}
        </h4>
        <i>{proceso.fechaUltimaActuacion?.toString()}</i>
      </Link>,
    );
  });
  if (isOpen === true) {
    return <div className={layout.sidenav}>{rows}</div>;
  } else if (!isOpen) {
    return (
      <button
        onClick={() => {
          setIsOpen(true);
        }}>
        <span className="material-symbols-outlined">
          heart_plus
        </span>
      </button>
    );
  }
  return <p>idk</p>;
};

export default NavButton;
