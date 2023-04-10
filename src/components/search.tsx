"use client";

import searchbar from "#@/styles/css/searchbar.module.css";
import { Proceso } from "#@/app/api/procesos/proceso";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBaseUrl } from "#@/lib/getBaseUrl";

export async function fetchProceso() {
    const res = await fetch(`${getBaseUrl()}/api/procesos`);
    if (!res.ok) {
        // Render the closest `error.js` Error Boundary
        throw new Error("Something went wrong!");
    }
}
export async function SearchItems({
    search,
    hasUltimaActuacion,
}: {
    search: string;
    hasUltimaActuacion: boolean;
}) {
    const rows: any[] = [];
    const res = await fetch(`${getBaseUrl()}/api/procesos`);

    const procesos = (await res.json()) as Proceso[];

    procesos.forEach((proceso: Proceso) => {
        if (
            proceso.Demandado.toLowerCase().indexOf(search.toLowerCase()) === -1
        ) {
            return;
        }
        rows.push(<Item proceso={proceso} key={proceso.Demandado} />);
    });

    return <div className={searchbar.itemscontainer}>{rows}</div>;
}
export const Item = ({ proceso }: { proceso: Proceso }) => {
    const href = `/Procesos/${proceso.tipo}/${proceso.slug}`;
    const ultimact = proceso.fechaUltimaActuacion === null;
    const Demandado = ultimact ? (
        <span style={{ color: "red" }}>{proceso.Demandado}</span>
    ) : (
        proceso.Demandado
    );
    return (
        <Link href={`/${href}`} className={searchbar.tab}>
            <h1 className={searchbar.title}>
                {proceso.Demandado.toLocaleLowerCase()}
            </h1>
            <span className="material-symbols-outlined">
                {ultimact ? "lock" : "book"}
            </span>
        </Link>
    );
};
