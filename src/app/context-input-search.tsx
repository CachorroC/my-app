'use client';

import { useSearch } from './search-context';
import React from 'react';
import form from '#@/styles/css/searchbar.module.css';
import { intProceso } from '#@/app/api/procesos/proceso';
import navbar from '#@/styles/css/navbar.module.css';
import Link from 'next/link';
import { poiret } from '#@/components/typeface';
import layout from '#@/styles/scss/layout.module.scss';
import { useNavigator } from './navigator-context';
import Card from '#@/components/card';

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
                onBeforeInput={
                    () => {
                        setIsOpen( true );
                    }
                }
                onChange={
                    ( input ) => {
                        setSearch( input.target.value );
                    }
                }></input>
        </form>
    );
};
function ProcesoRow ( { proceso }: { proceso: intProceso; } ) {
    const name = proceso.Demandado.slice( 0, 10 ).toLocaleLowerCase();
    const ultimAct = new Date( proceso.fechaUltimaActuacion ? proceso.fechaUltimaActuacion : '' );
    return (
        <Card
            id={ proceso.idProceso }
            content={ ultimAct.toLocaleString().slice( 0, 9 ) }
            title={ proceso.Demandado.toLowerCase().split( ' ' )[ 0 ] + ' ' + proceso.Demandado.toLowerCase().split( ' ' )[ 2 ] }
            href={ `/Procesos/${ proceso.tipo }/${ proceso.idProceso }` }
            icon={ 'heart_plus' } />


    );
}
export const Search = ( {
    procesos,
}: {
    procesos: intProceso[];
} ) => {
    const [
        search
    ] = useSearch();
    const rows: any[] = [
    ];
    procesos.forEach(
        ( proceso ) => {
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
        }
    );
    return (
        <div className={ layout.procesossearchbox }>{ rows }</div>
    );
};
export default SearchBar;
