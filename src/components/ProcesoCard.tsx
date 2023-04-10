
import Link from 'next/link';
import layout from '#@/styles/css/layout.module.css';
import typeface from '#@/styles/css/typeface.module.css';
import { Proceso } from '../app/api/procesos/proceso';
export const ProcesoCard = (
    {
        proceso,
        href
    }: {
        proceso: Proceso;
        href: string;
    }
) => (
    <Link href={ href } className={ layout.card }>
        <h4 className={ typeface.card }>{
            proceso.Demandado
        }</h4>
        <i>
            <strong>{
                proceso.fechaUltimaActuacion?.toString()
            }</strong>
        </i>
    </Link>
);