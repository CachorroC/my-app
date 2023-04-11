import layout from "#@/styles/css/layout.module.css";
import typeface from "#@/styles/css/typeface.module.css";
import { Actuacion } from '../app/api/procesos/proceso';

export default function ActuacionCard ( {
    actuacion
}: {
    actuacion: Actuacion;
} ) {
    return (
        <div className={ layout.card } key={ actuacion.consActuacion }>
            <h1 className={ typeface.title }>{ actuacion.anotacion }</h1>
            <p className={ typeface.block }>{ actuacion.fechaActuacion }</p>
        </div>
    );
}
