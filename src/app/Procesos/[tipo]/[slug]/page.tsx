import type { Actuacion } from "#@/app/api/procesos/proceso";
import { notFound } from "next/navigation";
import styles from "#@/styles/css/actuacion.module.css";
import box from "#@/styles/scss/box.module.scss";

import typeface from '#@/styles/css/typeface.module.css';
import ActuacionCard from '#@/components/actuacion-card';


export default async function Page (
    {
        params,
    }: {
        params: { tipo: string; slug: string; };
    }
) {
    const res = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ params.slug }`,
        { cache: "no-store" }
    );
    if ( !res.ok ) {
        // Render the closest `error.js` Error Boundary
        throw new Error( 'Something went wrong!' );
    }
    const rawActuaciones = ( await res.json() );
    const actuaciones = rawActuaciones.actuaciones;
    if ( !actuaciones ) {
        // Render the closest `not-found.js` Error Boundary
        notFound();
    }


    return (
        <div className={ box.container }>
            <h1 className={ typeface.title }>Loading...</h1>

            <div className={ box.grid }>
                {
                    actuaciones.map(
                        ( actuacion: Actuacion ) =>
                            <ActuacionCard key={ actuacion.consActuacion } actuacion={ actuacion } />

                    )
                }
            </div>
        </div>
    );
}
