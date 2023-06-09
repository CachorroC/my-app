
import { Proceso } from '#@/app/api/procesos/proceso';
import layout from '#@/styles/css/layout.module.css';
import Link from 'next/link';
import typeface from '#@/styles/css/typeface.module.css';
import searchbar from '#@/styles/css/searchbar.module.css';
import box from '#@/styles/scss/box.module.scss';
export const Procesos = (
  {procesos}: {procesos: Proceso[]}
) => (
  <div className={ box.container }>
    {
      procesos.map(
        ( proceso: Proceso ) => (
          <ProcesoCard
            key={ proceso.idProceso } 
            proceso={ proceso }
          />
        )
      )
    }
  </div> 
);
export const ProcesoCard = (
  {
    proceso,

    }: {
        proceso: Proceso;

  }
) => {
    const href = `Procesos/${ proceso.tipo }/${ proceso.slug }`;
    const ultimact = proceso.fechaUltimaActuacion === null;

  const Icon = <span className='material-symbols-outlined'>{ ultimact ? 'lock' : 'star' }</span>;
  return (

        <Link href={ `/${ href }` } className={ layout.card }>
            <h1 className={ searchbar.title }>{
                proceso.Demandado.toLowerCase()
            }</h1>
            { Icon }
            <i>
                <strong>{
                    proceso.fechaUltimaActuacion?.toString()
                }</strong>
            </i>
        </Link>
    );
};