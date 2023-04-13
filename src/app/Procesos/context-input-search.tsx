"use client";

import { useSearch } from "./search-context";
import React from "react";
import form from "#@/styles/css/searchbar.module.css";
import box from "#@/styles/scss/box.module.scss";
import searchbox from "#@/styles/css/searchbar.module.css";
import { Proceso } from "#@/app/api/procesos/proceso";
import navbar from "#@/styles/css/navbar.module.css";
import typeface from '#@/styles/css/typeface.module.css';
import Link from 'next/link';
import { poiret } from '../../components/typeface';
import drawer from '#@/styles/css/drawer.module.css';
const ContextInputSearch = () => {
  const [
    search,
    setSearch
  ] = useSearch();

  return (
    <div className={ navbar.menu }>
  
      
      <input
        type="text"
        className={ form.input }
        value={ search }
        placeholder="Search..."
        onChange={
          ( e ) => setSearch( e.target.value ) }
      ></input>
    
    </div>
  );
};
function ProcesoRow (
  { proceso }: { proceso: Proceso; }
) {
  return (
    <Link className={ box.container } href={`/Procesos/${proceso.tipo}/${proceso.idProceso}`} >
      <h4 className={ poiret.className }>{ proceso.Demandado }</h4>
      <i>{ proceso.fechaUltimaActuacion?.toString() }</i>
    </Link>
  );
};
export const Search = (
  {
    procesos
  }: { procesos: Proceso[]; }
) => {
  const [
    search
  ] = useSearch();
  const rows: any[] = [
  ];
  let lastultimoTipo: string | null = null;
  procesos.forEach(
    ( proceso ) => {
      if (
        proceso.Demandado.toLowerCase().indexOf(
          search.toLowerCase()
        ) === -1
      ) {
        return;
      }
      rows.push(
        <ProcesoRow
          proceso={ proceso }
          key={ proceso.Demandado } />
      );
      lastultimoTipo = proceso.tipo;
    } 
  );
  return <div className={box.flex}>{ rows }</div>;
};
export default ContextInputSearch;
