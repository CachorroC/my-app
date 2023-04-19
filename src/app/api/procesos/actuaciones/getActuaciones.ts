import { notFound } from 'next/navigation';
import { getBaseUrl } from '../../../../lib/getBaseUrl';
import { Actuacion } from './actuacion';
export async function getActuaciones({
    idProceso,
}: { idProceso?: string } = {}) {
    const res = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${idProceso}`,
        { cache: 'no-store' },
    );
    if (!res.ok) {
        throw new Error('something went wrong');
    }
    const data = await res.json();

    const actuaciones = data.actuaciones as Actuacion[];

    if (actuaciones.length === 0) {
        notFound();
    }
    return actuaciones;
}
