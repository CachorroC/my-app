import clsx from 'clsx';
import typeface from '#@/styles/css/typeface.module.css';
import layout from '#@/styles/css/layout.module.css';
import box from '#@/styles/scss/box.module.scss';
import { poiret } from './typeface';

export const SkeletonActuacion = ( { isLoading }: { isLoading?: boolean } ) => {
  if ( isLoading ) {
    return (
      <div
        className={ box.container }
      >
        <div className={ layout.card } >
          <h1 className={ poiret.className }>Cargando</h1>
          <p className={ typeface.block }>00/00/0000</p>
        </div>
      </div>
    );
  }
  return <div>h</div>;

};
