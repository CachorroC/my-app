import layout from '#@/styles/css/layout.module.css';
import typeface from '#@/styles/css/typeface.module.css';
import { Actuacion } from '#@/app/api/procesos/actuaciones/actuacion';
import box from '#@/styles/scss/box.module.scss';
import { poiret } from './typeface';
export function Actuaciones({
    actuaciones,
}: {
    actuaciones: Actuacion[];
}) {
    return (
        <div className={box.grid}>
            {actuaciones.map((actuacion: Actuacion) => (
                <ActuacionCard
                    key={actuacion.consActuacion}
                    actuacion={actuacion}
                />
            ))}
        </div>
    );
}

export function ActuacionCard({
    actuacion,
}: {
    actuacion: Actuacion;
}) {
    return (
        <div
            className={layout.card}
            key={actuacion.consActuacion}>
            <h1 className={poiret.className}>
                {actuacion.actuacion}
            </h1>
            <p className={typeface.block}>
                {actuacion.anotacion}
            </p>
            <i>{actuacion.fechaActuacion}</i>
        </div>
    );
}
