import { getBaseUrl } from "#@/lib/getBaseUrl";
import { notFound } from "next/navigation";
import { Proceso } from "#@/app/api/procesos/proceso";
import "server-only";

export async function getProcesos (
  { tipo }: { tipo?: string; } = {}
) {
  const res = await fetch(
    `${ getBaseUrl() }/api/procesos${ tipo ? `?tipo=${ tipo }` : "" }`
  );
  if ( !res.ok ) {
    throw new Error( "something went wrong" );
  }
  const procesos = (
        await res.json()
    ) as Proceso[];

  if ( procesos.length === 0 ) {
    notFound();
  }
  return procesos;
}
export async function getProcesosStringify (
  { tipo }: { tipo?: string; } = {}
) {
  const res = await fetch(
    `${ getBaseUrl() }/api/procesos${ tipo ? `?tipo=${ tipo }` : "" }`
  );
  if ( !res.ok ) {
    throw new Error( "something went wrong" );
  }
  const procesos = ( await res.json() ) as Proceso[];

  return new Response( JSON.stringify( procesos ?? null ), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  } );
}
export async function getProceso (
  { slug }: { slug: string; }
) {
  const res = await fetch(
    `${ getBaseUrl() }/api/procesos${ slug ? `?slug=${ slug }` : "" }`
  );
  if ( !res.ok ) {
    // Render the closest `error.js` Error Boundary
    throw new Error( "Something went wrong!" );
  }
  const proceso = ( await res.json() ) as Proceso;

  if ( !proceso ) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return proceso;
}
