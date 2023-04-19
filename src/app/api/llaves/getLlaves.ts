import { intProceso } from "../procesos/proceso";
import { notFound } from 'next/navigation';
import { data } from "./route";

export async function getData ( llave: string ) {
    const res = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llave }&SoloActivos=false`,
    );
    if ( !res.ok ) {
        throw new Error( "something went wrong" );

    }
    const respuesta = await res.json();
    const procesos = ( respuesta.procesos ) as intProceso[];
    if ( procesos.length === 0 ) {
        notFound();
    }
    return procesos;

}

export async function getLlaves () {
    const procesos = data.map(
        ( llave, index, array ) => {
            setTimeout(
                () => {
                    getData( llave );
                }, index * 1000
            );
        }
    );
    return procesos as unknown as intProceso[];
}