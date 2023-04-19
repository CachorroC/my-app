import { getLlaves } from "#@/app/api/llaves/getLlaves";
import layout from '#@/styles/css/layout.module.css';

export default async function page () {
    const procesos = await getLlaves();
    return (
        <div className={ layout.card }>
            {
                procesos.map(
                    ( proceso ) => (
                        <div className={ layout.card } key={ proceso.idProceso }>
                            <h1>{ proceso.idProceso }</h1>
                        </div>
                    )
                )
            }
        </div>
    );
}