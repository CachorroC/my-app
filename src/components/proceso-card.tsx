
import { Proceso } from '#@/app/api/procesos/proceso';
import layout from '#@/styles/css/layout.module.css';
import Link from 'next/link';
import typeface from '#@/styles/css/typeface.module.css';
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