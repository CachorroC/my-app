import { getBaseUrl } from '#@/lib/getBaseUrl';
import { notFound } from 'next/navigation';
import { intProceso } from '#@/app/api/procesos/proceso';
import 'server-only';
import * as fs from 'fs/promises';

export async function addData ( proceso: string | any[] ) {
    const newProceso = proceso.slice( 1, -1 );

    fs.appendFile( 'reintegra.json', newProceso + ',' );
}

export async function fetchProcesos ( {
    procesos,
}: {
    procesos: intProceso[];
} ) {
    const rows: any[] = [
    ];
    procesos.forEach(
        ( proceso, i ) => {
            const llaveProceso = proceso.llaveProceso;
            setTimeout(
                () => {
                    const res = fetchProceso( llaveProceso );
                    return rows.push( res );
                }, i * 1000
            );
        }
    );
    return addData( rows );
}

export async function fetchProceso ( llaveProceso: string ) {
    const res = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llaveProceso }&SoloActivos=false`,
    );
    const data = await res.json();
    const proceso = JSON.stringify( data.procesos );
    return proceso;
}
export async function getProcesos (
    {
        tipo,
    }: {
        tipo?: string;
    } = {}
) {
    const res = await fetch(
        `${ getBaseUrl() }/api/procesos${ tipo ? `?tipo=${ tipo }` : ''
        }`,
    );
    if ( !res.ok ) {
        throw new Error( 'something went wrong' );
    }
    const procesos = ( await res.json() ) as intProceso[];

    if ( procesos.length === 0 ) {
        notFound();
    }
    return procesos;
}
export async function getProcesosStringify (
    {
        tipo,
    }: { tipo?: string; } = {} ) {
    const res = await fetch(
        `${ getBaseUrl() }/api/procesos${ tipo ? `?tipo=${ tipo }` : ''
        }`,
    );
    if ( !res.ok ) {
        throw new Error( 'something went wrong' );
    }
    const procesos = (
        await res.json()
    ) as intProceso[];

    return new Response(
        JSON.stringify( procesos ?? null ), {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        }
    );
}
export async function getProceso ( {
    idProceso,
}: {
    idProceso: string;
} ) {
    const res = await fetch(
        `${ getBaseUrl() }/api/procesos${ idProceso ? `?idProceso=${ idProceso }` : ''
        }`,
    );
    if ( !res.ok ) {
        //? Render the closest `error.js` Error Boundary
        throw new Error( 'Something went wrong!' );
    }
    const proceso = ( await res.json() ) as intProceso;

    if ( !proceso ) {
        //? Render the closest `not-found.js` Error Boundary
        notFound();
    }

    return proceso;
}

export async function getAsyncProceso ( {
    llaveProceso,
}: {
    llaveProceso: string;
} ) {
    const res = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llaveProceso }&SoloActivos=false`,
        { cache: 'no-store' },
    );
    if ( !res.ok ) {
        //? Render the closest `error.js` Error Boundary
        throw new Error( 'Something went wrong!' );
    }
    const rawProcesos = await res.json();
    const procesos = rawProcesos.procesos;
    if ( !procesos ) {
        //? Render the closest `not-found.js` Error Boundary
        notFound();
    }
    return procesos;
}
