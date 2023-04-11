import { SkeletonActuacion } from '#@/components/skeleton-actuacion';
import box from '#@/styles/scss/box.module.scss';
import typeface from '#@/styles/css/typeface.module.css';
export default function Loading () {
  return (
    <div className={ box.container }>
      <h1 className={ typeface.title }>Loading...</h1>

      <div className={ box.grid }>
        <SkeletonActuacion isLoading={ true } />
        <SkeletonActuacion isLoading={ true } />
        <SkeletonActuacion isLoading={ true } />
        <SkeletonActuacion isLoading={ true } />
        <SkeletonActuacion isLoading={ true } />
        <SkeletonActuacion isLoading={ true } />
      </div>
    </div>
  );
}
