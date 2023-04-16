'use client';

import { useSearch } from './search-context';
import React from 'react';
import form from '#@/styles/css/searchbar.module.css';
import { Proceso } from '#@/app/api/procesos/proceso';
import navbar from '#@/styles/css/navbar.module.css';
import Link from 'next/link';
import { poiret } from '#@/components/typeface';
import layout from '#@/styles/scss/layout.module.scss';
import { useNavigator } from './navigator-context';

const SearchBar = () => {
  const [
    search,
    setSearch
  ] = useSearch();
  const [
    isOpen,
    setIsOpen
  ] = useNavigator();

  return (
    <form
      className={ layout.SearchBar }
    >
      <input
        type="text"
        className={ form.input }
        value={ search }
        placeholder="Search..."
        onBeforeInput={ () => {
          setIsOpen( true );
        } }
        onChange={ ( input ) => {
          setSearch( input.target.value );
        } }></input>
    </form>
  );
};
function ProcesoRow ( { proceso }: { proceso: Proceso; } ) {
  const name = proceso.Demandado.slice( 0, 10 ).toLocaleLowerCase();
  const ultimAct = new Date( proceso.fechaUltimaActuacion ? proceso.fechaUltimaActuacion : '' );
  return (
    <Link
      className={ layout.card }
      href={ `/Procesos/${ proceso.tipo }/${ proceso.idProceso }` }>
      <h4 className={ poiret.className }>
        { name }
      </h4>
      <i>{ ultimAct.toString() }</i>
    </Link>
  );
}
export const Search = ( {
  procesos,
}: {
  procesos: Proceso[];
} ) => {
  const [
    search
  ] = useSearch();
  const rows: any[] = [
  ];
  procesos.forEach( ( proceso ) => {
    if (
      proceso.Demandado.toLowerCase().indexOf(
        search.toLowerCase(),
      ) === -1
    ) {
      return;
    }
    rows.push(
      <ProcesoRow
        proceso={ proceso }
        key={ proceso.Demandado }
      />,
    );
  } );
  return (
    <div className={ layout.procesossearchbox }>{ rows }</div>
  );
};
export default SearchBar;
