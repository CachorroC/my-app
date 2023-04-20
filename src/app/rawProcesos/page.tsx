import { getLLavesProcesos } from "#@/app/api/llaves/getLlaves";
import Card from "#@/components/card";
import layout from '#@/styles/css/layout.module.css';

export default async function page () {
    const procesos = await getLLavesProcesos();
    return (
        <div className={ layout.card }>
            {
                procesos.map(
                    ( proceso ) => (
                        <Card id={ proceso.idProceso.toString() } key={ proceso.idProceso } content={ proceso.fechaUltimaActuacion } title={ proceso.sujetosProcesales } href={ '/' } icon={ "" } />
                    )
                )
            }
        </div>
    );
}