import { getBaseUrl } from '#@/lib/getBaseUrl';
import { notFound } from 'next/navigation';

import 'server-only';
import type { NumeroRadicacion, intLLaveProceso } from './llaveProceso';

export async function getLLavesProcesos () {
    const res = await fetch(
        `${ getBaseUrl() }/api/llaves`
    );
    if ( !res.ok ) {
        throw new Error( "no pudimos pedir las llaves" );
    }
    const llavesProcesos = ( await res.json() ) as intLLaveProceso[];
    if ( llavesProcesos.length === 0 ) {
        notFound();
    }
    return llavesProcesos;
}

export async function getLLaveProceso (
    {
        llaveProceso
    }: {
        llaveProceso: string;
    }
) {
    const res = await fetch(
        `${ getBaseUrl() }/api/llaves${ llaveProceso ? `llaveProceso=${ llaveProceso }` : '' }`,
    );
    if ( !res.ok ) {
        //? Render the closest `error.js` Error Boundary
        throw new Error( 'Something went wrong!' );
    }
    const proceso = ( await res.json() ) as intLLaveProceso;
    if ( !proceso ) {
        //? Render the closest `not-found.js` Error Boundary
        notFound();
    }

    return proceso;
};
export async function fetchLLaveProcesos ( {
    procesos,
}: {
    procesos: string[];
} ) {
    const rows: any[] = [
    ];
    procesos.forEach(
        ( proceso, i ) => {
            ;
            setTimeout(
                async () => {
                    const res = await fetch(
                        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ proceso }&SoloActivos=false`
                    );
                    if ( !res.ok ) {
                        //? Render the closest `error.js` Error Boundary
                        throw new Error( 'Something went wrong!' );
                    }
                    const procesosRaw = ( await res.json() ) as NumeroRadicacion;
                    rows.push( procesosRaw.procesos );
                    return procesosRaw.procesos;
                }, i * 1000
            );
        }
    );
    return rows;
}
