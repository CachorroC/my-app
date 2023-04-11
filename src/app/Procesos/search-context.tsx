"use client";
import React from "react";
import { useState, Suspense } from "react";
import { Proceso } from "#@/app/api/procesos/proceso";
import { SearchItems, SearchItemsEskeleton } from "#@/components/search";
import { useParams } from "next/navigation";
import ContextInputSearch from './context-input-search';


const SearchContext = React.createContext<
    [ string, React.Dispatch<React.SetStateAction<string>> ] | null
>( null );

export function SearchProvider ( { children }: { children: React.ReactNode; } ) {
    const params = useParams();
    const [
        search, setSearch
    ] = React.useState( "" );
    const [
        hasUltimaActuacion, setUltimaActuacion
    ] = React.useState( false );
    return (
        <SearchContext.Provider value={ [
            search, setSearch
        ] }>
            <h1>search context</h1>
            <ContextInputSearch />


            { children }
        </SearchContext.Provider>
    );
}

export function useSearch () {
    const context = React.useContext( SearchContext );
    if ( context === null ) {
        throw new Error( " no sirvio" );
    }
    return context;
}
