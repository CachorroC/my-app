import React from "react";
import Link from "next/link";
import styles from "#@/styles/css/actuacion.module.css";
import { Poiret_One } from "next/font/google";
import { getProcesos } from "#@/app/api/procesos/getProcesos";
import layout from "#@/styles/css/layout.module.css";
import { Proceso } from "#@/app/api/procesos/proceso";

import { LayoutHooks } from "#@/app/Procesos/router-context-layout";
import ContextSearchInput, {
    Search,
} from "#@/app/Procesos/context-input-search";
import box from "#@/styles/scss/box.module.scss";
import { TabGroup } from '#@/components/tab-group';
export const metadata = {
    title: "Reintegra",
};
const poiret = Poiret_One( {
    weight: "400",
    subsets: [
        "latin", "latin-ext"
    ],
    display: "swap",
} );
export default async function Layout ( {
    children,
    params,
}: {
    children: React.ReactNode;
    params: { tipo: string; };
} ) {
    const procesos = await getProcesos( {
        tipo: params.tipo,
    } );

    return (
        <div className={ layout.section }>
            <ContextSearchInput />
            <Link href={ `/Procesos/${ params.tipo }` }>{ params.tipo }</Link>
            <TabGroup
                path={ `/Procesos/${ params.tipo }` }
                items={ procesos }
            />

            { children }
            <LayoutHooks />
        </div>
    );
}
