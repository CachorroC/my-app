"use client";
import React from "react";
import { useState, Suspense } from "react";
import { Proceso } from "#@/app/api/procesos/proceso";
import { SearchItems } from "#@/components/search";
import { useParams } from "next/navigation";

const SearchContext = React.createContext<
    [string, React.Dispatch<React.SetStateAction<string>>] | null
>(null);

export function ProcesosProvider({ children }: { children: React.ReactNode }) {
    const params = useParams();
    const [
        search, setSearch
    ] = React.useState("");
    const [
        hasUltimaActuacion, setUltimaActuacion
    ] = React.useState(false);
    return (
        <SearchContext.Provider value={[
            search, setSearch
        ]}>
            {/* @ts-expect-error Async Server Component */}

            <SearchItems
                search={search}
                hasUltimaActuacion={hasUltimaActuacion}
            />

            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const context = React.useContext(SearchContext);
    if (context === null) {
        throw new Error(" no sirvio");
    }
    return context;
}
